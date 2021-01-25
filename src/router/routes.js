
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', redirect: '/login' },
      { path: '/index', component: () => import('pages/Index.vue') },
      { path: '/login', name: 'login', component: () => import('pages/auth/login.vue') },
      { path: '/signup', name: 'signup', component: () => import('pages/auth/signup.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
