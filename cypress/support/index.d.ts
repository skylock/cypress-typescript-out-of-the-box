// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Cypress {
    /**
     * Including a datetime formatter in your tests.
     *
     * @see https://date-fns.org/
     * @example
     *    const todaysDate = Cypress.dateFns().format(new Date(), "MMM dd, yyyy")
     */
    dateFns: () => dateFns;
  }
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.getByTestId('greeting')
     */
    getByTestId(value: string): Chainable<Element>;
  }
}
