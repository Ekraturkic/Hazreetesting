
describe('My first cypress test', () => {
    before( () => { 
        
      })

    
    it ('Navigate to ea site', () => {  
      
    })
   it('Should return error if email already exsist', ()=> {
        cy.visit('https://dev.d2313v7uzw83of.amplifyapp.com/signup',{failOnStatusCode:false})
        cy.get('#basic_fullName').type("Ekra Turkic")
        cy.get('#basic_email').type("ekra@gmail.com")
        cy.get('#basic_password').type("Abc123456")
        cy.get('.ant-btn > span').click() 
        cy.get('.error-msg', {timeout: 2000}).should('be.visible')
        //An account with the given email already exists.
        cy.get('.error-msg', {timeout: 2000}).contains('An account with the given email already exists.')
    })
    it('Email code verfication screen', ()=> {
        cy.visit('https://dev.d2313v7uzw83of.amplifyapp.com/signup',{failOnStatusCode:false})
        cy.get('#basic_fullName').type("Ekra")
        cy.get('#basic_email').type("ekra001@gmail.com")
        cy.get('#basic_password').type("Abc123456")
        cy.get('.ant-btn > span').click() })
    


})
it('Login Successfully', ()=> {
    cy.visit('https://dev.d2313v7uzw83of.amplifyapp.com/login',{failOnStatusCode: false })
    cy.get('#basic_loginEmail').type("ekra@gmail.com")
    cy.get('#basic_loginPassword').type("Abc123456")
    cy.get('.ant-btn > span').click() 
    //An account with the given email already exists.
    
})
