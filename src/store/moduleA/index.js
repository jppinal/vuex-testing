import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

export default {
  namespaced: true,
  state () {
    return {
      bool: false,
      number: 0,
      str: '',
      list: []
    }
  },
  getters,
  mutations,
  actions
}
