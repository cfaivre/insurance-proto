
module.exports = class User {

  constructor(name, surname, email, id, password) {
    this.name = name
    this.surname = surname
    this.email = email
    this.id = id
    this.password = password
  }

  get details() {
    return {
      name: this.name,
      surname: this.surname,
      email: this.email,
      id: this.id,
      password: this.password,
    }
  }

  get serialized() {
    return JSON.stringify(this.details)
  }

}