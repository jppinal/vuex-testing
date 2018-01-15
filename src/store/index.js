import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from './moduleA'
import moduleB from './moduleB'
import oauth from './oauth'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    moduleA,
    moduleB,
    oauth
  }
})

export default store
