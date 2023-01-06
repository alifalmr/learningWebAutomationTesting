package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import org.example.pageObject.InventoryPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class SortSteps {
    private WebDriver webDriver;

    public SortSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @Given("user is on inventory page")
    public void verifyDisplayed() throws InterruptedException {
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        Assert.assertTrue(inventoryPage.isDisplayed());

        Thread.sleep(1000);
    }
    @And("user choose \"(.*)\" as option for sorting the items")
    public void sortItem(String option) throws InterruptedException {
        InventoryPage inventoryPage = new InventoryPage(webDriver);
        inventoryPage.selectOption(option);

        Thread.sleep(3000);
    }
}
