import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";

it('Authorization', () => {
  homePage.visit();
  homePage.getLoginOrRegisterButton().click();
  loginPage.submitLoginForm('Reid_Jacobi48', 'TestPassword');
})

it('Authorization', () => {
  'given... home page opened'
  'when... getLoginOrRegisterButton clicked'
  'then... loginPage opened'
  'then... loginPage opened'
  'then... loginPage opened'
  'then... loginPage opened'
})
