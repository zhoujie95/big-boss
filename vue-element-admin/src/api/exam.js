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

//更改试题
export let updateques=(params)=>{
    return request.put('/exam/questions/update',params)
}
//添加试题类型
export let addQuesType=(params)=>{
    return request.get('/exam/insertQuestionsType',{
      params:
      {
        text:decodeURI(params.text),
        sort:params.sort
      }
    })
} 

//获取所有试题
export let getAllQues=(params)=>{
    return request.get('/exam/questions/new',params)
}
//按条件查询试题
export let selectQues=(params)=>{
     return request.get('/exam/questions/condition',{
       params:{
        subject_id:params.subject_id,
        exam_id:params.exam_id,
        questions_type_id:params.questions_type_id
       }
     })
}
//删除指定的试题类型
export let deleteQues=(params)=>{
   return request.post('/exam/delQuestionsType',params)
}