import { expect } from 'chai'
import moduleA from '@/store/moduleA'

const { SET_BOOL, ADDTO_NUMBER, SET_NUMBER } = moduleA.mutations

describe('moduleA mutations', () => {
  it('SET_BOOL (true) returns true', () => {
    // mock state
    const _state = { bool: false }
    // apply mutation
    SET_BOOL(_state, true)
    // assert result
    expect(_state.bool).to.equal(true)
  })

  it('SET_BOOL (false) returns false', () => {
    // mock state
    const _state = { bool: true }
    // apply mutation
    SET_BOOL(_state, false)
    // assert result
    expect(_state.bool).to.equal(false)
  })

  it('SET_NUMBER (5) returns 5', () => {
    // mock state
    const _state = { number: 0 }
    // apply mutation
    SET_NUMBER(_state, 5)
    // assert result
    expect(_state.number).to.equal(5)
  })

  it('ADDTO_NUMBER (1+2) returns 3', () => {
    // mock state
    const _state = { number: 1 }
    // apply mutation
    ADDTO_NUMBER(_state, 2)
    // assert result
    expect(_state.number).to.equal(3)
  })
})
