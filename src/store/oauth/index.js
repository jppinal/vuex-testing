import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

export default {
  namespaced: true,
  state () {
    return {
      access_token: undefined,
      id_token: undefined,
      expires_at: undefined,
      authenticated: false
    }
  },
  getters,
  mutations,
  actions
}
