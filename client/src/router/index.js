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
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/projects',
      component: Projects,
      meta: {
        title: 'Projects'
      }
    },
    {
      path: '/skills',
      component: Skills,
      meta: {
        title: 'Skills'
      }
    },
    {
      path: '/about',
      component: About,
      meta: {
      component: About,
        title: 'About'
      }
    },
    {
      path: '/contact',
      component: Contact,
      meta: {
        title: 'Contact'
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
