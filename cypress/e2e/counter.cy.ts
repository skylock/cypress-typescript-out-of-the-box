describe('Counter', () => {
  it('should increment', () => {
    cy.visit('/dashboard');

    cy.findByText('Increment').click();


    cy.findByTestId('result').should('contain.text', '1')
  });
});
