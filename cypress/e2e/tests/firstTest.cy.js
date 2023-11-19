/// <reference types="cypress" />
import user from "../../fixtures/userData.json"
// beforeEach(() => {  //sprawdzenie czegoś przed każdym testem
//     cy.visit('https://automationexercise.com')
//     cy.url().should('include' , 'https://automationexercise.com')
//   })


// it('First Test', () => {
//     cy.visit('https://automationexercise.com')
//     cy.url().should('include' , 'https://automationexercise.com')  //sprawdzenie czy weszliśmy na tą stronę przez weryfikację URL (asercja), pierwszy parametra to co sprawdza, a drugi to co
// });



xit('First Test', () => {

    let rand = randomInteger(1 , 1000)
    let email =  'testowy'+rand+'@email.com'
    cy.log(rand)
    cy.log('log testowy')
    // cy.pause() //pauza do testów
    cy.visit('')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

    // cy.get('.signup-form > h2').should('have.text' , 'New User Signup!')    //sprawdzenie czy jest tekst new user w tym elemencie
    cy.contains('New User Signup!').should('exist') //sprawdza czy istnieje element zawierający tekst
    // ręcznie napisany selektor
    cy.get('[data-qa="signup-name"]').type(user.user2.login)

    cy.get('[data-qa="signup-email"]').type(email)
    // cy.pause()
    cy.get('[data-qa="signup-button"]').click()
    cy.contains('Enter Account Information').should('exist') //ważne, że może nie wyszukiwać gdy w htmlu jest napisany np bez capslocka, należy wtedy sprawdzić inspectem
    cy.get('#id_gender1').click()
    cy.get('[data-qa="name"]').should('have.value' , user.user2.login) //sprawdzenie czy jest uzupełnione pole name, należy użyć value zamiast text bo w htmlu jest zapisany jako value (inspect)
    cy.get('[data-qa="email"]').should('have.value' , email)
    cy.get('[data-qa="password"]').type('tajnehaslo')
    cy.get('[data-qa="days"]').select('15')
    cy.get('[data-qa="months"]').select('May')
    cy.get('[data-qa="years"]').select('1910')
    cy.get('#newsletter').check()
    cy.get('#optin').check()
    cy.get('[data-qa="first_name"]').type('James')
    cy.get('[data-qa="last_name"]').type('Bond')
    cy.get('[data-qa="company"]').type('Universal Exports')
    cy.get('[data-qa="address"]').type('Mi6 headquarter')
    cy.get('[data-qa="country"]').select('United States')
    cy.get('[data-qa="state"]').type('Michigan')
    cy.get('[data-qa="city"]').type('London')
    cy.get('[data-qa="zipcode"]').type('45645')
    cy.get('[data-qa="mobile_number"]').type('987654-89')
    cy.get('[data-qa="create-account"]').click()
    cy.contains('Account Created!').should('exist')

    cy.get('[data-qa="continue-button"]').click()
    cy.contains('Logged in as '+user.user2.login).should('exist')

    // cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    // cy.contains('Account Deleted!').should('exist')
    // cy.get('[data-qa="continue-button"]').click()
    
});

