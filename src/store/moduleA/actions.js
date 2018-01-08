export const toggle = ({ commit }) => {
  return new Promise((resolve, reject) => {
    commit('SET_BOOL')
  })
}

export const increase = ({ commit }) => {
  return new Promise((resolve, reject) => {
    commit('ADDTO_NUMBER', 1)
  })
}
