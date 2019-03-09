// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('signIn', ({ email, password }) => {
    cy.get('.login').click()
    cy.get('#email').type(email)
    cy.get('#passwd').type(password)
    cy.get('#SubmitLogin').click()
})

Cypress.Commands.add('register', () => {
    var strValues = "abcdefg12345";
    var strEmail=""
    var strTmp;
    for (var i = 0; i < 10; i++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }
    strTmp = "";
    strEmail = strEmail + "@";
    for (var j = 0; j < 8; j++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }
    strEmail = strEmail + ".com"
    cy.get('#email_create').type(strEmail)
    cy.get('#SubmitCreate > span').click({ delay: 100 })
    cy.get('#customer_firstname', {timeout: 7000}).should('be.visible').type('someName')
    cy.get('#customer_lastname').type('lName')
    cy.get('#passwd').type('password')
    cy.get('#company').type('kkpp')
    cy.get('#address1').type('Street 1 thammanam, 32934, KKPP, ')
    cy.get('#city').type('Dubai')
    cy.get('#id_state').select('Arizona')
    cy.get('#postcode').type('34343')
    cy.get('#phone_mobile').type('213434353')
    cy.get('#alias').type('SagarAliasJacky')
    cy.get('#submitAccount > span').click()
})

Cypress.Commands.add('clickProceedToCheckout', () => {
    cy.get('.cart_navigation > .button > span').click()
})

Cypress.Commands.add('acceptAgreement', () => {
    cy.get('#cgv').check()
})

Cypress.Commands.add('searchItem', ({ search_item }) => {
    cy.get('#search_query_top')
                .should('be.visible')
                .type(search_item).should('have.value', search_item)
            cy.get('div.ac_results li', {timeout: 7000}).should('be.visible')
            cy.get('#search_query_top').type('{downarrow}')
            cy.get('#search_query_top').type('{enter}')
})

Cypress.Commands.add('createRandomEmailID', (strEmail) => { 
    var strValues = "abcdefg12345";
    var strTmp;
    for (var i = 0; i < 10; i++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }
    strTmp = "";
    strEmail = strEmail + "@";
    for (var j = 0; j < 8; j++) {
        strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
        strEmail = strEmail + strTmp;
    }
    strEmail = strEmail + ".com"
    return strEmail;
 });



Cypress.Commands.add('clickAddToCart', () => {
    cy.get('.exclusive > span').click()
})

Cypress.Commands.add('clickproceedToCheckoutInsidePopup', () => {
    cy.get('a[title*=Proceed]').click()
})

Cypress.Commands.add('selectPaymentMode', (mode) => {
    cy.get(`.cheque`).click()
})

Cypress.Commands.add('confirmCheckout', () => {
    cy.get(`#cart_navigation > .button > span`).click()
})
