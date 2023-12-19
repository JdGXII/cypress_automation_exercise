Feature: Demoblaze website automation

  Scenario: User registration, login, and logout
    Given a user navigates to "https://www.demoblaze.com/index.html"
    When the user registers with a new account
    And the user logs in with the registered account
    Then the user logs out

  Scenario: Add a laptop to the shopping cart and verify
    Given a user is logged in on "https://www.demoblaze.com/index.html"
    When the user adds a laptop to the cart
    Then the laptop should be in the shopping cart
