
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', redirect: '/login' },
      { path: '/index', component: () => import('pages/Index.vue') },
      { path: '/login', name: 'login', component: () => import('pages/auth/login.vue') },
      { path: '/signup', name: 'signup', component: () => import('pages/auth/signup.vue') },
      { path: '/dashboard', name: 'dashboard', component: () => import('pages/dashboard.vue') },
      { path: '/campaingEdit', name: 'campaingedit', component: () => import('pages/campaing/campaingEdit.vue') },
      { path: '/campaingList', name: 'campainglist', component: () => import('pages/campaing/campaingList.vue') }

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
