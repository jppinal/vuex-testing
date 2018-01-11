import { getCelebsBornByDate } from '@/api/wikidata'

export const fetchCelebsBornToday = ({ commit }) => {
  return new Promise((resolve, reject) => {
    let today = new Date()
    getCelebsBornByDate(today.getDate(), today.getMonth() + 1)
      .then((response) => {
        console.log(response)
        commit('SET_CELEBS', response)
      })
  })
}
