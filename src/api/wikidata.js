import axios from 'axios'

export const wikidata = axios.create({
  baseURL: 'https://query.wikidata.org/',
  headers: {
    Accept: 'application/sparql-results+json'
  }
})

export const getCelebsBornByDate = (day, month) => {
  return new Promise((resolve) => {
    let query = `PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
    SELECT ?person ?personLabel ?personDescription ?birth ?death ?age WHERE {
     ?person wdt:P31 wd:Q5.
     ?person wdt:P569 ?birth.
     ?person wdt:P570 ?death.
     BIND((YEAR(?death)) - (YEAR(?birth)) AS ?age)
     SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
     FILTER((?age > 10) && (?age < 100))
     FILTER((month(?birth) = ${month}) && (day(?birth) = ${day}))
     ?person wdt:P27 wd:Q29.
    }
    LIMIT 5`
    wikidata.get('sparql', { params: { query } })
      .then((res) => {
        if (res.status < 300 && res.data) {
          var response = []
          if (res.data.results && res.data.results.bindings) response = res.data.results.bindings
          resolve(response)
        } else {
          resolve(undefined)
        }
      })
  })
}
