import { wikidata, getCelebsBornByDate } from '@/api/wikidata'
import sinon from 'sinon'

describe('wikidata', () => {
  let sandbox

  before(() => {
    sandbox = sinon.sandbox.create()
  })

  after(() => {
    // restore original functions
    sandbox.restore()
  })

  it('getCelebsBornByDate', (done) => {
    // fake response
    let _axiosGET = new Promise((resolve) => {
      resolve({
        status: 200,
        data: {
          results: {
            bindings: [ 'fakeA', 'fakeB' ]
          }
        }
      })
    })
    // stub wikidata.get
    sandbox.stub(wikidata, 'get').returns(_axiosGET)
    // test values of promise
    getCelebsBornByDate(1, 1).then((response) => {
      expect(response).to.be.an('array')
        .and.to.have.lengthOf(2)
        .and.to.have.members(['fakeA', 'fakeB'])
      done()
    })
  })
})
