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
      component: Home
    },
    {
      path: '/gallery',
      component: () => import('@/views/Gallery.vue')
    },
    {
      path: '/about',
      component: () => import('@/views/About.vue'),
      children: [
        {
          path: '/about/contacts',
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
