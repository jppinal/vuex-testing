export const celebsList = state => () => {
  return state.celebs.map((celeb) => {
    return {
      name: celeb.personLabel.value,
      href: celeb.person.value
    }
  })
}
