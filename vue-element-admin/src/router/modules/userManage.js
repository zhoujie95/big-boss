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
      meta: { title: 'userAdd' }
    },
    {
      path: 'userView',
      component: () => import('@/views/userview/usertwo'),
      name: 'userView',
      meta: { title: 'userView' }
    },
    {
      path: 'userPicture',
      component: () => import('@/views/userview/userthree'),
      name: 'userView',
      meta: { title: 'userPicture' }
    }
  ]
}
 export default userRouter