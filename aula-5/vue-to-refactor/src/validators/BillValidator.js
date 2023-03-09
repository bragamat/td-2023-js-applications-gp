export class BillValidator {
  constructor() {
    this.hasError = false
    this.lastErrorMessage = null
  }
  validate(amount, billType) {
    this.amount = amount
    this.billType = billType

    this.validateAmount()
    this.validateBillType()

    return this.lastErrorMessage
  }
  validateAmount() {

    if(this.amount == 0.0) {
      this.hasError = true
      this.lastErrorMessage = 'invalid field: amount. Minimun R$ 0,1'
    }
  }
  validateBillType() {
    if(this.billType === 'extra' && this.amount > 5.0) {
      this.hasError = true
      this.lastErrorMessage = 'invalid field: amount for extra. Maximum R$ 5,0'
    }
  }
}
