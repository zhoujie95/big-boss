import request from '@/utils/request'

//获取待批试卷信息
export let getpaper=(params)=>{
   return request.get('/manger/grade',params)
}
//获取学生试卷详情
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