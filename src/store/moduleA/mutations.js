export const SET_BOOL = (state, value) => {
  if (!value) state.bool = !state.bool
  else state.bool = value
}

export const ADDTO_NUMBER = (state, value) => {
  state.number = state.number + value
}

export const SET_NUMBER = (state, value) => {
  state.number = value
}
