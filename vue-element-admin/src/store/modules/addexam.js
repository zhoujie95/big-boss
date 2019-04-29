
import {gettype,getclass,getquestion,
        addquestion,addQuesType,getAllQues,
        selectQues,
        updateques,
        deleteQues} from '@/api/exam.js'

const state = {
   testType:[],
   classType:[],
   questionType:[],
   allquestions:[]
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
  //获取所有的试题列表
  getAllQues(state,payload){
    state.allquestions=payload
  }
}
const actions = {

  //请求所有考试类型
  async gettype({ commit }, payload) {
   await gettype().then(res=>{
     //console.log('test...',res.data)
     commit('gettype', res.data)
   })
  },
 
  //请求所有课程类型的数据
  async getclass({ commit }, payload) {
    await getclass().then(res=>{
      //console.log('class...',res.data)
      commit('getclass', res.data)
     })
  },

  //请求所有试题类型
  async getquestion({ commit }, payload) {
    let result=await getquestion()

      commit('getquestion', result.data)

    return result.data.length
  },

  //添加试题
  async addquestion({commit},payload){
     let result=await addquestion(payload)
     console.log('result..',result)
     return result
  },

  //添加试题类型
   async addQuesType({commit},payload){
       let {text,sort}=payload
       let num=sort
       num++
      //  console.log(num.toString())
       let result =await addQuesType({
          text:text,
          sort:num.toString()
       })
   },

  //获取所有试题
   async getAllQues({commit},payload){
        await getAllQues(payload).then(res=>{
          commit('getAllQues',res.data)
        })
      //  console.log('quest....',result.data)
    
   },
   //按条件查询试题
   async selectQues({commit},payload){
      let result=await selectQues(payload)
      commit('getAllQues',result.data)
   },
   //更新试题
   async updateques({commit},payload){
       let result=await updateques(payload)
   },
   async deleteQues({commit},payload){
     let result=await deleteQues(payload)
     return result
   }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
