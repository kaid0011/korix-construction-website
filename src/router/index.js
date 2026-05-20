import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/pages/HomePage.vue'), meta: { ctaBg: 'bg-dark' } },
  { path: '/about', component: () => import('@/pages/AboutPage.vue'), meta: { ctaBg: 'bg-grey-2' } },
  { path: '/services', component: () => import('@/pages/ServicesPage.vue'), meta: { ctaBg: 'bg-info' } },
  { path: '/contact', component: () => import('@/pages/ContactPage.vue'), meta: { ctaBg: '' } }
]

export default createRouter({
  history: createWebHistory(),
  routes,
  
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, left: 0 }
    }
  }
})