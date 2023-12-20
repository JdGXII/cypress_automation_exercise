const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');
let alertMessage = null;
//Generate new user name every time:
const randomNum = Math.floor(Math.random() * 10000);
let username = `joseraul_${randomNum}`;
let password = 'password123'

// Custom function to log in
const login = () =>{
  cy.get('#login2').click();
  cy.get('#loginusername').focus().clear().type(username, { delay: 100 });
  cy.get('#loginpassword').focus().clear().type(password, { delay: 100 });
  cy.get('button[onclick="logIn()"]').click();
}

Given('a user navigates to {string}', (url) => {
  cy.visit(url);
});

When('the user registers with a new account', () => {
  cy.get('#signin2').click();
  cy.get('#sign-username').focus().clear().type(username, { delay: 100 });
  cy.get('#sign-password').focus().clear().type(password, { delay: 100 });
  cy.on('window:alert', (msg) => {
    alertMessage = msg;
  });

  cy.get('button[onclick="register()"]').click();
});

Then('I should see a registration success message', () => {
  // Check that the alert message has the expected text
  cy.wrap(null).should(() => {
    expect(alertMessage).to.eq('Sign up successful.');
  });
});

When('the user logs in with a registered account', () => {
  login();
});

Then('I should see my username', () => {
  cy.get('#nameofuser').should('have.text', `Welcome ${username}`);
});

Then('the user logs out', () => {
  cy.get('#logout2').click();
});

Given('a user is logged in on {string}', (url) => {
  cy.visit(url);
  login();
});

When('the user adds a laptop to the cart', () => {
  cy.get('a[onclick="byCat(\'notebook\')"]').click();
  clickOnProductRandomLink();
  addProductToCart();
});

// Custom function to click on a random link inside the specified container
const clickOnProductRandomLink = () => {
  // Get all the links inside the container with the "href" attribute
  cy.get('#tbodyid a[href]').then((links) => {
    // Convert the links into an array
    const linkArray = links.toArray();

    // Get a random index between 0 and the number of links - 1
    const randomIndex = Math.floor(Math.random() * linkArray.length);

    // Click on the random link from the array
    cy.wrap(linkArray[randomIndex]).click();
  });
}

const addProductToCart = () => {
  cy.get('a.btn.btn-success.btn-lg').click();
  cy.get('#cartur').click();
}

Then('the laptop should be in the shopping cart', () => {
  cy.get('.table.table-bordered.table-hover.table-striped tbody#tbodyid')
    .find('tr')
    .should('have.length', 1);
});

