import Layout from '@/layout'
const userRouter={
  path:'/user',
  component:Layout,
  redirect: 'noredirect',
  name:'user',
  meta: {
    title: 'userManage',
    icon: 'user'
  },
  children: [
    {
      path: 'adduser',
      component: () => import('@/views/userview/userone'),
      name: 'adduser',
      meta: { title: 'userAdd' ,view_id:'main-addUser'}
    },
    {
      path: 'userView',
      component: () => import('@/views/userview/usertwo'),
      name: 'userView',
      meta: { title: 'userView' }
    },
    {
      path: 'avatar',
      component: () => import('@/views/userview/avatar'),
      name: 'avatar',
      meta:{title:'avator'}
    }
  ]
}
 export default userRouter