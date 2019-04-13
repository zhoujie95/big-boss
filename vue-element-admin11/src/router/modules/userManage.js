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
      path: 'dynamic-table',
      component: () => import('@/views/table/dynamicTable/index'),
      name: 'DynamicTable',
      meta: { title: 'userAdd' }
    },
    {
      path: 'drag-table',
      component: () => import('@/views/table/dragTable'),
      name: 'DragTable',
      meta: { title: 'userView' }
    }
  ]
}

 export default userRouter