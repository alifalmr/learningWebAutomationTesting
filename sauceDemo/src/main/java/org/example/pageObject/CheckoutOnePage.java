package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CheckoutOnePage {
    public static WebDriver driver;

    public CheckoutOnePage(WebDriver driver){
        PageFactory.initElements(driver,this);
        this.driver = driver;
    }

    @FindBy(xpath = "//span[@class='title']")
    private WebElement pageTitle;

    @FindBy(xpath = "//input[@id='first-name']")
    private WebElement firstName;

    @FindBy(xpath = "//input[@id='last-name']")
    private WebElement lastName;

    @FindBy(xpath = "//input[@id='postal-code']")
    private WebElement zipCode;

    @FindBy(xpath = "//input[@id='continue']")
    private WebElement continueBtn;

    public boolean isDisplayed(){
        return pageTitle.isDisplayed();
    }

    public void setFirstName(String frstName){
        firstName.sendKeys(frstName);
    }

    public void setLastName(String lstName){
        lastName.sendKeys(lstName);
    }

    public void setZipCode(String zipCd){
        zipCode.sendKeys(zipCd);
    }

    public void clickConBtn(){
        continueBtn.click();
    }
}
