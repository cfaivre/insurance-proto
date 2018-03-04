const LocalStorage = require('node-localstorage').LocalStorage
const User = require('./user.js')
const db = new LocalStorage('./local-database.json')

module.exports = class Users {

  get users() {
    return db.getItem('users', []).map((json) => {
      const data = JSON.stringify(json)
      return new User(data.name, data.surname, data.email, data.id, data.password)
    })
  }

  set users(users) {
    return db.setItem('users', users.map((user) => {
      return user.serialized
    }))
  }

  addUser(user) {
    this._validateUser(user)
    let mutable = Object.assign([], this.users)
    mutable.push(user)
    return this.users = mutable
  }

  addUserFromData(data) {
    this._validateUserData(data)
    const user = new User(data.name, data.surname, data.email, data.id, data.password)
    return this.addUser(user)
  }

  _validateUser(user) {
    if (!user instanceof User) throw new TypeError('Expected user to be a type of User.')
  }

  _validateUserData(data) {
    if (!'name' in data) throw new TypeError('Expected data.name to exist.')
    if (!'surname' in data) throw new TypeError('Expected data.surname to exist.')
    if (!'email' in data) throw new TypeError('Expected data.email to exist.')
    if (!'id' in data) throw new TypeError('Expected data.id to exist.')
    if (!'password' in data) throw new TypeError('Expected data.password to exist.')
  }

}