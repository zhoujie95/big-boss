import {getpaper,getdetail,getClasses,getstudent,upscore} from '@/api/testpaper.js'
const state={
  paperData:[],
  details:[],
  allclass:[],
  student:[]
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
  },
  //获取学生试卷详情
  GET_STUDENT:(state,student)=>{
      state.student=student
  }
}

const actions = {
  //获取待批试卷列表
  async getpaper({ commit }, payload) {
    let result = await getpaper()
    //console.log('result....',result.data)
    commit('GET_PAPER', result.data)
  },
  //获取班级学生试卷列表
  async getdetail({ commit }, payload) {
    let result = await getdetail(payload)
    //console.log('result....', result)
    if(result){
      commit('GET_DETAIL',result.exam)
    }else{
      commit('GET_DETAIL',[])
    }
  },
  //获取班级
  async getClasses({commit}){
     let result=await getClasses()
     commit('GET_ALLCLASS',result.data)
  },
  //获取学生试卷详情
  async getstudent({commit},payload){
      let result=await getstudent(payload)
      commit('GET_STUDENT',result.data)
  },
  //批改试卷
  async upscore({commit},payload){
    //console.log('payload...',payload)
      let result=await upscore(payload)
      console.log('result....',result)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}