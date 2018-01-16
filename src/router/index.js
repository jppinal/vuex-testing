import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Private from '@/views/Private'
import PrivateLogIn from '@/components/PrivateLogIn'
import PrivateLoggedIn from '@/components/PrivateLoggedIn'
import OAuth from '@/views/OAuth'
import OauthCallback from '@/components/OauthCallback'
import OauthAuthenticate from '@/components/OauthAuthenticate'
import OauthExample from '@/components/OauthExample'

import auth from '@/api/auth'

import store from '@/store'

const isAuthenticated = store.getters['oauth/isAuthenticated']

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

const requireOAuth = (to, from, next) => {
  if (!isAuthenticated()) {
    next({
      path: '/oauth/authenticate'
    })
  } else {
    next()
  }
}

const logOut = (to, from, next) => {
  // auth.logout()
  next('/')
}

export default new Router({
  mode: 'history', /* to parse Callback data returned as /callback#data */
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/private',
      component: Private,
      children: [
        { path: '/', name: 'Private', component: PrivateLoggedIn, beforeEnter: requireAuth },
        { path: 'login', name: 'LogIn', component: PrivateLogIn },
        { path: 'logout', beforeEnter: logOut }
      ]
    },
    { path: '/oauth',
      component: OAuth,
      children: [
        { path: '/', name: 'OAuth', component: OauthExample, beforeEnter: requireOAuth },
        { path: 'authenticate', name: 'Authenticate', component: OauthAuthenticate },
        { path: 'callback', name: 'Callback', component: OauthCallback },
        { path: 'logout', beforeEnter: logOut }
      ]
    }
  ]
})
