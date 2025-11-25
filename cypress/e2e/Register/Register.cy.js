describe('Register Account', () => {

  beforeEach(() => {
    cy.visit('https://testerbud.com/register');
    cy.scrollTo(0.1270)
    })
    it ('Register account', () => {
        cy.get('#email').type('enzofernandez@gmail.com')
        cy.get('#password').type('Enzocfernandez123123!')
        cy.get('#confirmPassword').type('Enzofernandez123!')
        cy.get('form > .mt-3').click()
    })
    it ('Resgieter dengan format email yang salah', () => {
        cy.get('#email').type('enzofernandezgmail.com')
        cy.get('#password').type('Enzofernandez123!')
        cy.get('#confirmPassword').type('Enzofernandez123!')
        cy.get('form > .mt-3').click()
    })
    it ('Register dengan email yang sudah terpakai', () => {
        cy.get('#email').type('enzofernandez@gmail.com')
        cy.get('#password').type('Enzofernandez123!')
        cy.get('#confirmPassword').type('Enzofernandez123!')
        cy.get('form > .mt-3').click() 
    })
    it ('Register dengan password kurang dari 8 karakter', () => {
        cy.get('#email').type('enzofernandez@gmail.com')
        cy.get('#password').type('Enzo')
        cy.get('#confirmPassword').type('Enzo')
        cy.get('form > .mt-3').click() 
    })
    it ('Register konfirmasi password tidak sama', () => {
        cy.get('#email').type('enzofernandez@gmail.com')
        cy.get('#password').type('Enzofernandez')
        cy.get('#confirmPassword').type('Enzoenzooo')
        cy.get('form > .mt-3').click() 
    })
    it ('Register tiadk mengisi field password confirmasi', () => {
        cy.get('#email').type('enzofernandez@gmail.com')
        cy.get('#password').type('Enzofernandez')
        cy.get('form > .mt-3').click() 
    })
    it ('Register tidak mengisi field password', () => {
        cy.get('#email').type('enzofernandez@gmail.com')
        cy.get('#confirmPassword').type('Enzoenzooo')
        cy.get('form > .mt-3').click() 
    })
    it ('Register tidak mengisi field email', () => {
        cy.get('#password').type('Enzofernandez')
        cy.get('#confirmPassword').type('Enzoenzooo')
        cy.get('form > .mt-3').click() 
    })
    it ('Register tidak mengisi form register', () => {
        cy.get('form > .mt-3').click()
    })
  });