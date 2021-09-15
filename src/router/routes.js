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
  },
  {
    path: '/test-vuex',
    name: 'test-vuex',
    meta: {
      layout: 'nav-layout'
    },
    component: () => import('@/components/Counter.vue')
  },
  {
    path: '/test-ga',
    name: 'test-ga',
    meta: {
      layout: 'nav-layout'
    },
    component: () => import('@/views/GA/Index.vue')
  },
  {
    path: '/create-product',
    name: 'test-vuex',
    meta: {
      layout: 'nav-layout'
    },
    component: () => import('@/views/Product/Create.vue')
  }
]
export default routes
