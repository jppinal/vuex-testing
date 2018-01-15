import Vue from 'vue'
import focus from './focus'

// register v-focus directive
Vue.directive('focus', {
  inserted: (el) => focus(el)
})
