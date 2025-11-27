describe('assert input value', () => {
    
  beforeEach(() => {
    cy.visit('https://practice.expandtesting.com/inputs');
  });

  it('test assert input value', () => {
    cy.get('#input-number')
      .type('12345')
      .should('have.value', '12345');
  });
});
