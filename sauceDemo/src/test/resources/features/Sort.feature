@Sort
  Feature: Sort
    As a user I want to sort the items for easier searching items
  
  Scenario Outline: Sort by name ascending
    Given user open the website sauce demo
    And user input "standard_user" as userName and input "secret_sauce" as password
    When user choose "<options>" as option for sorting the items

  Examples:
    | options             |
    | Name (A to Z)       |
    | Name (Z to A)       |
    | Price (low to high) |
    | Price (high to low) |