xit('Second test', () => {
    let rand = randomInteger(1 , 1000)
    let email =  'testowy'+rand+'@email.com'
    cy.log(rand)
    cy.log('log testowy')
    // cy.pause() //pauza do testów
    cy.visit('')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

    // cy.get('.signup-form > h2').should('have.text' , 'New User Signup!')    //sprawdzenie czy jest tekst new user w tym elemencie
    cy.contains('New User Signup!').should('exist') //sprawdza czy istnieje element zawierający tekst
    // ręcznie napisany selektor
    cy.get('[data-qa="signup-name"]').type(user.user2.login)

    cy.get('[data-qa="signup-email"]').type(email)
    // cy.pause()
    cy.get('[data-qa="signup-button"]').click()
    cy.contains('Enter Account Information').should('exist') //ważne, że może nie wyszukiwać gdy w htmlu jest napisany np bez capslocka, należy wtedy sprawdzić inspectem
    cy.get('#id_gender1').click()
    cy.get('[data-qa="name"]').should('have.value' , user.user2.login) //sprawdzenie czy jest uzupełnione pole name, należy użyć value zamiast text bo w htmlu jest zapisany jako value (inspect)
    cy.get('[data-qa="email"]').should('have.value' , email)
    cy.get('[data-qa="password"]').type(user.user2.password)
    cy.get('[data-qa="days"]').select('15')
    cy.get('[data-qa="months"]').select('May')
    cy.get('[data-qa="years"]').select('1910')
    cy.get('#newsletter').check()
    cy.get('#optin').check()
    cy.get('[data-qa="first_name"]').type('James')
    cy.get('[data-qa="last_name"]').type('Bond')
    cy.get('[data-qa="company"]').type('Universal Exports')
    cy.get('[data-qa="address"]').type('Mi6 headquarter')
    cy.get('[data-qa="country"]').select('United States')
    cy.get('[data-qa="state"]').type('Michigan')
    cy.get('[data-qa="city"]').type('London')
    cy.get('[data-qa="zipcode"]').type('45645')
    cy.get('[data-qa="mobile_number"]').type('987654-89')
    cy.get('[data-qa="create-account"]').click()
    cy.contains('Account Created!').should('exist')

    cy.get('[data-qa="continue-button"]').click()
    cy.contains('Logged in as '+user.user2.login).should('exist')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.visit('')
    cy.url().should('include' , 'https://automationexercise.com')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.contains('Login to your account').should('exist')
    // cy.pause()
    cy.get('[data-qa="login-email"]').type(email)
    cy.get('[data-qa="login-password"]').type(user.user2.password)
    cy.get('[data-qa="login-button"]').click()

    cy.contains('Logged in as '+user.user2.login).should('exist')

    cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    cy.contains('Account Deleted!').should('exist')
    // cy.get('[data-qa="continue-button"]').click()

});

xit('Third test', () => {
    cy.visit('')
    cy.url().should('include' , 'https://automationexercise.com')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.contains('Login to your account').should('exist')
    cy.get('[data-qa="login-email"]').type('wronglyyy@emailoo.com')
    cy.get('[data-qa="login-password"]').type('badPasss')
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Your email or password is incorrect!').should('exist')

});

it('Fourth test', () => {

    let rand = randomInteger(1 , 1000)
    let email =  'testowy'+rand+'@email.com'
    cy.visit('')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

    // cy.get('.signup-form > h2').should('have.text' , 'New User Signup!')    //sprawdzenie czy jest tekst new user w tym elemencie
    cy.contains('New User Signup!').should('exist') //sprawdza czy istnieje element zawierający tekst
    // ręcznie napisany selektor
    cy.get('[data-qa="signup-name"]').type(user.user2.login)

    cy.get('[data-qa="signup-email"]').type(email)
    // cy.pause()
    cy.get('[data-qa="signup-button"]').click()
    cy.contains('Enter Account Information').should('exist') //ważne, że może nie wyszukiwać gdy w htmlu jest napisany np bez capslocka, należy wtedy sprawdzić inspectem
    cy.get('#id_gender1').click()
    cy.get('[data-qa="name"]').should('have.value' , user.user2.login) //sprawdzenie czy jest uzupełnione pole name, należy użyć value zamiast text bo w htmlu jest zapisany jako value (inspect)
    cy.get('[data-qa="email"]').should('have.value' , email)
    cy.get('[data-qa="password"]').type('tajnehaslo')
    cy.get('[data-qa="days"]').select('15')
    cy.get('[data-qa="months"]').select('May')
    cy.get('[data-qa="years"]').select('1910')
    cy.get('#newsletter').check()
    cy.get('#optin').check()
    cy.get('[data-qa="first_name"]').type('James')
    cy.get('[data-qa="last_name"]').type('Bond')
    cy.get('[data-qa="company"]').type('Universal Exports')
    cy.get('[data-qa="address"]').type('Mi6 headquarter')
    cy.get('[data-qa="country"]').select('United States')
    cy.get('[data-qa="state"]').type('Michigan')
    cy.get('[data-qa="city"]').type('London')
    cy.get('[data-qa="zipcode"]').type('45645')
    cy.get('[data-qa="mobile_number"]').type('987654-89')
    cy.get('[data-qa="create-account"]').click()
    cy.contains('Account Created!').should('exist')

    cy.get('[data-qa="continue-button"]').click()
    cy.contains('Logged in as '+user.user2.login).should('exist')

    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

    
});

xit('API', () => {
    cy.request("GET" , "api/productsList").then((response) => {
        expect(response.status).to.eq(200)
        cy.log(response.body)
    })
xit('Sunday', () => {
    
});
    
});



function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }