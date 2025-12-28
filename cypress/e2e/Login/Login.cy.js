describe('Login', () => { 
  beforeEach('should visit page', () => { 
    cy.visit('https://testerbud.com/practice-login-form'); 
    cy.scrollTo(0, 1270)

  });
  it('Login with valid data',() => { 

    cy.get('#formBasicEmail').type('user@premiumbank.com') 
    cy.get('#formBasicPassword').type('Bank@123')
    cy.get('form > .btn-lg').click()
    cy.scrollTo(0, 1270) 

  })
  //it('Login with invalid username', () => {
    
  //  cy.get('#formBasicEmail').type('user123@premiumbank.com')
  //  cy.get('#formBasicPassword').type('Bank@123')
  //  cy.get('form > .btn-lg').click()
  //  cy.scrollTo(0, 1270)
  // cy.contains('Invalid username or password').should('be.visible')
  //})
  it('Login with invalid password', () => {

    cy.get('#formBasicEmail').type('user123@premiumbank.com')
    cy.get('#formBasicPassword').type('Bank@1234')
    cy.get('form > .btn-lg').click()
    cy.scrollTo(0, 1270)
  })
  it('Login without fill in the form', () => {
    cy.get('form > .btn-lg').click()
    cy.scrollTo(0, 1270)
  })
  it('Login with account not registered', () => {

    cy.get('#formBasicEmail').type('user1234@premiumbank.com') 
    cy.get('#formBasicPassword').type('Bank@12345678')
    cy.get('form > .btn-lg').click()
    cy.scrollTo(0, 1270)
  })
});