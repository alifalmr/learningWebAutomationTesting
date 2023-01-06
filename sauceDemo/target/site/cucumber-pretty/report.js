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
  "duration": 13514184800,
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
  "name": "user is on inventory page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user choose \"Name (Z to A)\" as option for sorting the items",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click add to cart button for \"Test.allTheThings() T-Shirt (Red)\" as productName",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click add to cart button for \"Sauce Labs Onesie\" as productName",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user can see the cart bedge appeared",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user click cart button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user will be directed to cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "\"Test.allTheThings() T-Shirt (Red)\" as productName appeared on card page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "\"Sauce Labs Onesie\" as productName appeared on card page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user click remove item for \"Sauce Labs Onesie\" as productName",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user click checkout button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user is on checkout step one page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user input \"Alifa\" as firstName and input \"Almira\" as lastName and input \"41235\" as zipCode for shipping information",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 2169051400,
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
  "duration": 2055152600,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.verifyDisplayed()"
});
formatter.result({
  "duration": 1115886100,
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
  "duration": 3372432000,
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
  "duration": 3124842700,
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
  "duration": 3129103300,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.verifyBedge()"
});
formatter.result({
  "duration": 1585232900,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.clickCartBtn()"
});
formatter.result({
  "duration": 3253170700,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.verifyPage()"
});
formatter.result({
  "duration": 1591258200,
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
  "duration": 1573448900,
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
  "duration": 1625638400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sauce Labs Onesie",
      "offset": 28
    }
  ],
  "location": "CheckoutSteps.removeItem(String)"
});
formatter.result({
  "duration": 3093983900,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.clickCheckout()"
});
formatter.result({
  "duration": 3162790800,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.verifyCOPage()"
});
formatter.result({
  "duration": 1552597000,
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
  "duration": 3785385300,
  "status": "passed"
});
formatter.after({
  "duration": 6643528400,
  "status": "passed"
});
});