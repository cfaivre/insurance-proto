const path = require('path')

class MyModel {
  constructor(name) { // call new to call this method
    this.name = name // @name = name
  }

  greet() {
    return `hello ${this.name}`
  }
}

module.exports = MyModel
