<<<<<<< HEAD
import { login, logout, getInfo,getViewAuthority } from '@/api/user'
=======
import { login, logout, getInfo, getViewAuthority} from '@/api/user'
>>>>>>> a581b80f0a250198a195e82c7a28b3d5d2e117d7
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'


const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
<<<<<<< HEAD
  userInfo:{},   //登陆用户信息
  viewAuthority: []   // 用户路由权限
=======
  userInfo:{},
  viewAuthority:[]
>>>>>>> a581b80f0a250198a195e82c7a28b3d5d2e117d7
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
<<<<<<< HEAD
  SET_USERINFO:(state,data)=>{
    state.userInfo = data
  },
  SET_VIEWLUYOUS:(state,viewAuthority)=>{
    state.viewAuthority=viewAuthority
=======
  SET_USERINFO:(state,userInfo)=>{
     state.userInfo=userInfo
  },
  SET_VIEWAUTHORITY:(state,viewAuthority)=>{
     state.viewAuthority=viewAuthority
>>>>>>> a581b80f0a250198a195e82c7a28b3d5d2e117d7
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
    // return new Promise((resolve, reject) => {
    //   login({ username: username.trim(), password: password }).then(response => {
    //     const { data } = response
    //     commit('SET_TOKEN', data.token)
    //     setToken(data.token)
    //     resolve()
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
  },

<<<<<<< HEAD
  // get user info
  //请求用户信息
  async getInfo({ commit }) {
      let data = await getInfo();
      //console.log('data...',data)
      commit('SET_USERINFO',data.data)
      return data.data
    // return new Promise((resolve, reject) => {
    //   getInfo(state.token).then(response => {
    //     const { data } = response

    //     if (!data) {
    //       reject('Verification failed, please Login again.')
    //     }

    //     const { roles, name, avatar, introduction } = data

    //     // roles must be a non-empty array
    //     if (!roles || roles.length <= 0) {
    //       reject('getInfo: roles must be a non-null array!')
    //     }

    //     commit('SET_ROLES', roles)
    //     commit('SET_NAME', name)
    //     commit('SET_AVATAR', avatar)
    //     commit('SET_INTRODUCTION', introduction)
    //     resolve(data)
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
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
=======
  // 获取登陆信息
  async getInfo({ commit }) {
    let data = await getInfo()
    //console.log('data....', data)
    commit('SET_USERINFO', data.data)
    return data.data
  },
  //获取视图权限
  async getViewAuthority({commit},payload){
   let userAuthority=await getViewAuthority()
   //console.log('user....',userAuthority)
   if(userAuthority.code==1){
      commit('SET_VIEWAUTHORITY',userAuthority.data)
      return userAuthority.data
   }
   return []
  //  commit('SET_VIEWAUTHORITY',userAuthority.data)
  //  return userAuthority.data
  },
    // return new Promise((resolve, reject) => {
    //   getInfo(state.token).then(response => {
    //     const { data } = response

    //     if (!data) {
    //       reject('Verification failed, please Login again.')
    //     }

    //     const { roles, name, avatar, introduction } = data

    //     // roles must be a non-empty array
    //     if (!roles || roles.length <= 0) {
    //       reject('getInfo: roles must be a non-null array!')
    //     }

    //     commit('SET_ROLES', roles)
    //     commit('SET_NAME', name)
    //     commit('SET_AVATAR', avatar)
    //     commit('SET_INTRODUCTION', introduction)
    //     resolve(data)
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })


>>>>>>> a581b80f0a250198a195e82c7a28b3d5d2e117d7
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
