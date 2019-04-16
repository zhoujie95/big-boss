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
      path: 'examAdd',
      component: () => import('@/views/exam/examAdd/index'),
      name: 'examAdd',
      meta: { title: 'examAdd' }
    },
    {
      path: 'examType',
      component: () => import('@/views/exam/examType/index'),
      name: 'examType',
      meta: { title: 'examType' }
    },
    {
      path: 'examView',
      component: () => import('@/views/exam/examView/index'),
      name: 'examView',
      meta: { title: 'examView' }
    }
  ]
}

 export default examRouter