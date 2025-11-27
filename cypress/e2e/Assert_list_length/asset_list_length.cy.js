describe('asset list length', () => {

  beforeEach(() => {
    cy.visit('https://practice.expandtesting.com/add-remove-elements');
  });

  it('asset list length', () => {
    cy.get('.btn.btn-primary.mt-3').click().click().click();
  });
});
