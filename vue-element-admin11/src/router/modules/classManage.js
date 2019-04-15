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
      path: 'classManage',
      component: () => import('@/views/class/classManage/index'),
      name: 'classManage',
      meta: { title: 'classManage' }
    },
    {
      path: 'classroomManage',
      component: () => import('@/views/class/classroomManage/index'),
      name: 'classroomManage',
      meta: { title: 'classroomManage' }
    },
    {
      path: 'studentManage',
      component: () => import('@/views/class/studentManage/index'),
      name: 'studentManage',
      meta: { title: 'studentManage' }
    }
  ]
}

 export default classRouter