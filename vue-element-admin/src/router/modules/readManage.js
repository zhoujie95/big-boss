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
    meta: { title: 'readReady',view_id:'main-examPaperClassList'}//待批班级
  },
  {
    path: 'classmate',
    component: () => import('@/views/read/classmate.vue'),
    name: 'classmate',
    hidden:true,
    meta:{view_id:"main-examPaperClassmate"}//待批试卷
  },  {
    path: 'details',
    component: () => import('@/views/read/detail.vue'),
    name: 'details',
    hidden:true,
    meta:{view_id: "main-examinationPapers"} //阅卷
  }]
}

 export default readRouter