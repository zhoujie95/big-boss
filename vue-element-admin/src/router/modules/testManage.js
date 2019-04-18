import Layout from '@/layout'
const testRouter={
  path:'/test',
  component:Layout,
  redirect: 'noredirect',
  name:'test',
  meta: {
    title: 'testManage',
    icon: 'list'
  },
  children: [
    {
      path: 'addtest',
      component: () => import('@/views/testmanager/addtest'),
      name: 'addtest',
      meta: { title: 'testAdd' }
    },
    {
      path: 'testlist',
      component: () => import('@/views/testmanager/testlist'),
      name: 'testlist',
      meta: { title: 'testList' }
    },
    {
      path:"edittest",
      component:()=>import("@/views/testmanager/edittest"),
      name:"edittest"   
    }
  ]
}

 export default testRouter