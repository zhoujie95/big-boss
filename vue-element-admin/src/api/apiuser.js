import request from '@/utils/request';
//身份权限
export let identity=()=>{
    return request({
        url:"/user/identity",
        method:"get"
    })
} 
//视图权限
export let view_authority=()=>{
    return request({
        url:"/user/view_authority",
        method:"get"
    })
} 
//api权限
export let api_authority=()=>{
    return request({
        url:"/user/api_authority",
        method:"get"
    })
} 
//用户展示
export let user=()=>{
    return request({
        url:"/user/user",
        method:"get"
    })
} 
//身份和api权限关系
export let identity_api=()=>{
    return request({
        url:"/user/identity_api_authority_relation",
        method:"get"
    })
} 
//身份和视图权限关系
export let identity_view=()=>{
    return request({
        url:"/user/identity_view_authority_relation",
        method:"get"
    })
} 




//添加用户
export let adduser=(data)=>{
    //console.log('data...',data)
    return request.post('/user',{
        data
    })
} 
//添加身份
export let addshenfen=(data)=>{
    return request({
        url:"/user/identity/edit",
        method:"post",
        data
    })
} 
//添加api
export let addapi=(data)=>{
    return request({
        url:"/user/authorityApi/edit",
        method:"get",
        data
    })
} 
//添加视图借口
export let addview=(data)=>{
    return request({
        url:"/user/authorityView/edit",
        method:"get",
        data
    })
} 
 //设置api身份接口
export let apishenfen=(data)=>{
    return request({
        url:"/user/setIdentityApi",
        method:"post",
        data
    })
} 
//给身份设置视图
export let shenfenview=(data)=>{
    return request({
        url:"/user/setIdentityView",
        method:"post",
        data
    })
} 
  //更新用户
  export let newuser=(data)=>{
    return request({
        url:"/user/user",
        method:"put",
        data
    })
} 
