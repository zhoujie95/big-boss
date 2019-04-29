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
      meta: { title: 'classManage',view_id:'main-grade'}//班级管理
    },
    {
      path: 'classroomManage',
      component: () => import('@/views/class/classroomManage/index'),
      name: 'classroomManage',
      meta: { title: 'classroomManage',view_id:'main-room'}//教室管理
    },
    {
      path: 'studentManage',
      component: () => import('@/views/class/studentManage/index'),
      name: 'studentManage',
      meta: { title: 'studentManage',view_id:'main-student'}//学生管理
    }
  ]
}

 export default classRouter