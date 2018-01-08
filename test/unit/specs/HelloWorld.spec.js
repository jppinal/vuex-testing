import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {

  const Constructor = Vue.extend(HelloWorld)
  const vm = new Constructor().$mount()

  it('should render correct h1 message', () => {
    expect(vm.$el.querySelector('.hello h1').textContent)
    .to.equal('Vuex testing App')
  })

  it('should render correct h2 texts', () => {
    expect(vm.$el.querySelectorAll('.hello h2').map((el) =>{
        return el.textContent
    }))
    .to.have.ordered.members([
        'Essential Links',
        'Ecosystem'
    ])
  })

})
