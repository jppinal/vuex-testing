import moduleB from '@/store/moduleB'
import { testAction } from './../helpers'
import sinon from 'sinon'
import * as Wikidata from '@/api/wikidata'

const { fetchCelebsBornToday } = moduleB.actions

describe('moduleB actions', () => {
  let sandbox

  before(() => {
    sandbox = sinon.sandbox.create()
  })

  after(() => {
    // restore original functions
    sandbox.restore()
  })

  it('fetchCelebsBornToday', (done) => {
    // Stub getCelebsBornByDate used by action fetchCelebsBornToday
    sandbox.stub(Wikidata, 'getCelebsBornByDate')
      .resolves([ 'fakePersonA', 'fakePersonB' ])
    // test action (action, payload, state, expectedMutations, done)
    testAction(fetchCelebsBornToday, null, {}, [
      { type: 'SET_CELEBS', payload: [ 'fakePersonA', 'fakePersonB' ] }
    ], done)
  })
})
