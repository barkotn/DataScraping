describe('tests to do app', () => {

 beforeEach( () => {
   cy.visit('https://todomvc.com/examples/react/#/active')
 })

 it('adds and complete a task', () => {
  cy.get('.new-todo')
    .type('learn HTML')
    .type('{enter}')
    .type('Cypress')
    .type('{enter}')
    .type('learn JS')
    .type('{enter}')

  cy.contains('learn HTML').prev().check()
  cy.contains('learn HTML').should('not.exist')

  cy.contains('Completed').click()
  cy.contains('learn HTML').should('exist')

  })
})






