
import axios from 'axios'
import { getToken} from '@/utils/auth'
const state = {
   testType:[],
   classType:[],
   questionType:[]
}
const mutations = {
  GET_ALLTYPE: (state,typelist) => {
    state.testType = typelist
  },
  GET_ALLCLASS: (state,classlist) => {
    state.classType = classlist
  },
  GET_QUESTION:(state,questionlist)=>{
      state.questionType=questionlist
  }
}

const actions = {
  //请求所有考试类型的数据
  async gettype({ commit }) {
      await axios.get('/api/exam/examType',{
        headers:{'authorization':getToken()}
      }).then(res=>{
          commit('GET_ALLTYPE',res.data)
       })
  },
  //请求所有课程类型的数据
  async getclass({ commit }) {
    await axios.get('/api/exam/subject',{
      headers:{'authorization':getToken()}
      }).then(res=>{
          commit('GET_ALLCLASS',res.data)
      })
  },
  //请求所有题目类型
  async getquestion({ commit }) {
    await axios.get('/api/exam/getQuestionsType',{
      headers:{'authorization':getToken()}
    }).then(res=>{
        commit('GET_QUESTION',res.data)
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
