describe('Automation Test Store', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com')
  })

  it('should register a new user', () => {
    cy.get('[id="customer_menu_top"]').click()
    cy.get('button[title="Continue"]').click()
    cy.get('input[id="AccountFrm_firstname"]').type('User')
    cy.get('input[id="AccountFrm_lastname"]').type('Test')
    cy.get('input[id="AccountFrm_email"]').type('test.user@mail.com')
    cy.get('input[id="AccountFrm_address_1"]').type('1, Test st.')
    cy.get('input[id="AccountFrm_city"]').type('Test')
    cy.get('[id="AccountFrm_country_id"]').select('Ukraine').should('have.value', '220')
    cy.get('[id="AccountFrm_zone_id"]').select('Rivne').should('have.value', '3497')
    cy.get('input[id="AccountFrm_postcode"]').type('33000')
    cy.get('input[id="AccountFrm_loginname"]').type('Test_User')
    cy.get('input[id="AccountFrm_password"]').type('Test!12345')
    cy.get('input[id="AccountFrm_confirm"]').type('Test!12345')
    cy.get('input[id="AccountFrm_newsletter1"]').click()
    cy.get('input[id="AccountFrm_agree"]').click() 
    cy.get('button[title="Continue"]').click()
    cy.contains('My Account').should('be.visible');
  });

  it('should log in with a registered user', () => {
    cy.get('[id="customer_menu_top"]').click()
    cy.get('input[id="loginFrm_loginname"]').type('Test_User')
    cy.get('input[id="loginFrm_password"]').type('Test!12345')
    cy.get('button[title="Login"]').click()
    cy.contains('Welcome back User').should('be.visible');
  });
});
