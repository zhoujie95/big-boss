import Layout from '@/layout'
const classRouter={
  path:'/class',
  component:Layout,
  redirect: 'noredirect',
  name:'class',
  meta: {
    title: 'classManage',
    icon: 'nested'
  },
  children: [
    {
      path: 'dynamic-table',
      component: () => import('@/views/table/dynamicTable/index'),
      name: 'DynamicTable',
      meta: { title: 'classManage' }
    },
    {
      path: 'drag-table',
      component: () => import('@/views/table/dragTable'),
      name: 'DragTable',
      meta: { title: 'classroomManage' }
    },
    {
      path: 'inline-edit-table',
      component: () => import('@/views/table/inlineEditTable'),
      name: 'InlineEditTable',
      meta: { title: 'studentManage' }
    }
  ]
}

 export default classRouter