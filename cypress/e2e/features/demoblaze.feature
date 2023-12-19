Feature: Demoblaze website automation

  Scenario: User registration
    Given a user navigates to "https://www.demoblaze.com/index.html"
    When the user registers with a new account
    Then I should see a registration success message

  Scenario: User login
    Given a user navigates to "https://www.demoblaze.com/index.html"
    When the user logs in with a registered account
    Then I should see my username

  Scenario: Add a laptop to the shopping cart and verify
    Given a user is logged in on "https://www.demoblaze.com/index.html"
    When the user adds a laptop to the cart
    Then the laptop should be in the shopping cart
