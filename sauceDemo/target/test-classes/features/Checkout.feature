@Checkout
  Feature: Checkout
    As a user I want to checkout my shopping cart
  
  Scenario: Add an item to cart
    Given user open the website sauce demo
    When user input "standard_user" as userName and input "secret_sauce" as password
    Then user is redirected to inventory page
    When user choose "Name (Z to A)" as option for sorting the items
    And user click add to cart button for "Sauce Labs Onesie" as productName
    And user click add to cart button for "Test.allTheThings() T-Shirt (Red)" as productName
    Then user see the cart bedge appeared
    When user click cart button
    Then user is redirected to cart page
    Then "Sauce Labs Onesie" as productName appeared on card page
    Then "Test.allTheThings() T-Shirt (Red)" as productName appeared on card page
    And user click remove item for "Test.allTheThings() T-Shirt (Red)" as productName
    When user click checkout button
    Then user is redirected to checkout step one page
    When user input "Alifa" as firstName and input "Almira" as lastName and input "41235" as zipCode for shipping information
    Then user is redirected to checkout step two page
    Then user see the correct price for "Sauce Labs Onesie" as productName
    Then user see the correct tax for "Sauce Labs Onesie" as productName
    Then user see the correct total
    When user click finish button
    Then user is redirected to checkout complete
    Then user get "THANK YOU FOR YOUR ORDER" as gratMessage for gratitude message
