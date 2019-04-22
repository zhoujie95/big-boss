const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  addRoutes: state => state.permission.addRoutes,
  errorLogs: state => state.errorLog.logs,
<<<<<<< HEAD
  userInfo:state=>state.user.userInfo
=======
  userInfo:state=>state.user.userInfo,
  details:state=>state.testpaper.details.map((item)=>{
        if(item.status){
           item['state']='已阅'
        }else{
           item['state']='未阅'
        }
        return item
  })
>>>>>>> a581b80f0a250198a195e82c7a28b3d5d2e117d7
}
export default getters
