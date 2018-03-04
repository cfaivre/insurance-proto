const LocalStorage = require('node-localstorage').LocalStorage
const User = require('./user.js')
const db = new LocalStorage('./local-database.json')

module.exports = class Users {

  get users() {
    const users = !!db.getItem('users') ? JSON.parse(db.getItem('users')).data : []
    return users.map((data) => {
      return new User(data.name, data.surname, data.email, data.id, data.password, data.uuid)
    })
  }

  set users(users) {
    return db.setItem('users', JSON.stringify({'data': users}, null, 2))
  }

  addUser(user) {
    this._validateUser(user)
    let mutable = Object.assign([], this.users)
    mutable.push(user)
    this.users = mutable
    return user
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
    if (!data) throw new TypeError('Expected data to exist.')
    if (!data.name) throw new TypeError('Expected data.name to exist.')
    if (!data.name) throw new TypeError('Expected data.surname to exist.')
    if (!data.email) throw new TypeError('Expected data.email to exist.')
    if (!data.id) throw new TypeError('Expected data.id to exist.')
    if (!data.password) throw new TypeError('Expected data.password to exist.')
  }

}