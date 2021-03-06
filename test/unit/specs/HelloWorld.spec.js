import Vue from 'vue'
import Vuex from 'vuex'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Vuex)

// create mocked component
const HelloWorldInjector = require('!!vue-loader?inject!@/components/HelloWorld.vue')
const HelloWorldWithMocks = HelloWorldInjector({
  './CelebsBornToday': Vue.extend({ template: '<div id="CelebsBornToday"></div>' })
})

// mock moduleA store
const moduleA = {
  namespaced: true,
  actions: {
    setNumber ({ commit }, number) {
    }
  },
  getters: {
    moreThanTen: state => () => {
      return true
    }
  }
}

describe('HelloWorld.vue', () => {
  const vm = new Vue({
    template: '<div><test></test></div>',
    components: {
      'test': HelloWorldWithMocks
    },
    store: new Vuex.Store({
      modules: {
        moduleA
      }
    })
  }).$mount()

  it('should render correct h1 message', () => {
    expect(vm.$el.querySelector('.hello h1').textContent)
    .to.equal('Vuex testing App')
  })

  it('should render correct h2 texts', () => {
    let list = [].slice.call(vm.$el.querySelectorAll('.hello h2'))
    .map((el) => {
      return el.textContent
    })
    expect(list)
    .to.have.ordered.members([
      'Essential Links',
      'Ecosystem'
    ])
  })
})
