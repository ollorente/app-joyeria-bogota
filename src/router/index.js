import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName "home" */ '@/views/Home.vue')
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: () => import(/* webpackChunkName "contact" */ '@/views/Contact.vue')
  },
  {
    path: '/categorias',
    name: 'Categories',
    component: () => import(/* webpackChunkName "categories" */ '@/views/Categories.vue')
  },
  {
    path: '/Nosotros',
    name: 'About',
    component: () => import(/* webpackChunkName "about" */ '@/views/About.vue')
  },
  {
    path: '/:category',
    name: 'Category',
    component: () => import(/* webpackChunkName "category" */ '@/views/Category.vue')
  },
  {
    path: '/:category/:id',
    name: 'Gem',
    component: () => import(/* webpackChunkName "gem" */ '@/views/Gem.vue')
  },
  {
    path: '/:pathMacth(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName "not-found" */ '@/views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router