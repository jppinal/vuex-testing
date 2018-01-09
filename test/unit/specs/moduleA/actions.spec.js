import moduleA from '@/store/moduleA'
import { testAction } from './../helpers'

const { toggle, increase } = moduleA.actions

describe('actions', () => {
  it('toggle', (done) => {
    // test action (action, payload, state, expectedMutations, done)
    testAction(toggle, null, {}, [
      { type: 'SET_BOOL' }
    ], done)
  })

  it('increase', (done) => {
    // test action (action, payload, state, expectedMutations, done)
    testAction(increase, null, {}, [
      { type: 'ADDTO_NUMBER', payload: 1 }
    ], done)
  })
})
