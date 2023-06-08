export function login(user){
    cy.log('Open website login page');
    cy.visit('/index.php?rt=account/login');
  
    cy.log('Check user is unauthorized');
    cy.getCookie('customer').should('be.null');
  
    cy.log('Authorize user');
    cy.get('#loginFrm_loginname').type(user.username);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('button[type="submit"]').contains('Login').click();
}

export function searchProduct(productName) {
  let pageNumber = 1;
  let foundProduct = false;

  cy.log('Open the website');
  cy.visit('https://automationteststore.com');

  cy.log('Perform search');
  cy.get('#filter_keyword').type('E');
  cy.get('.button-in-search').click();

  cy.log('Find product on page or navigate to next page');
  const searchProductOnPage = () => {
    cy.get('.fixed_wrapper').find('.prdocutname').each(($product) => {
      const productText = $product.text();
      if (productText.includes(productName)) {
        cy.wrap($product).click();
        foundProduct = true;
      }
    }).then(() => {
      if (!foundProduct) {
        pageNumber++;
        const nextPageUrl = `https://automationteststore.com/index.php?rt=product/search&keyword=e&category_id=0&sort=date_modified-ASC&limit=20&page=${pageNumber}`;
        cy.visit(nextPageUrl);
        searchProductOnPage();
      }
    });
  };

  searchProductOnPage();
}
