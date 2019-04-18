import request from '@/utils/request'

//获取全部教室信息
export let getjiaoshis = ()=>{
    return request.get('manger/room')
}
//获取全部课程
export let getkechengs = ()=>{
    return request.get('/exam/subject')
}
//添加教室
export let addjiaoshi = (params)=>{
    return request.post('manger/room',params)
}
//删除教室
export let deljiaoshi = (params)=>{
    return request.delete('/manger/room/delete',{data:params})
}
//获取全部班级信息
export let getbanji = ()=>{
    return request.get('manger/grade')
}
//添加班级
export let addbanji = (params)=>{
    return request.post('/manger/grade',params)
}
//删除班级
export let delbanjis = (params) =>{
    return request.delete('/manger/grade/delete',{data:params})
}