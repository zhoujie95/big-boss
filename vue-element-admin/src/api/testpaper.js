import request from '@/utils/request'

//获取待批试卷信息
export let getpaper=(params)=>{
   return request.get('/manger/grade',params)
}
//获取班级学生试卷列表
export let getdetail=(params)=>{
   //console.log('params....',params)
   return request.get('/exam/student',{
       params:{
          grade_id:params.grade_id
       }
   })
}
//获取分配教室的班级
export let getClasses=(params)=>{
     return request.get('/manger/grade',params)
}
//获取学生试卷详情
export let getstudent=(params)=>{
     return request.get(`/exam/student/${params.exam_student_id}`)
}
//批改试卷
export let upscore=(params)=>{
     return request.put('/exam/student/t27znv-gu7azm-qpq9ai-laaf9m',params)
}