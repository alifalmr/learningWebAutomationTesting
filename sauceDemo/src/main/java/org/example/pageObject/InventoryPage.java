package org.example.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

import static jdk.nashorn.internal.runtime.regexp.joni.Config.log;

public class InventoryPage {
    public static WebDriver driver;

    public InventoryPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

//    @FindBy (xpath = "//div[.='Sauce Labs Backpack']")
//    private WebElement itemDesc1;
//
//    @FindBy( xpath = "//button[@id='add-to-cart-sauce-labs-backpack']")
//    private WebElement addBtn1;

    @FindBy(xpath = "//span[@class='title']")
    private WebElement pageTitle;

    @FindBy(xpath = "//select[@class='product_sort_container']")
    private WebElement sortOptions;

    @FindBy(xpath = "//div[@id='shopping_cart_container']/a[1]")
    private WebElement cartBtn;

    @FindBy(xpath = "//button[@id='react-burger-menu-btn']")
    private WebElement menuBtn;

    @FindBy(xpath = "//span[@class='shopping_cart_badge']")
    private WebElement cartBedge;

    public boolean isDisplayed(){
        return pageTitle.isDisplayed();
    }

    public void clickItemDesc(String productName){
        driver.findElement(By.xpath("//a[.='" + productName + "']")).click();
    }

    public void clickAddBtn(String productName){
        driver.findElement(By.xpath("//button[@id='add-to-cart-" + productName.toLowerCase().replace(" ","-") + "']")).click();
    }

    public void selectOption(String opt){
        Select b = new Select(sortOptions);
        b.selectByVisibleText(opt);
    }

    public void clickCartBtn(){
        cartBtn.click();
    }

    public void clickMenuBtn(){
        menuBtn.click();
    }

    public boolean cartBdgDisplayed(){
        return cartBedge.isDisplayed();
    }



}
