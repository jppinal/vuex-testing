import Vue from 'vue'
import Vuex from 'vuex'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Vuex)

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
      'test': HelloWorld
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
