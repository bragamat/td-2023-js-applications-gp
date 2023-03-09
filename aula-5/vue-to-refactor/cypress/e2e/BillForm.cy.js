// https://docs.cypress.io/api/introduction/api.html

describe('Visualize 4 input fileds at /newBill route', () => {
  it('submits form', () => {
    cy.visit('/')
    cy.contains('add bill').click()
    cy.location('pathname').should('eq', '/newBill')

    cy.contains('Add new Bill')

    cy.contains('Title').type('Almoco')
    cy.contains('Amount').type('25')
    cy.get('#bill-select-type').select('Regular')

    cy.contains('salvar').click()

    cy.location('pathname').should('eq', '/')
  })

  describe('validations', () => {
    it('must be > R$ 0.0', () => {
      cy.visit('/')
      cy.contains('add bill').click()
      cy.location('pathname').should('eq', '/newBill')

      cy.contains('Add new Bill')

      cy.contains('Title').type('Almoco')
      cy.contains('Amount').type(0.0)
      cy.get('#bill-select-type').select('Extra')
      cy.contains('salvar').click()

      cy.location('pathname').should('eq', '/newBill')
      cy.contains('invalid field: amount. Minimun R$ 0,1')
    })

    it('type extra must be less than R$ 5.0', () => {
      cy.visit('/')
      cy.contains('add bill').click()
      cy.location('pathname').should('eq', '/newBill')

      cy.contains('Add new Bill')

      cy.contains('Title').type('Almoco')
      cy.get('#bill-select-type').select('Extra')
      cy.contains('Amount').type(5.1)
      cy.contains('salvar').click()

      cy.location('pathname').should('eq', '/newBill')
      cy.contains('invalid field: amount for extra. Maximum R$ 5,0')
    })
  })
})
