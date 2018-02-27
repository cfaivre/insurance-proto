const mocha = require('mocha')
const assert = require('assert')
const Root = require('../models/root.js')

describe('RootModel', () => {

  before(() => {
    config = { 
      "root": {
        "app_id": "xxxxxx",
        "app_token": "xxxx"
      }
    }
  })

  it('can initialize', () => {
    const model = new Root(config)
    assert.ok(model)
  })

  it('can validate the provided config on initialization', () => {
    assert.throws(() => {
      new Root({ foo: 'bar' })
    }, Error)
  })

})