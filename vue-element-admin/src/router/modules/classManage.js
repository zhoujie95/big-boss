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
      meta: { title: 'classManage',view_id:'main-grade',noCache: true }
    },
    {
      path: 'classroomManage',
      component: () => import('@/views/class/classroomManage/index'),
      name: 'classroomManage',
      meta: { title: 'classroomManage',view_id:'main-room',noCache: true }
    },
    {
      path: 'studentManage',
      component: () => import('@/views/class/studentManage/index'),
      name: 'studentManage',
      meta: { title: 'studentManage',view_id:'main-student',noCache: true }
    }
  ]
}

 export default classRouter