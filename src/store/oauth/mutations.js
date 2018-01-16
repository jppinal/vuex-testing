export const SET_SESSION = (state, session) => {
  state.access_token = session.accessToken
  state.id_token = session.idToken
  state.expires_at = JSON.stringify(
    session.expiresIn * 1000 + new Date().getTime()
  )
}

export const REMOVE_SESSION = (state, session) => {
  state.access_token = undefined
  state.id_token = undefined
  state.expires_at = undefined
}
