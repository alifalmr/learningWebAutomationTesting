@Checkout
  Feature: Checkout
    As a user I want to checkout my shopping cart
  
  Scenario: Add an item to cart
    Given user open the website sauce demo
    When user input "standard_user" as userName and input "secret_sauce" as password
    Then user is on inventory page
    When user choose "Name (Z to A)" as option for sorting the items
    And user click add to cart button for "Test.allTheThings() T-Shirt (Red)" as productName
    And user click add to cart button for "Sauce Labs Onesie" as productName
    Then user can see the cart bedge appeared
    When user click cart button
    Then user will be directed to cart page
    Then "Test.allTheThings() T-Shirt (Red)" as productName appeared on card page
    Then "Sauce Labs Onesie" as productName appeared on card page
    And user click remove item for "Sauce Labs Onesie" as productName
    When user click checkout button
    Then user is on checkout step one page
    When user input "Alifa" as firstName and input "Almira" as lastName and input "41235" as zipCode for shipping information
