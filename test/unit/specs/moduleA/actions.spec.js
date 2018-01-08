import { expect } from 'chai'
import moduleA from '@/store/moduleA'

const { toggle, increase } = moduleA.actions

describe('actions', () => {
  it('toggle (false -> true)', () => {
    // mock state
    const _state = { number: 5 }
    // get result
    const result = moreThanTen(_state)()
    // assert result
    expect(result).to.equal(false)
  })

  it('toggle (false -> true -> false)', () => {
    // mock state
    const _state = { number: 11 }
    // get result
    const result = moreThanTen(_state)()
    // assert result
    expect(result).to.equal(true)
  })

})
