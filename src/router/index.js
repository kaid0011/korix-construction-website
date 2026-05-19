import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/pages/HomePage.vue') },
  { path: '/about', component: () => import('@/pages/AboutPage.vue') },
  { path: '/services', component: () => import('@/pages/ServicesPage.vue') },
  { path: '/contact', component: () => import('@/pages/ContactPage.vue') }
]

export default createRouter({
  history: createWebHistory(),
  routes
})