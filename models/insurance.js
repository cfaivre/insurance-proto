module.exports = class Insurance {

  constructor(provider) {
    this.provider = provider
  }

  async listGadgets() {
    const gadgetModels = await this.provider.listGadgetModels()
    return gadgetModels
  }

  async createQuote(type, gadget) {
    const quote = await this.provider.createQuote(type, gadget)
    return quote
  }

  async createPolicyHolder(details) {
    const policyHolder = await this.provider.createPolicyHolder(details)
    return policyHolder
  }

  async createApplication(details) {
    const application = await this.provider.createApplication(details)
    return application
  }

  async issuePolicy(policyId) {
    const policy = await this.provider.issuePolicy(policyId)
    return policy
  }

}
