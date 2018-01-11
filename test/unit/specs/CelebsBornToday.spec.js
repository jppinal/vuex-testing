import Vue from 'vue'
import Vuex from 'vuex'
import CelebsBornToday from '@/components/CelebsBornToday'

Vue.use(Vuex)

// mock moduleB store
const moduleB = {
  namespaced: true,
  actions: {
    fetchCelebsBornToday ({ commit }) {
    }
  },
  getters: {
    celebsList: state => () => {
      return [{ name: 'fakePersonA', href: 'http://person.a' }]
    }
  }
}

describe('CelebsBornToday.vue', () => {
  const vm = new Vue({
    template: '<div><test></test></div>',
    components: {
      'test': CelebsBornToday
    },
    store: new Vuex.Store({
      modules: {
        moduleB
      }
    })
  }).$mount()

  it('should render correct h3 text', () => {
    expect(vm.$el.querySelector('.celebs h3').textContent)
    .to.equal('5 Spanish Celebs Born Today')
  })
})
