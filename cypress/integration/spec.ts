describe('Test suite should', () => {
  it('pass', () => {
    cy.wrap('foo').should('equal', 'foo');
  });

  it('pass for custom command', () => {
    cy.getByTestId('foo').should('not.exist');
  });
});
