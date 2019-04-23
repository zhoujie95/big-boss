import { login, logout, getInfo,getViewAuthority,upuesrdatas } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'


const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  userInfo:{},   //登陆用户信息
  viewAuthority: []   // 用户路由权限
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_USERINFO:(state,data)=>{
    state.userInfo = data
  },
  SET_VIEWLUYOUS:(state,viewAuthority)=>{
    state.viewAuthority=viewAuthority
  }
}

const actions = {
  // user login
  //接受参数，用户名密码，请求接口！接受返回值，设置token,把接收到的返回值return出去
  async login({ commit }, userInfo) {
    const { username, password } = userInfo
    let res = await login({user_name:username,user_pwd:password})
    //console.log('res...',res)
    setToken(res.token)
    return res
  
  },

  // get user info
  //请求用户信息
  async getInfo({ commit }) {
      let data = await getInfo();
      //console.log('data...',data)
      commit('SET_USERINFO',data.data)
      return data.data
   
  },
  //通过身份获取权限
  async getViewAuthority({commit}){
    let viewluyous = await getViewAuthority()
    //console.log(viewluyous)
    if(viewluyous.code==1){
      commit('SET_VIEWLUYOUS',viewluyous.data)
      return viewluyous.data
    }
    return []
  },
  //更新用户信息
  async upuserdata({commit},played){
    console.log(played)
     let yh = await upuesrdatas(played)
     console.log(yh)
  },
  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // Dynamically modify permissions
  changeRoles({ commit, dispatch }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)

      const { roles } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
