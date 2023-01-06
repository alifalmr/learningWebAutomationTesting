package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CheckoutTwoPage {
    public static WebDriver driver;

    public CheckoutTwoPage(WebDriver driver){
        PageFactory.initElements(driver,this);
        this.driver = driver
    }

    @FindBy(xpath = "//span[@class='title']")
    private WebElement pageTitle;

    @FindBy
}
