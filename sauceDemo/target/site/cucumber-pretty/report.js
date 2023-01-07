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
  "duration": 21809282500,
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
formatter.step({
  "line": 21,
  "name": "user wil redirected to checkout step two page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user will see the correct price for \"Test.allTheThings() T-Shirt (Red)\" as productName",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user will see the correct tax for \"Test.allTheThings() T-Shirt (Red)\" as productName",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user will see the correct total",
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
  "name": "user get gratitude message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.verifyDisplay()"
});
formatter.result({
  "duration": 2306378600,
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
  "duration": 1938503600,
  "status": "passed"
});
formatter.match({
  "location": "SortSteps.verifyDisplayed()"
});
formatter.result({
  "duration": 1112721200,
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
  "duration": 3270908100,
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
  "duration": 3097435300,
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
  "duration": 3094700201,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.verifyBedge()"
});
formatter.result({
  "duration": 1567321500,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.clickCartBtn()"
});
formatter.result({
  "duration": 3141817001,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.verifyPage()"
});
formatter.result({
  "duration": 1557873001,
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
  "duration": 1558445500,
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
  "duration": 1553028400,
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
  "duration": 3091362000,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.clickCheckout()"
});
formatter.result({
  "duration": 3127588699,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.verifyCOPage()"
});
formatter.result({
  "duration": 1547207100,
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
  "duration": 3744113000,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.verifyCTPage()"
});
formatter.result({
  "duration": 1563289201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test.allTheThings() T-Shirt (Red)",
      "offset": 37
    }
  ],
  "location": "CheckoutSteps.verifyPrice(String)"
});
formatter.result({
  "duration": 1613162800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test.allTheThings() T-Shirt (Red)",
      "offset": 35
    }
  ],
  "location": "CheckoutSteps.verifyTax(String)"
});
formatter.result({
  "duration": 1606045900,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.verifyTotal()"
});
formatter.result({
  "duration": 1614095599,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.clickFnsBtn()"
});
formatter.result({
  "duration": 3161013899,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.verifyCCPage()"
});
formatter.result({
  "duration": 1544602500,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.verifyMessage(String)"
});
formatter.result({
  "duration": 527699,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027step_definitions.CheckoutSteps.verifyMessage(String) in file:/C:/Users/Angga%20Nurhiman/IdeaProjects/sauceDemo/target/test-classes/\u0027 with pattern [user get gratitude message] is declared with 1 parameters. However, the gherkin step has 0 arguments []. \nStep: Then user get gratitude message\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4970206600,
  "status": "passed"
});
});