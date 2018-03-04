const mocha = require('mocha')
const assert = require('assert')
const User = require('../../models/user.js')

const name = 'Alex'
const surname = 'Cho'
const email = 'alex.cho@foo.bar'
const id = {
  'type': 'id',
  'number': '6801015800084',
  'country': 'ZA'
}
const password = 'hunter2'

describe('User', () => {

  it('can create a new user', () => {
    const user = new User(name, surname, email, id, password)
    assert.ok(user)
  })

  it('can return the user details', () => {
    const user = new User(name, surname, email, id, password)
    assert.equal(user.details.name, name)
    assert.equal(user.details.surname, surname)
    assert.equal(user.details.email, email)
    assert.deepEqual(user.details.id, id)
    assert.equal(user.details.password, password)
  })

  it('can return the user serialized', () => {
    const user = new User(name, surname, email, id, password)
    const json = JSON.stringify({name, surname, email, id, password})
    assert.equal(user.serialized, json)
  })

})
