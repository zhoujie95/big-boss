import request from '@/utils/request'

//获取全部教室信息
export let getjiaoshis = ()=>{
    return request.get('manger/room')
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