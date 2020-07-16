import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router ({
  mode: 'history',
  base: process.env.NODE_ENV === 'production'
    ? '/vue-gallery/'
    : '/',
  routes: [
    {
      path: '/',
      meta: {layout: 'main'},
      component: Home
    },
    {
      path: '/login',
      meta: {layout: 'auth'},
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/register',
      meta: {layout: 'auth'},
      component: () => import('@/views/Register.vue')
    },
    {
      path: '/gallery',
      meta: {layout: 'main'},
      component: () => import('@/views/Gallery.vue')
    },
    {
      path: '/about',
      meta: {layout: 'main'},
      component: () => import('@/views/About.vue'),
      children: [
        {
          path: '/about/contacts',
          meta: {layout: 'main'},
          component: () => import('@/views/Contacts.vue')
        }
      ]
    },
    {
      path: '*',
      component: () => import('@/views/Error.vue')
    }
  ]
})
