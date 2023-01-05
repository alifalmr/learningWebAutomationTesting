@Login
  Feature: Login
    As a user I want to login to website sauce demo

  Scenario: Normal login
    Given user open the website sauce demo
    When user input "standard_user" as userName and input "secret_sauce" as password

  Scenario Outline: Invalid login
    Given user open the website sauce demo
    When user input "<username>" as userName and input "<password>" as password
    Then user will get "<errorMessage>" as errorText

  Examples:
    | username      | password | errorMessage                                                              |
    | alifa         | 2345     | Epic sadface: Username and password do not match any user in this service |
    |               | 2345     | Epic sadface: Username is required                                        |
    | alifa         |          | Epic sadface: Password is required                                        |
    |               |          | Epic sadface: Username is required                                        |
    | standard_user | 2345     | Epic sadface: Username and password do not match any user in this service |
