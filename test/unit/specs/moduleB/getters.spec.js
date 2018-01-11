import { expect } from 'chai'
import moduleB from '@/store/moduleB'

const { celebsList } = moduleB.getters

describe('moduleB getters', () => {
  it('celebsList', () => {
    // mock state
    const _state = {
      celebs: [
        { personLabel: { value: 'PersonA Name' }, person: { value: 'http://person.a' } },
        { personLabel: { value: 'PersonB Name' }, person: { value: 'http://person.b' } }
      ]
    }
    // get result
    const result = celebsList(_state)()
    // assert result
    expect(result).to.be.an('array')
      .and.to.have.lengthOf(2)
      /* TODO
      .and.to.have.deep.members([
        { name: 'PersonA Name', href: 'htpp://person.a' },
        { name: 'PersonB Name', href: 'htpp://person.b' }
      ])
      */
  })
})
