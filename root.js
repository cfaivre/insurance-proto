const Root = require('root-nodejs')
const config = require('./config.json')

const client = new Root.InsuranceAPI(config.root.app_id, config.root.app_token)

//const gadgetModels = await client.listGadgetModels()
client.listGadgetModels().then((gadgets) => {
  console.log(gadgets)
}).catch((err) => {
  console.error(err)
})
