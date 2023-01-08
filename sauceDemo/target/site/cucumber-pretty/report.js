$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Checkout.feature");
formatter.feature({
  "line": 2,
  "name": "Checkout",
  "description": "As a user I want to checkout my shopping cart",
  "id": "checkout",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Checkout"
    }
  ]
});
formatter.before({
  "duration": 6169568000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Add an item to cart",
  "description": "",
  "id": "checkout;add-an-item-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user open the website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user input \"standard_user\" as userName and input \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user is redirected to inventory page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user choose \"Name (Z to A)\" as option for sorting the items",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click add to cart button for \"Sauce Labs Onesie\" as productName",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click add to cart button for \"Test.allTheThings() T-Shirt (Red)\" as productName",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user see the cart bedge appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click cart button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user is redirected to cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\"Sauce Labs Onesie\" as productName appeared on card page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "\"Test.allTheThings() T-Shirt (Red)\" as productName appeared on card page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user click remove item for \"Test.allTheThings() T-Shirt (Red)\" as productName",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user click checkout button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user is redirected to checkout step one page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user input \"Alifa\" as firstName and input \"Almira\" as lastName and input \"41235\" as zipCode for shipping information",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user is redirected to checkout step two page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user see the correct price for \"Sauce Labs Onesie\" as productName",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user see the correct tax for \"Sauce Labs Onesie\" as productName",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user see the correct total",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user click finish button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user is redirected to checkout complete",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user get \"THANK YOU FOR YOUR ORDER\" as gratMessage for gratitude message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 1689023700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 50
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 1307099400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.verifyDisplayed()"
});
formatter.result({
  "duration": 1050205300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z to A)",
      "offset": 13
    }
  ],
  "location": "SortSteps.sortItem(String)"
});
formatter.result({
  "duration": 3208241000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Onesie",
      "offset": 35
    }
  ],
  "location": "CheckoutSteps.addToCart(String)"
});
formatter.result({
  "duration": 3058905600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test.allTheThings() T-Shirt (Red)",
      "offset": 35
    }
  ],
  "location": "CheckoutSteps.addToCart(String)"
});
formatter.result({
  "duration": 3063530600,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.verifyBedge()"
});
formatter.result({
  "duration": 1556616600,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.clickCartBtn()"
});
formatter.result({
  "duration": 3077567900,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.verifyPage()"
});
formatter.result({
  "duration": 1630389300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Onesie",
      "offset": 1
    }
  ],
  "location": "CheckoutSteps.verifyItems(String)"
});
formatter.result({
  "duration": 1550401000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test.allTheThings() T-Shirt (Red)",
      "offset": 1
    }
  ],
  "location": "CheckoutSteps.verifyItems(String)"
});
formatter.result({
  "duration": 1546317800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test.allTheThings() T-Shirt (Red)",
      "offset": 28
    }
  ],
  "location": "CheckoutSteps.removeItem(String)"
});
formatter.result({
  "duration": 3065239500,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.clickCheckout()"
});
formatter.result({
  "duration": 3081858600,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.verifyCOPage()"
});
formatter.result({
  "duration": 1554515000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alifa",
      "offset": 12
    },
    {
      "val": "Almira",
      "offset": 43
    },
    {
      "val": "41235",
      "offset": 74
    }
  ],
  "location": "CheckoutSteps.inputInformation(String,String,String)"
});
formatter.result({
  "duration": 3315417900,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.verifyCTPage()"
});
formatter.result({
  "duration": 1545769600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Onesie",
      "offset": 32
    }
  ],
  "location": "CheckoutSteps.verifyPrice(String)"
});
formatter.result({
  "duration": 1569042500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Onesie",
      "offset": 30
    }
  ],
  "location": "CheckoutSteps.verifyTax(String)"
});
formatter.result({
  "duration": 1568045100,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.verifyTotal()"
});
formatter.result({
  "duration": 1584642900,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.clickFnsBtn()"
});
formatter.result({
  "duration": 3077267300,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.verifyCCPage()"
});
formatter.result({
  "duration": 1545944800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "THANK YOU FOR YOUR ORDER",
      "offset": 10
    }
  ],
  "location": "CheckoutSteps.verifyMessage(String)"
});
formatter.result({
  "duration": 3040892500,
  "status": "passed"
});
formatter.after({
  "duration": 732033200,
  "status": "passed"
});
});