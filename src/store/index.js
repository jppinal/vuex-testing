import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from './moduleA'
import moduleB from './moduleB'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    moduleA,
    moduleB
  }
})

export default store
