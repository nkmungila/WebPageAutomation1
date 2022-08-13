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

import { entriesIn } from "cypress/types/lodash"

// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('productAdd',(product) => {
    cy.get('.card-title').each((e1,index,list) =>{
        if(e1.text().includes(product)){
            cy.get('.btn.btn-info').eq(index).click()
        }
    })
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