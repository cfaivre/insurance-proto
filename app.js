const express = require('express')
const bodyParser = require('body-parser')
const expressLogging = require('express-logging')
const logger = require('logops')
require('express-async-errors')

const Root = require('./models/root.js')
const config = require('./config.json')

const PORT = process.env.PORT || 3000

const app = express()
app.use(bodyParser.json())
app.use(expressLogging(logger))

app.get('/ping', (req, res) => res.send('pong!'))

app.get('/gadgets', async (req, res) => {
  const model = new Root(config)
  const gadgets = await model.listGadgets()
  res.json(gadgets)
})

app.get('/quote', async (req, res) => {
  const model = new Root(config)
  const gadget = req.query.gadget
  const quote = await model.createQuote('root_gadgets', gadget)
  res.json(quote)
})

app.post('/policy-holder', async (req, res) => {
  const model = new Root(config)
  const details = req.body.details
  const holder = await model.createPolicyHolder(details)
  res.json(holder)
})

app.post('/application', async (req, res) => {
  const model = new Root(config)
  const details = req.body.details
  const application = await model.createApplication(details)
  res.json(application)
})

app.post('/issue-policy', async (req, res) => {
  const model = new Root(config)
  const policyId = req.body.details
  const policy = await model.issuePolicy(policyId)
  res.json(policy)
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
