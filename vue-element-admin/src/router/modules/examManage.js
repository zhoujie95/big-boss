import Layout from '@/layout'
const examRouter={
  path:'/exam',
  component:Layout,
  redirect: 'noredirect',
  name:'exam',
  meta: {
    title: 'examMange',
    icon: 'documentation',
    view_id:'main-watchQuestions'
  },
  children: [
    {
      path: 'examAdd',
      component: () => import('@/views/exam/examAdd/index'),
      name: 'examAdd',
      meta: { title: 'examAdd', noCache: true,view_id: 'main-addQuestions'}
    },
    {
      path: 'examType',
      component: () => import('@/views/exam/examType/index'),
      name: 'examType',
      meta: { title: 'examType' , noCache: true,view_id: 'main-questionsType'}
    },
    {
      path: 'examView',
      component: () => import('@/views/exam/examView/index'),
      name: 'examView',
      meta: { title: 'examView',view_id:'main-watchQuestions' }
    },
    //编辑试题的路由
    {
      path: '/edit/Questions',
      component: () => import('@/views/exam/examAdd/index'),
      name: 'editquestion',
       //meta:{view_id: "main-editQuestions", noCache: true}
    },
    //查看试题详情的路由
    {
      path: '/detail/Questions',
      component: () => import('@/views/exam/examView/detail'),
      name: 'detail',
      // meta:{view_id: "main-questionsDetail", noCache: true}
    },
  ]
}

 export default examRouter