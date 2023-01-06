package org.example.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CartPage {
    public static WebDriver driver;

    public CartPage(WebDriver driver){
        PageFactory.initElements(driver,this);
        this.driver = driver;
    }

    @FindBy(xpath = "//span[@class='title']")
    private WebElement pageTitle;

//    @FindBy(xpath = "//button[@id='remove-sauce-labs-backpack']")
//    private WebElement removeBtn;

    @FindBy(xpath = "//button[@id='checkout']")
    private WebElement checkoutBtn;

    public boolean isDisplayed(){
        return pageTitle.isDisplayed();
    }

    public boolean itemsDisplayed(String productName){
        return driver.findElement(By.xpath("//div[.='" + productName + "']")).isDisplayed();
    }

    public void clickRemoveBtn(String productName){
        driver.findElement(By.xpath("//button[@id='remove-" + productName.toLowerCase().replace(" ","-") + ")']")).click();
    }

    public void clickCheckoutBtn(){
        checkoutBtn.click();
    }
}
