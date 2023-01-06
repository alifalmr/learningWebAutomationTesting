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
  "duration": 12051173300,
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
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is on inventory page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user choose \"Name (Z to A)\" as option for sorting the items",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click add to cart button for \"Test.allTheThings() T-Shirt (Red)\" as productName",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user can see the cart bedge appeared",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user click cart button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 2237478000,
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
  "duration": 1938364100,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.verifyDisplayed()"
});
formatter.result({
  "duration": 1103197500,
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
  "duration": 3383792100,
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
  "duration": 3378166400,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.verifyBedge()"
});
formatter.result({
  "duration": 1585003400,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.clickCartBtn()"
});
formatter.result({
  "duration": 3240533500,
  "status": "passed"
});
formatter.after({
  "duration": 2347982300,
  "status": "passed"
});
});