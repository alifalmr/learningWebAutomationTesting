@Sort
  Feature: Sort
    As a user I want to sort the items for easier searching items
  
  Scenario: Sort by name ascending
    Given user open the website sauce demo
    And user input "standard_user" as userName and input "secret_sauce" as password
    When user choose "Name (A to Z)" as option for sorting the items

  Scenario: Sort by name descending
    Given user open the website sauce demo
    And user input "standard_user" as userName and input "secret_sauce" as password
    When user choose "Name (Z to A)" as option for sorting the items