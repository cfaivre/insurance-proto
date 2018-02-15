const Root = require('root-nodejs')

class RootModel {
  constructor(config) { // call new to call this method
    this.client = new Root.InsuranceAPI(config.root.app_id, config.root.app_token)
  }

  async listGadgets() {
    const gadgetModels = await this.client.listGadgetModels()
    return gadgetModels
  }
}

module.exports = RootModel
