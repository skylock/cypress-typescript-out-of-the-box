# Cypress with typescript working out of the box

In order to get typescript out of the box you will need to upgrade to cypress 4.4.0 or later

## Steps from scratch
- add typescript to the project
- add cypress to the project
- add typescript configuration file in cypress base dir e.g. cypress/tsconfig.json with config:
```
{
  "compilerOptions": {
    "strict": true,
    "baseUrl": "../node_modules/cypress",
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress"]
  },
  "include": [
    "**/*.ts"
  ]
}
```
- rename files with extension js in ts
- add in support dir index.d.ts file with typescript definitions for custom commands
- point to appropriate plugin and support ts files in cypress configuration (cypress.json)

##  Voilà !
##  You got cypress with typescript working out of the box !

