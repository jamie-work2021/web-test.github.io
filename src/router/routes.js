import banner from 'pages/banner'




const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/home.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  },


  {
    path: '/pages/home.vue',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/home', component: () => import('pages/home.vue') },
      { path: '/about', component: () => import('pages/about.vue') },
      { path: '/service', component: () => import('pages/service.vue') },
      { path: '/case', component: () => import('pages/case.vue') },
      { path: '/contact', component: () => import('pages/contact.vue') },
      { path: '/urgent', component: () => import('pages/urgent.vue') },
      { path: '/commerce', component: () => import('pages/commerce.vue') },
      { path: '/test', component: () => import('pages/test.vue') },
      
    ]
  },
  {
    path: '/pages/case.vue',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/case', component: () => import('src/pages/case.vue') },
      { path: '/case-1', component: () => import('src/pages/case-1.vue') },
    ]
  },
  
]

export default routes
