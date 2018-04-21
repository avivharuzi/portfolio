import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Projects from '@/pages/Projects'
import Skills from '@/pages/Skills'
import About from '@/pages/About'
import Contact from '@/pages/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/projects',
      component: Projects
    },
    {
      path: '/skills',
      component: Skills
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})
