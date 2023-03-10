package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.lexer.Th;
import org.example.pageObject.InventoryPage;
import org.example.pageObject.LoginPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import static jdk.nashorn.internal.runtime.regexp.joni.Config.log;

public class LoginSteps {
    private WebDriver webDriver;

    public LoginSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @Given("user open the website sauce demo")
    public void verifyDisplay() throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        Assert.assertTrue(loginPage.isDisplayed());

        Thread.sleep(1500);
    }

    @When("user input \"(.*)\" as userName and input \"(.*)\" as password")
    public void inputCredential(String userName, String password) throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.setUserName(userName);
        loginPage.setPassword(password);
        loginPage.clickLogin();

        Thread.sleep(1000);
    }

    @Then("user is redirected to inventory page")
    public void verifyDisplayed() throws InterruptedException {
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        Assert.assertTrue(inventoryPage.isDisplayed());

        Thread.sleep(1000);
    }

    @Then("user will get \"(.*)\" as errorText")
    public void errorText(String errorText) throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        Assert.assertEquals(errorText,loginPage.getErrorText());

        Thread.sleep(3000);
    }

}
