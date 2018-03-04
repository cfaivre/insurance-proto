const uuidv4 = require('uuid/v4')

module.exports = class User {

  constructor(name, surname, email, id, password, uuid) {
    this.uuid = uuid || uuidv4()
    this.name = name
    this.surname = surname
    this.email = email
    this.id = id
    this.password = password
  }

  get details() {
    return {
      id: this.id,
      name: this.name,
      surname: this.surname,
      email: this.email,
      id: this.id,
      password: this.password,
    }
  }

}