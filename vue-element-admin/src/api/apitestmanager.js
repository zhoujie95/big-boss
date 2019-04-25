
import request from '@/utils/request'

//考试类型
export let testtype=()=>{
    return request({
        url:"/exam/examType",
        method:"get"
    })
} 
//考试班级

export let testclass=()=>{
    return request({
        url:"/exam/subject",
        method:"get"
    })
} 

//试卷列表
export let testlist=(data)=>{

    return request({
        url:"/exam/exam",
        method:"get",
        data
    })
} 

//创建试卷
export let addtest=(data)=>{
    return request({
        url:"/exam/exam",
        method:"post",
        data
    })
} 
//更新试卷 
export let updatetest=(dt,data)=>{
    return request({
        url:`/exam/exam/${dt}`,
        method:"put",
        data
    })
}

//删除试卷

export let deletetest=(dt)=>{
    return request({
        url:`/exam/exam/${dt}`,
        method:"delete"
    })
}

//获取详情

export let getdetail=(dt)=>{
    return request({
        url:`/exam/exam/${dt}`,
        method:"get"
    })
}