import Layout from '@/layout'
const userRouter={
  path:'/user',
  component:Layout,
  redirect: 'noredirect',
  name:'user',
  meta: {
    title: 'userManage',
    icon: 'user',
    view_id:'main-addUser'
  },
  children: [
    {
      path: 'adduser',
      component: () => import('@/views/userview/userone'),
      name: 'adduser',
      meta: { title: 'userAdd' ,view_id:'main-addUser',noCache: true}
    },
    {
      path: 'userView',
      component: () => import('@/views/userview/usertwo'),
      name: 'userView',
      meta: { title: 'userView',view_id:'main-showUser',noCache: true }
    }
  ]
}
 export default userRouter