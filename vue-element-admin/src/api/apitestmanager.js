
import request from '@/utils/request'

export let test=()=>{
    return request({
        url:"/exam/examType",
        method:"get"
    })
} 

