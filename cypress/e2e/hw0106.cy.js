describe('Automation Test Store', () => {
    beforeEach(() => {
      cy.visit('https://automationteststore.com');
      cy.get('[id="customer_menu_top"]').click();
      cy.get('input[id="loginFrm_loginname"]').type('Test_User');
      cy.get('input[id="loginFrm_password"]').type('Test!12345');
      cy.get('button[title="Login"]').click();
      cy.contains('Welcome back User').should('be.visible');
    })

    it('should create an order', () => {
        cy.get('input[id="filter_keyword"]').type('shirt');
        cy.get('[class="button-in-search"]').click();
        cy.get('.heading1').should('contain.text', ' Search');
        cy.contains('.fixed_wrapper', 'Designer Men Casual Formal Double Cuffs Grandad Band Collar Shirt Elegant Tie').click();
        cy.get('.productinfo').should('contain.text', 'In Stock');  
        cy.get('.cart').click();
        cy.get('.checkout-cart').should('be.visible');
        cy.get('#cart_checkout1').click();
        cy.get('.checkout-confirm').should('be.visible');
        cy.get('#checkout_btn').click();
        cy.get('#maincontainer').should('contain.text', 'Your Order Has Been Processed!');
    });
})