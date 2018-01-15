import { getCelebsBornByDate } from '@/api/wikidata'

export const fetchCelebsBornToday = ({ commit }) => {
  return new Promise((resolve) => {
    let today = new Date()
    getCelebsBornByDate(today.getDate(), today.getMonth() + 1)
      .then((response) => {
        commit('SET_CELEBS', response)
        resolve()
      })
  })
}
