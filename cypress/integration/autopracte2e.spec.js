describe('Automation Practice Test', function () {

    let searchItemtext = Cypress.env('searchText')
    let emailID = Cypress.env('email')
    let password = Cypress.env('password')
    

    context('Checkout', () => {
        beforeEach(() => {
            cy.visit('/')
        })

        it('Checkout and register to complete the order', () => {
            let email_Id = cy.createRandomEmailID('emailid')
            cy.searchItem({search_item: searchItemtext})
            cy.clickAddToCart()
            cy.clickproceedToCheckoutInsidePopup()
            cy.clickProceedToCheckout()
            cy.register({email:email_Id})
            cy.clickProceedToCheckout()
            cy.acceptAgreement()
            cy.clickProceedToCheckout()
            cy.selectPaymentMode({mode:'cheque'})
            cy.confirmCheckout()
            cy.contains('Your order on My Store is complete').should('be.visible')

           
        })  

        it('SignIn search and Checkout the order', () => {
            cy.signIn({ email: emailID, password: password });
            cy.searchItem({search_item: searchItemtext})
            cy.clickAddToCart()
            cy.clickproceedToCheckoutInsidePopup()
            cy.clickProceedToCheckout()
            cy.clickProceedToCheckout()
            cy.acceptAgreement()
            cy.clickProceedToCheckout()
            cy.selectPaymentMode({mode:'cheque'})
            cy.confirmCheckout()
            cy.contains('Your order on My Store is complete').should('be.visible')
        })

    })
})