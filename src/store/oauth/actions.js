import auth0 from '@/api/auth0'

export const logIn = ({ commit }) => {
  return new Promise((resolve) => {
    auth0.authorize()
    resolve()
  })
}

export const callback = ({ commit }) => {
  return new Promise((resolve) => {
    auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        commit('SET_SESSION', authResult)
        resolve()
      } else if (err) {
        console.log(err)
        resolve()
      }
    })
  })
}

export const logOut = ({ commit }) => {
  return new Promise((resolve) => {
    commit('REMOVE_SESSION')
    resolve()
  })
}
