import Layout from '@/layout'
const readRouter={
  path:'/read',
  component:Layout,
  redirect: 'noredirect',
  name:'read',
  meta: {
    title:'readManage',
    icon: 'edit',
    view_id:'main-examinationPapers'
  },
  children:[{
    path: 'read',
    component: () => import('@/views/read/read.vue'),
    name: 'reads',
    meta: { title: 'readReady',view_id:'main-examinationPapers' }
  },
  {
    path: 'classmate',
    component: () => import('@/views/read/classmate.vue'),
    name: 'classmate',
    // meta:{view_id: "main-examPaperClassList"}
  },  {
    path: 'details',
    component: () => import('@/views/read/detail.vue'),
    name: 'details',
    // meta:{view_id: "main-examPaperClassmate"}
  }]
}

 export default readRouter