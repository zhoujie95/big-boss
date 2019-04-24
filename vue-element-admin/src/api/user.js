import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
//添加用户信息
export function getInfo(token) {
  return request({
    url: '/user/userInfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
//获取视图权限
export function getViewAuthority(params){
  //console.log(params)
 return request.get('/user/new',{
   params:{
     user_id:params.user_id
   }
 })
}
//更新用户信息
export let updateuser=(params)=>{
  //console.log('params....',params)
   return request.put('/user/user',params)
}

