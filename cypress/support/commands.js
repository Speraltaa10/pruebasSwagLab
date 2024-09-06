// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('clearAllBeforeVisit', () => { 
    cy.clearLocalStorage()
    cy.clearAllCookies()
    cy.visit('https://www.saucedemo.com')
})

Cypress.Commands.add('login', (userName, password) =>{
    cy.get('#user-name').type(userName)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')
    cy.log('Login Success')
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })