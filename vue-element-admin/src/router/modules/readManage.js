import Layout from '@/layout'
const readRouter={
  path:'/read',
  component:Layout,
  redirect: 'noredirect',
  name:'read',
  meta: {
    title:'readManage',
    icon: 'edit'
  },
  children:[   {
    path: 'dynamic-table',
    component: () => import('@/views/read/read.vue'),
    name: 'DynamicTable',
    meta: { title: 'readReady' }
  },
  {
    path: 'drag-table',
    component: () => import('@/views/table/dragTable'),
    name: 'DragTable',
    meta: { title: 'readReady' }
  }]
}

 export default readRouter