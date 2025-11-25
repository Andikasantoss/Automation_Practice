describe('Checkout', () => {

  beforeEach(() => {
    cy.visit('https://testerbud.com/practice-ecommerece-website');
    cy.scrollTo(0.1270)
  });

  it('Checkout item', () => {
   cy.get(':nth-child(1) > .h-100 > .flex-column > .mt-auto > .btn').click()
   cy.get(':nth-child(2) > .h-100 > .flex-column > .mt-auto > .btn').click()
   cy.get(':nth-child(2) > .h-100 > .flex-column > .mt-auto > .btn').click()  
   cy.scrollTo(0.1270)

  });

  it('Remove item', () => {
    cy.get(':nth-child(1) > .h-100 > .flex-column > .mt-auto > .btn').click()
    cy.get(':nth-child(2) > .h-100 > .flex-column > .mt-auto > .btn').click()
    cy.get('.position-relative').click()
    cy.get(':nth-child(1) > .btn').click()
  })

  it('Checkout item more then 1 item', () => {
    cy.get('#quantity-1').type('0')
    cy.get(':nth-child(1) > .h-100 > .flex-column > .mt-auto > .btn').click()
    cy.get('.position-relative').click()
  })

  it ('Buy items', () => {
    cy.get(':nth-child(1) > .h-100 > .flex-column > .mt-auto > .btn').click()
    cy.get(':nth-child(2) > .h-100 > .flex-column > .mt-auto > .btn').click()
    cy.get('.position-relative').click()
    cy.get('.mt-3 > .btn').click()
    cy.get('[name="name"]').type('andika')
    cy.get('[name="street"]').type('jakarta benhil')
    cy.get('[name="city"]').type('Jakarta Pusat')
    cy.get('[name="state"]').type('Indonesia')
    cy.get('[name="zip"]').type('123456')
    cy.get('form > .btn').click()
    cy.get('[name="cardNumber"]').type('19581298112412')
    cy.get('[name="expiryDate"]').type('01')
    cy.get('[name="cvv"]').type('1412512421')
    cy.get('form > .btn').click()
    cy.get('a > .mt-3').click()
  })

  it ('Didnt input form adress', ()=> {
    cy.get(':nth-child(1) > .h-100 > .flex-column > .mt-auto > .btn').click()
    cy.get(':nth-child(2) > .h-100 > .flex-column > .mt-auto > .btn').click()
    cy.get('.position-relative').click()
    cy.get('.mt-3 > .btn').click()
    cy.get('form > .btn').click()
  })

  it ('Didnt input form payment', () => {
    cy.get(':nth-child(1) > .h-100 > .flex-column > .mt-auto > .btn').click()
    cy.get(':nth-child(2) > .h-100 > .flex-column > .mt-auto > .btn').click()
    cy.get('.position-relative').click()
    cy.get('.mt-3 > .btn').click()
    cy.get('[name="name"]').type('andika')
    cy.get('[name="street"]').type('jakarta benhil')
    cy.get('[name="city"]').type('Jakarta Pusat')
    cy.get('[name="state"]').type('Indonesia')
    cy.get('[name="zip"]').type('123456')
    cy.get('form > .btn').click()
    cy.get('[name="cardNumber"]').type('19581298112412')
    cy.get('form > .btn').click()
  })
  it ('Search item', () => {
    cy.get('.input-group > .form-control').type('keyboard')
    cy.get('.input-group > .form-control').clear()
  })
  it ('Deleted search', () => {
    cy.get('.input-group > .form-control').type('wireless')
    cy.get('.input-group > .form-control').clear()
  })
  it ('Search item doesnt exist', () => {
    cy.get('.input-group > .form-control').type('car')
  })
  it ('Input manualy quantity item', () => {
    cy.get('#quantity-1').clear()
    cy.get('#quantity-1').type('5')
    cy.get(':nth-child(1) > .h-100 > .flex-column > .mt-auto > .btn').click()
    cy.scrollTo(0.10)
  })
});
