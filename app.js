const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config.json')
const MyModel = require('./my_model.js')
const RootModel = require('./root_model.js')

const app = express()
  app.use(bodyParser.json())

  app.get('/', (req, res) => res.send('Hello World!'))
/*
  app.get('/:name', (req, res) => {
    const model = new MyModel(req.params.name)
    res.send(model.greet())
    //res.send(`hello ${req.params.name}`)
  })*/

  app.get('/gadgets', async (req, res) => {
    const model = new RootModel(config)
    const gadgets = await model.listGadgets()
    res.json(gadgets)
  })

  app.post('/bla', (req, res) => {
    res.send(`hello ${req.body.name}`)
  })

  app.listen(3000, () => console.log('Example app listening on port 3000!'))
