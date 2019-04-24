import { login, logout, getInfo, getViewAuthority,updateuser} from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  userInfo:{},
  viewAuthority:[],
  updata:[]
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
  SET_USERINFO:(state,userInfo)=>{
     state.userInfo=userInfo
  },
  SET_VIEWAUTHORITY:(state,viewAuthority)=>{
     state.viewAuthority=viewAuthority
  },
  SET_UPDATA:(state,updates)=>{
      state.updata=updates
  },
  SET_USER:(state)=>{
    state.userInfo = {}
  }
}

const actions = {
  // user login

  async login({ commit }, userInfo) {
    //console.log(userInfo)
    const { username, password } = userInfo
    let res = await login({user_name: username, user_pwd: password});
    setToken(res.token);
    return res;
  },

  // 获取登陆信息
  async getInfo({ commit }) {
    let data = await getInfo()
    //console.log('data....', data)
    commit('SET_USERINFO', data.data)
    return data.data
  },
  //获取视图权限
  async getViewAuthority({commit},payload){
   let userAuthority=await getViewAuthority(payload)
   //console.log('user....',userAuthority.data)
   if(userAuthority.code==1){
      commit('SET_VIEWAUTHORITY',userAuthority.data)
      return userAuthority.data
   }
   return []
  //  commit('SET_VIEWAUTHORITY',userAuthority.data)
  //  return userAuthority.data
  },
  async updateuser({commit},payload){
      let result=await updateuser(payload)
      return result
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
        commit('SET_USER')
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        commit('SET_USERINFO',{})
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