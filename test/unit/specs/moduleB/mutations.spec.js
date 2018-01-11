import { expect } from 'chai'
import moduleB from '@/store/moduleB'

const { SET_CELEBS } = moduleB.mutations

describe('moduleB mutations', () => {
  it('SET_CELEBS', () => {
    // mock state
    const _state = { celebs: [] }
    // apply mutation
    SET_CELEBS(_state, [ 1, 2, 3, 4, 5 ])
    // assert result
    expect(_state.celebs).to.be.an('array')
      .and.to.have.lengthOf(5)
      .and.to.have.ordered.members([ 1, 2, 3, 4, 5 ])
  })
})
