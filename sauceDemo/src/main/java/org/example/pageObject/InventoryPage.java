package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class InventoryPage {
    public static WebDriver driver;

    public InventoryPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy (xpath = "//div[.='Sauce Labs Backpack']")
    private WebElement itemDesc1;

    @FindBy( xpath = "//button[@id='add-to-cart-sauce-labs-backpack']")
    private WebElement addBtn1;

    @FindBy(xpath = "//select[@class='product_sort_container']")
    private WebElement sortOptions;

    public void clickItemDesc1(){
        itemDesc1.click();
    }

    public void clickAddBtn1(){
        addBtn1.click();
    }

    public void selectOption(String opt){
        Select b = new Select(sortOptions);
        b.selectByVisibleText(opt);
    }
}
