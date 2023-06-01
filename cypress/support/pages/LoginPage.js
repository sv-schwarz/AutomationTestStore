class LoginPage {
    visit(){
        cy.log('Open website login page');
        cy.visit('https://automationteststore.com/index.php?rt=account/login');
    }

    getLoginField(){
        return cy.contains('#loginFrm_loginname');
    }

    getPasswordField(){
        return cy.contains('#loginFrm_password');
    }

    getSubmitButton(){
        return cy.contains('button[title="Login"]');
    }

    submitLoginForm(username, password){
        cy.log(`Auth user with username: ${username}, and pass: ${password}`);

        this.getLoginField().type(username)
        this.getPasswordField().type(password)
        this.getSubmitButton().click
    }
}
export default new LoginPage();