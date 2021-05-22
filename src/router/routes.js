const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'nav-layout'
    },
    component: () => import('@/components/HelloWorld.vue')
  },
  {
    path: '/product-list',
    name: 'product-list',
    meta: {
      layout: 'nav-layout'
    },
    component: () => import('@/views/Product/List.vue')
  }
]
export default routes
