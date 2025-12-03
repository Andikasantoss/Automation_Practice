describe('Upload file', () => { 
beforeEach(() => {
    cy.visit('https://practice.expandtesting.com/upload');
    cy.scrollTo(0.1270)
  });

  it ('Verify user upload file', () => {
    cy.get('#fileInput').attachFile('gambar.jpeg')
    cy.get('#fileSubmit').click()
    cy.scrollTo(1270.0)
  })
})
