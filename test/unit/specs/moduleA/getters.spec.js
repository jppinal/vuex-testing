import { expect } from 'chai'
import moduleA from '@/store/moduleA'

const { moreThanTen } = moduleA.getters

describe('getters', () => {
  it('moreThanTen (5) returns false', () => {
    // mock state
    const _state = { number: 5 }
    // get result
    const result = moreThanTen(_state)()
    // assert result
    expect(result).to.equal(false)
  })

  it('moreThanTen (11) returns true', () => {
    // mock state
    const _state = { number: 11 }
    // get result
    const result = moreThanTen(_state)()
    // assert result
    expect(result).to.equal(true)
  })
})
