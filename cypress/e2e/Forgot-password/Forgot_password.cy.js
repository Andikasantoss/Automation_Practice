describe('Forgot Password', () => {

  beforeEach(() => {
    cy.visit('https://testerbud.com/forget-password');
    cy.scrollTo(0.1270)
    })
    it ('Verify user lupa kata sandi', () => {
        cy.get('.form-control').type('user@premiumbank.com')
        cy.get('.btn-primary').click()
        cy.get('.form-control').type('BANK1234')
        cy.get('.btn-primary').click()
        cy.get('.form-control').eq(0).type('Bank@123')
        cy.get('.form-control').eq(1).type('Bank@1234')
        cy.get('.form-control').eq(2).type('Bank@1234')
        cy.get('.btn-primary').click()
        cy.get('.btn-primary').click()
    })
    it ('Verify user input email yang tidak aktif', () => {
        cy.get('.form-control').type('user@premiumbank123.com')
        cy.get('.btn-primary').click()
    })
    it ('Verify user input email dengan format yang salah', () => {
        cy.get('.form-control').type('userpremiumbank123.com')
        cy.get('.btn-primary').click()
    })
    it ('Verify user mengkosongkan field email', () => {
        cy.get('.form-control').clear()
        cy.get('.btn-primary').click()
    })
    it ('Verify user input Secret kode yang salah', () => {
        cy.get('.form-control').type('user@premiumbank.com')
        cy.get('.btn-primary').click()
        cy.get('.form-control').type('BANK12345')
        cy.get('.btn-primary').click()
    })
    it ('Verify user mengkosongkan field secret kode', () => {
        cy.get('.form-control').type('user@premiumbank.com')
        cy.get('.btn-primary').click()
        cy.get('.form-control').clear()
        cy.get('.btn-primary').click()
    })
    it ('Verify user invalid input current password', () => {
        cy.get('.form-control').type('user@premiumbank.com')
        cy.get('.btn-primary').click()
        cy.get('.form-control').type('BANK1234')
        cy.get('.btn-primary').click()
        cy.get('.form-control').eq(0).type('Bank4321')
        cy.get('.form-control').eq(1).type('Bank@1234')
        cy.get('.form-control').eq(2).type('Bank@1234')
        cy.get('.btn-primary').click()
    })
    it ('Verify user tidak mengisi field password baru', () => {
        cy.get('.form-control').type('user@premiumbank.com')
        cy.get('.btn-primary').click()
        cy.get('.form-control').type('BANK1234')
        cy.get('.btn-primary').click()
        cy.get('.form-control').eq(0).type('Bank@123')
        cy.get('.form-control').eq(1).clear()
        cy.get('.form-control').eq(2).type('Bank@1234')
        cy.get('.btn-primary').click()
    })
    it ('Verify user tidak mengisi field repeat password', () => {
        cy.get('.form-control').type('user@premiumbank.com')
        cy.get('.btn-primary').click()
        cy.get('.form-control').type('BANK1234')
        cy.get('.btn-primary').click()
        cy.get('.form-control').eq(0).type('Bank@123')
        cy.get('.form-control').eq(1).type('Bank@1234')
        cy.get('.form-control').eq(2).clear()
        cy.get('.btn-primary').click()
    })
    it ('Verify user tidak mengisi form ganti password', () => {
        cy.get('.form-control').type('user@premiumbank.com')
        cy.get('.btn-primary').click()
        cy.get('.form-control').type('BANK1234')
        cy.get('.btn-primary').click()
        cy.get('.btn-primary').click()
    })
    it ('Verify user input password baru tidak sesuai dengan requirement', () => {
        cy.get('.form-control').type('user@premiumbank.com')
        cy.get('.btn-primary').click()
        cy.get('.form-control').type('BANK1234')
        cy.get('.btn-primary').click()
        cy.get('.form-control').eq(0).type('Bank4321')
        cy.get('.form-control').eq(1).type('Bank12')
        cy.get('.form-control').eq(2).type('Bank12')
        cy.get('.btn-primary').click()
    })
    it ('Verify user input password yang tidak sama dengan repeat password', () => {
        cy.get('.form-control').type('user@premiumbank.com')
        cy.get('.btn-primary').click()
        cy.get('.form-control').type('BANK1234')
        cy.get('.btn-primary').click()
        cy.get('.form-control').eq(0).type('Bank4321')
        cy.get('.form-control').eq(1).type('Bank@1234')
        cy.get('.form-control').eq(2).type('Bank@12345')
        cy.get('.btn-primary').click()
    })
})





