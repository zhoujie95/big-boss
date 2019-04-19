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
    },
    //编辑试题的路由
    {
      path: '/edit/Questions',
      component: () => import('@/views/exam/examAdd/index'),
      name: 'editquestion'
    },
    //查看试题详情的路由
    {
      path: '/detail/Questions',
      component: () => import('@/views/exam/examView/detail'),
      name: 'detail'
    },
  ]
}

 export default examRouter