import {getpaper,getdetail,getClasses} from '@/api/testpaper.js'
const state={
  paperData:[],
  details:[],
  allclass:[]
}

const mutations = {
  //获取待批试卷列表
  GET_PAPER: (state, paperlist) => {
    state.paperData = paperlist
  },
  //获取学生试卷详情
  GET_DETAIL: (state, details) => {
    state.details = details
  },
  //获取所有分配教室的班级
  GET_ALLCLASS:(state,allclass)=>{
      state.allclass=allclass
  }
}

const actions = {
  //获取待批试卷列表
  async getpaper({ commit }, payload) {
    let result = await getpaper()
    //console.log('result....',result.data)
    commit('GET_PAPER', result.data)
  },
  //获取学生试卷详情
  async getdetail({ commit }, payload) {
    let result = await getdetail(payload)
    //console.log('result....', result.exam)
    commit('GET_DETAIL',result.exam)
  },
  //获取班级
  async getClasses({commit}){
     let result=await getClasses()
     commit('GET_ALLCLASS',result.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}