// ***********************************************
// This example commands.ts shows you how to
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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/**
 * Get one or more DOM elements by [data-cy] attribute.
 * The querying behavior of this command matches exactly how cy.get('[data-cy="${id}"]' works.
 * where "${id}" is the attribute value
 *
 * @see https://on.cypress.io/get
 * @example
 *    cy.getByTestId('saveButton')    // Yield the element
 *    cy.getByTestId('saveButton').should('have.class', 'active')
 *    cy.getByTestId('saveButton').click()
 */
Cypress.Commands.add('getByTestId', (value) => {
  return cy.get(`[data-cy=${value}]`);
});
