import { login, searchProduct } from '../support/helper.js'

describe('Automation Test Store', () => {
  beforeEach(() => {
    const user = {
      username: 'Test_User',
      password: 'Test!12345',
    };
    login(user);
    cy.contains('Welcome back User').should('be.visible');
  });

  it('should create an order', () => {
    searchProduct('Body Cream by Bulgari');
    cy.get('.productinfo').should('contain.text', 'In Stock');
    cy.get('.cart').click();
    cy.get('.checkout-cart').should('be.visible');
    cy.get('#cart_checkout1').click();
    cy.get('.checkout-confirm').should('be.visible');
    cy.get('#checkout_btn').click();
    cy.get('#maincontainer').should('contain.text', 'Your Order Has Been Processed!');
  });
});
