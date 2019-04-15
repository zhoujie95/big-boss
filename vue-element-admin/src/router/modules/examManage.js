import Layout from '@/layout'
const examRouter={
  path:'/exam',
  component:Layout,
  redirect: 'noredirect',
  name:'exam',
  meta: {
    title: 'examMange',
    icon: 'documentation'
  },
  children: [
    {
      path: 'dynamic-table',
      component: () => import('@/views/table/dynamicTable/index'),
      name: 'DynamicTable',
      meta: { title: 'examAdd' }
    },
    {
      path: 'drag-table',
      component: () => import('@/views/table/dragTable'),
      name: 'DragTable',
      meta: { title: 'examType' }
    },
    {
      path: '/examMange/examView',
      component: () => import('@/views/examMange/examView'),
      name: 'InlineEditTable',
      meta: { title: 'examView' }
    }
  ]
}

 export default examRouter