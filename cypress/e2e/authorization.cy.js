import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";
import user from '../fixtures/user.json';

it('Authorization', {retries: 2}, () => {
  homePage.visit();
  homePage.getLoginOrRegisterButton().click();
  loginPage.submitLoginForm(user.username, user.password);
})

// it('Authorization', () => {
//   'given... home page opened'
//   'when... getLoginOrRegisterButton clicked'
//   'then... loginPage opened'
//   'then... loginPage opened'
//   'then... loginPage opened'
//   'then... loginPage opened'
// })
