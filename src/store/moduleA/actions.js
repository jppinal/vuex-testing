export const toggle = ({ commit }) => {
  return new Promise((resolve) => {
    commit('SET_BOOL')
    resolve()
  })
}

export const increase = ({ commit }) => {
  return new Promise((resolve) => {
    commit('ADDTO_NUMBER', 1)
    resolve()
  })
}

export const setNumber = ({ commit }, number) => {
  return new Promise((resolve) => {
    commit('SET_NUMBER', number)
    resolve()
  })
}
