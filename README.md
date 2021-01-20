# Cypress with typescript working out of the box

In order to get typescript out of the box you will need to upgrade to cypress 4.4.0 or later

## Prerequisites

- Node v10+
- Restore packages by running `npm install` in repo root dir

---

## Steps from scratch

- create a new project

```
npm init
```

- add typescript to the project

```
npm i -D typescript
```

- add cypress to the project

```
npm i -D cypress
```

- run cypress for the first time

```
npx cypress open
```

- add typescript configuration file in cypress base dir e.g. cypress/tsconfig.json with config:

```
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": false,
    "baseUrl": "../node_modules/cypress",
    "target": "es6",
    "lib": ["es6", "dom"],
    "types": ["cypress", "node"]
  },
  "include": ["**/*.ts"],
  "files": ["support/index.d.ts"]
}
```

- rename files with extension js in ts
- add a custom command in cypress/support/commands.ts

```
Cypress.Commands.add('getByTestId', (value) => {
  return cy.get(`[data-cy=${value}]`);
});
```

- add in support dir index.d.ts file with typescript definitions for custom commands (IDE intelisense support)
  e.g.

```
// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.getByTestId('greeting')
    */
    getByTestId(value: string): Chainable<Element>
  }
}
```

- Include the TypeScript definition file, cypress/support/index.d.ts, with the rest of the source files, by adding following proprety into tsconfig.json

```
  "files": [
    "support/index.d.ts"
  ]
```

- add typescript spec file

```
describe('Test suite shloud', () => {

  it('pass', () => {
    cy.wrap('foo').should('equal', 'foo');
  });

  it('pass for custom command', () => {
    cy.getByTestId('foo').should('not.exist');
  });

});
```

## Voilà !

## You got cypress with typescript working out of the box !
