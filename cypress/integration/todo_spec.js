describe('tests to do app', () => {

 beforeEach( () => {
   cy.visit('https://todomvc.com/examples/react/#/active')
   cy.get('.new-todo')
    .type('learn HTML')
    .type('{enter}')
    .type('Cypress')
    .type('{enter}')
    .type('learn JS')
    .type('{enter}')
 })

 it('adds and complete a task', () => {

  cy.contains('learn HTML').prev().check()
  cy.contains('learn HTML').should('not.exist')

  cy.contains('Completed').click()
  cy.contains('learn HTML').should('exist')

 })
 it('removes completed tasks', () => {
  cy.contains('learn HTML').prev().check()
  cy.contains('Clear completed').click()
  cy.contains('Completed').click()
  cy.contains('learn HTML').should('not.exist')
 })
 it('checks all active tasks', () => {
    cy.contains('3 items left').should('exist')
    cy.get('label[for="toggle-all"]').click()
    cy.contains('0 items left').should('exist')
  })
})






