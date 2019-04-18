
import axios from 'axios'
import { getToken} from '@/utils/auth'
import {gettype,getclass,getquestion,addquestion,addQuesType} from '@/api/exam.js'

const state = {
   testType:[],
   classType:[],
   questionType:[],
   questions:[]
}
const mutations = {
  //获取考试类型
  gettype(state,payload){
    state.testType=payload
  },
  //获取课程类型
  getclass(state,payload){
    state.classType=payload
  },
  //获取试题类型
  getquestion(state,payload){
    state.questionType=payload
  },

  GET_QUESTIONS:(state,allquestion)=>{
      state.questions=allquestion
  }
}

const actions = {

  //请求所有考试类型
  async gettype({ commit }, payload) {
    let result = await gettype()
    commit('gettype', result.data)
  },

  //请求所有课程类型的数据
  async getclass({ commit }, payload) {
    let result = await getclass()
    commit('getclass', result.data)
  },

  //请求所有试题类型
  async getquestion({ commit }, payload) {
    let result = await getquestion()
    commit('getquestion', result.data)
    return result.data.length
  },

  //添加试题
  async addquestion({commit},payload){
     let result=await addquestion(payload)
  },

  //添加试题类型
   async addQuesType({commit},payload){
       let result =await addQuesType(payload)
   },

  //获取所有试题
  getQuestions({commit}){
     axios.get('/api/exam/questions/new',{
      headers:{'authorization':getToken()}
     }).then(res=>{
       commit('GET_QUESTIONS',res.data.data)
     })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
