import Layout from '@/layout'
const testRouter={
  path:'/upimg',
  component:Layout,
  name:'upimg',
  meta: {
    title: 'upimg',
    icon: 'list'
  },
  children: [
    {
      path: 'uploadimg',
      component: () => import('@/views/upimg/index'),
      name: 'uploadimg',
      meta: { title: 'uploadimg'}
    }
  ]
}

 export default testRouter