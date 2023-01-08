package org.example.pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CheckoutTwoPage {
    public static WebDriver driver;

    public CheckoutTwoPage(WebDriver driver){
        PageFactory.initElements(driver,this);
        this.driver = driver;
    }

    @FindBy(xpath = "//span[@class='title']")
    private WebElement pageTitle;

    @FindBy(xpath = "//div[@class='summary_subtotal_label']")
    private WebElement itemTotal;

    @FindBy(xpath = "//div[@class='summary_tax_label']")
    private WebElement tax;

    @FindBy(xpath = "//div[@class='summary_total_label']")
    private WebElement total;

    @FindBy(xpath = "//button[@id='finish']")
    private WebElement finishBtn;

    public boolean isDisplayed(){
        return pageTitle.isDisplayed();
    }

    public String getPriceStr(String productName){
        return driver.findElement(By.xpath("//a[.='"+ productName +"']/following-sibling::div[@class='item_pricebar']/div")).getText();
    }

    public double getPrice(String productName){
        String priceStrg = getPriceStr(productName);
        String priceStr = priceStrg.replace("$","");
        return Double.parseDouble(priceStr);
    }

    public double getItemTotal(){
        String itemStrg = itemTotal.getText();
        String itemStr = itemStrg.replace("Item total: $","");
        return Double.parseDouble(itemStr);
    }

    public double getTax(){
        String taxStrg = tax.getText();
        String taxStr = taxStrg.replace("Tax: $","");
        return Double.parseDouble(taxStr);
    }

    public double getTotal(){
        String totalStrg = total.getText();
        String totalStr = totalStrg.replace("Total: $","");
        return Double.parseDouble(totalStr);
    }

    public void clickFnsButton(){
        finishBtn.click();
    }


}
