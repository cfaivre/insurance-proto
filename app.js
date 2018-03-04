const express = require('express')
const bodyParser = require('body-parser')
const expressLogging = require('express-logging')
const logger = require('logops')
require('express-async-errors')
const Insurance = require('./models/insurance.js')
const Root = require('root-nodejs')
const config = require('./config.json')

const app = express()
app.use(bodyParser.json())
app.use(expressLogging(logger))

const PORT = process.env.PORT || 3000
const insuranceProvider = new Root.InsuranceAPI(config.root.app_id, config.root.app_token)

app.get('/ping', (req, res) => res.send('pong!'))

app.get('/gadgets', async (req, res) => {
  const insurance = new Insurance(insuranceProvider)
  const gadgets = await insurance.listGadgets()
  res.json(gadgets)
})

app.get('/quote', async (req, res) => {
  const insurance = new Insurance(insuranceProvider)
  const gadget = req.query.gadget
  const quote = await insurance.createQuote('root_gadgets', gadget)
  res.json(quote)
})

app.post('/policy-holder', async (req, res) => {
  const insurance = new Insurance(insuranceProvider)
  const details = req.body.details
  const holder = await insurance.createPolicyHolder(details)
  res.json(holder)
})

app.post('/application', async (req, res) => {
  const insurance = new Insurance(insuranceProvider)
  const details = req.body.details
  const application = await insurance.createApplication(details)
  res.json(application)
})

app.post('/issue-policy', async (req, res) => {
  const insurance = new Insurance(insuranceProvider)
  const policyId = req.body.details
  const policy = await insurance.issuePolicy(policyId)
  res.json(policy)
})

app.post('/register-user', (req, res) => {
  const data = req.body.user
  const users = new Users()
  users.addUserFromData(data)
  res.send(true)
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
