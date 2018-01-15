import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Private from '@/views/Private'
import LogIn from '@/components/LogIn'
import EventBrite from '@/components/EventBrite'

import auth from '@/auth'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  if (!auth.loggedIn()) {
    next({
      path: '/private/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

const logOut = (to, from, next) => {
  auth.logout()
  next('/')
}

export default new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/private',
      component: Private,
      children: [
        { path: '/', name: 'Private', component: EventBrite, beforeEnter: requireAuth },
        { path: 'login', name: 'LogIn', component: LogIn },
        { path: 'logout', beforeEnter: logOut }
      ]
    }
  ]
})
