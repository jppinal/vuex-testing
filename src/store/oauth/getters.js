export const isAuthenticated = state => () => {
  if (!state.expires_at) return false
  else return new Date().getTime() < JSON.parse(state.expires_at)
}

export const getToken = state => () => {
  return state.access_token
}
