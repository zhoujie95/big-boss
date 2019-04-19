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
  children:[{
    path: 'read',
    component: () => import('@/views/read/read.vue'),
    name: 'reads',
    meta: { title: 'readReady' }
  },
  {
    path: 'classmate',
    component: () => import('@/views/read/classmate.vue'),
    name: 'classmate',
  }]
}

 export default readRouter