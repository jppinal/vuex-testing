import auth from '@/api/auth'
import router from '@/router'

export const logIn = ({ commit }, { email, pwd }) => {
  return new Promise((resolve) => {
    /* TODO: define route in component */
    auth.login(email, pwd, (err, loggedIn) => {
      if (!loggedIn || err) this.error = true
      else this.$router.replace(this.$route.query.redirect || '/')
    })
  })
}

export const logOut = ({ commit }) => {
  return new Promise((resolve) => {
    commit('SET_TOKEN', undefined)
    resolve()
  })
}
