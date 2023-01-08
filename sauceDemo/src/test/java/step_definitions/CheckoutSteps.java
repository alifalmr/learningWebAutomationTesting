package step_definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.lexer.Th;
import org.example.pageObject.*;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class CheckoutSteps {
    private WebDriver webDriver;

    public CheckoutSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @When("user click add to cart button for \"(.*)\" as productName")
    public void addToCart(String productName) throws InterruptedException {
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.clickAddBtn(productName);

        Thread.sleep(3000);
    }

    @Then("user see the cart bedge appeared")
    public void verifyBedge() throws InterruptedException {
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        Assert.assertTrue(inventoryPage.cartBdgDisplayed());

        Thread.sleep(1500);
    }
    @When("user click cart button")
    public void clickCartBtn() throws InterruptedException {
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.clickCartBtn();

        Thread.sleep(3000);
    }

    @Then("user is redirected to cart page")
    public void verifyPage() throws InterruptedException {
        CartPage cartPage = new CartPage(webDriver);
        Assert.assertTrue(cartPage.isDisplayed());

        Thread.sleep(1500);
    }

    @Then("\"(.*)\" as productName appeared on card page")
    public void verifyItems(String productName) throws InterruptedException {
        CartPage cartPage = new CartPage(webDriver);
        Assert.assertTrue(cartPage.itemsDisplayed(productName));

        Thread.sleep(1500);
    }

    @When("user click remove item for \"(.*)\" as productName")
    public void removeItem(String productName) throws InterruptedException {
        CartPage cartPage = new CartPage(webDriver);
        cartPage.clickRemoveBtn(productName);

        Thread.sleep(3000);
    }

    @When("user click checkout button")
    public void clickCheckout() throws InterruptedException {
        CartPage cartPage = new CartPage(webDriver);
        cartPage.clickCheckoutBtn();

        Thread.sleep(3000);
    }

    @Then("user is redirected to checkout step one page")
    public void verifyCOPage() throws InterruptedException {
        CheckoutOnePage checkoutOnePage = new CheckoutOnePage(webDriver);
        Assert.assertTrue(checkoutOnePage.isDisplayed());

        Thread.sleep(1500);
    }

    @When("user input \"(.*)\" as firstName and input \"(.*)\" as lastName and input \"(.*)\" as zipCode for shipping information")
    public void inputInformation(String firstName, String lastName, String zipCode) throws InterruptedException {
        CheckoutOnePage checkoutOnePage = new CheckoutOnePage(webDriver);
        checkoutOnePage.setFirstName(firstName);
        checkoutOnePage.setLastName(lastName);
        checkoutOnePage.setZipCode(zipCode);
        checkoutOnePage.clickConBtn();

        Thread.sleep(3000);
    }

    @Then("user is redirected to checkout step two page")
    public void verifyCTPage() throws InterruptedException {
        CheckoutTwoPage checkoutTwoPage = new CheckoutTwoPage(webDriver);
        Assert.assertTrue(checkoutTwoPage.isDisplayed());

        Thread.sleep(1500);
    }

    @Then("user see the correct price for \"(.*)\" as productName")
    public void verifyPrice(String productName) throws InterruptedException {
        CheckoutTwoPage checkoutTwoPage = new CheckoutTwoPage(webDriver);
        Assert.assertEquals(checkoutTwoPage.getPrice(productName),checkoutTwoPage.getItemTotal(),0.009);

        Thread.sleep(1500);
    }

    @Then("user see the correct tax for \"(.*)\" as productName")
    public void verifyTax(String productName) throws InterruptedException {
        CheckoutTwoPage checkoutTwoPage = new CheckoutTwoPage(webDriver);
        double tax = checkoutTwoPage.getPrice(productName) * 0.08;
        double calTax = Math.round(tax * 100) / 100.0;
        Assert.assertEquals(calTax,checkoutTwoPage.getTax(),0.009);

        Thread.sleep(1500);
    }

    @Then("user see the correct total")
    public void verifyTotal() throws InterruptedException {
        CheckoutTwoPage checkoutTwoPage = new CheckoutTwoPage(webDriver);
        double getTotal = checkoutTwoPage.getItemTotal() + checkoutTwoPage.getTax();
        Assert.assertEquals(getTotal, checkoutTwoPage.getTotal(),0.009);

        Thread.sleep(1500);
    }

    @When("user click finish button")
    public void clickFnsBtn() throws InterruptedException {
        CheckoutTwoPage checkoutTwoPage = new CheckoutTwoPage(webDriver);
        checkoutTwoPage.clickFnsButton();

        Thread.sleep(3000);
    }

    @Then("user is redirected to checkout complete")
    public void verifyCCPage() throws InterruptedException {
        CompletePage completePage = new CompletePage(webDriver);
        Assert.assertTrue(completePage.isDisplayed());

        Thread.sleep(1500);
    }

    @Then("user get \"(.*)\" as gratMessage for gratitude message")
    public void verifyMessage(String gratMessage) throws InterruptedException {
        CompletePage completePage = new CompletePage(webDriver);
        Assert.assertEquals(gratMessage,completePage.getMessage());

        Thread.sleep(3000);
    }






}
