@Checkout
  Feature: Checkout
    As a user I want to checkout my shopping cart
  
  Scenario: Add an item to cart
    Given user open the website sauce demo
    And user input "standard_user" as userName and input "secret_sauce" as password
    And user is on inventory page
    And user choose "Name (Z to A)" as option for sorting the items
    When user click add to cart button for "Test.allTheThings() T-Shirt (Red)" as productName
    And user can see the cart bedge appeared
    And user click cart button