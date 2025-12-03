describe('login test',() =>{
    beforeEach('', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    });
    it ('berhasil login dengan username dan email valid', () =>{
        

        cy.get('#username').type('student')

        cy.get('#password').type('Password123')

        cy.get('#submit').click()
    })

    it ('gagal login dengan password tidak valid', () =>{

        cy.get('#username').type('student')

        cy.get('#password').type('Password12345')

        cy.get('#submit').click()
        cy.contains('Your username is invalid!').should('be.visible');

    })
     it ('gagal login dengan username tidak valid ', () =>{

        cy.get('#username').type('studeasnt')

        cy.get('#password').type('Password1234')

        cy.get('#submit').click()
          cy.contains('Your username is invalid!').should('be.visible');

    })
});