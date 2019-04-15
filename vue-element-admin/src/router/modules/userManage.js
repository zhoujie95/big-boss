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
      component: () => import('@/views/userManage/adduser'),
      name: 'adduser',
      meta: { title: 'userAdd' }
    },
    {
      path: 'userView',
      component: () => import('@/views/userManage/userView'),
      name: 'userView',
      meta: { title: 'userView' }
    }
  ]
}

 export default userRouter