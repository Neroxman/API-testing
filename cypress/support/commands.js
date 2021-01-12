Cypress.Commands.add('loginToApplication', () => {
    cy.visit('http://localhost:4200/login')
    cy.get('[placeholder="Email"]').type('brzezickim05@gmail.com')
    cy.get('[placeholder="Password"]').type('cypresstest')
    cy.get('form').submit()
})