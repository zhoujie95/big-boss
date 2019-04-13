import Layout from '@/layout'
const testRouter={
  path:'/test',
  component:Layout,
  redirect: 'noredirect',
  name:'test',
  meta: {
    title: 'testManage',
    icon: 'list'
  },
  children: [
    {
      path: 'dynamic-table',
      component: () => import('@/views/table/dynamicTable/index'),
      name: 'DynamicTable',
      meta: { title: 'testAdd' }
    },
    {
      path: 'drag-table',
      component: () => import('@/views/table/dragTable'),
      name: 'DragTable',
      meta: { title: 'testList' }
    }
  ]
}

 export default testRouter