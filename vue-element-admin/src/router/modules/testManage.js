import Layout from '@/layout'
const testRouter={
  path:'/test',
  component:Layout,
  redirect: 'noredirect',
  name:'test',
  meta: {
    title: 'testManage',
    icon: 'list',
    view_id:'main-examEdit'
  },
  children: [
    {
      path: 'addtest',
      component: () => import('@/views/testmanager/addtest'),
      name: 'addtest',
      meta: { title: 'testAdd',view_id:'main-examEdit' ,noCache: true}
    },
    {
      path: 'testlist',
      component: () => import('@/views/testmanager/testlist'),
      name: 'testlist',
      meta: { title: 'testList',view_id:'main-examList' ,noCache: true}
    },
    {
      path:"edittest",
      component:()=>import("@/views/testmanager/edittest"),
      name:"edittest"
    },
    {
      path:"testdetail",
      component:()=>import("@/views/testmanager/testdetail"),
      name:"testdetail",
      hidden:true,
       meta:{view_id:'main-examDetail',noCache: true}
    }
  ]
}

 export default testRouter