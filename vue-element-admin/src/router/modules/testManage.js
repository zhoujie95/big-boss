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
      component: () => import('@/views/testmanager/addtest'),//创建试卷
      name: 'addtest',
      meta: { title: 'testAdd',view_id:'main-examEdit'}
    },
    {
      path: 'testlist',
      component: () => import('@/views/testmanager/testlist'),
      name: 'testlist',
      meta: { title: 'testList',view_id:'main-examList'}//查看试卷列表
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
      meta:{view_id:'main-examDetail'} //试卷详情
    }
  ]
}

 export default testRouter