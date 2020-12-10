Cypress.Commands.add('loginToApplication', () => {
    cy.visit('http://localhost:4200/login')
    cy.get('[placeholder="Email"]').type('neroxg@gmail.com')
    cy.get('[placeholder="Password"]').type('test12345')
    cy.get('form').submit()
})