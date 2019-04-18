import request from '@/utils/request'

//获取所有考试类型
export let gettype=(params)=>{
   return request.get('/exam/examType',params)
}

//获取课程类型
export let getclass=(params)=>{
    return request.get('/exam/subject',params)
} 

//获取试题类型
export let getquestion=(params)=>{
   return request.get('/exam/getQuestionsType',params)
}

//添加试题
export let addquestion=(params)=>{
    return request.post('/exam/questions',params)
}
//添加试题类型
export let addQuesType=(params)=>{
  
    params.sort++
    return request.get('/exam/insertQuestionsType',{
      params:
      {
        text:decodeURI(params.text),
        sort:params.sort.toString()
      }
    })
} 