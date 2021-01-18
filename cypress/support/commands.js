Cypress.Commands.add('loginToApplication', () => {
    const userCondetials = {
        "user": {
            "email": "brzezickim05@gmail.com",
            "password": "cypresstest"
        }
    }

    cy.request('POST', 'https://conduit.productionready.io/api/users/login', userCondetials)
        .its('body').then(body => {
            const token = body.user.token
            cy.wrap(token).as('token')
            cy.visit('http://localhost:4200/', {
                onBeforeLoad(win) {
                    win.localStorage.setItem('jwtToken', token)
                }
            })
        })
})