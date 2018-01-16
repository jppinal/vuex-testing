/* TODO: vuex integration */
/* globals localStorage */
function pretendRequest (email, pass, cb) {
  setTimeout(() => {
    if (email === process.env.PRIVATE_USER && pass === process.env.PRIVATE_PWD) {
      cb(null, {
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      })
    } else {
      cb(null, { authenticated: false })
    }
  }, 0)
}

export default {
  login (email, pass, cb) {
    cb = arguments[arguments.length - 1]
    if (localStorage.token) {
      if (cb) cb(null, true)
      return
    }

    pretendRequest(email, pass, (err, res) => {
      if (err) return
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(null, true)
        this.onChange(true)
      } else {
        if (cb) cb(null, false)
        this.onChange(false)
      }
    })
  },

  getToken () {
    return localStorage.token
  },

  logout (cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
  }
}
