const Root = require('root-nodejs').InsuranceAPI

module.exports = class RootModel {

  constructor(config) {
    if (!config || !config.root) throw new Error('No root config supplied!')
    if (!config.root.app_id) throw new Error('No root app_id specified in config!')
    if (!config.root.app_token) throw new Error('No root app_token specified in config!')
    this.client = new Root(config.root.app_id, config.root.app_token)
  }

  async listGadgets() {
    const gadgetModels = await this.client.listGadgetModels()
    return gadgetModels
  }

  async createQuote(type, gadget) {
    const quote = await this.client.createQuote(type, gadget)
    return quote
  }

  async createPolicyHolder(details) {
    const policyHolder = await this.client.createPolicyHolder(details)
    return policyHolder
  }

  async createPolicyHolder(details) {
    const application = await this.client.createApplication(details)
    return application
  }

  async createPolicyHolder(policyId) {
    const policy = await this.client.issuePolicy(policyId)
    return policy
  }

}
