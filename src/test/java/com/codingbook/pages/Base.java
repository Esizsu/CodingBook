package com.codingbook.pages;

import com.codingbook.utils.MyDriver;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

public class Base {
    public Base() {
        PageFactory.initElements(MyDriver.get(),this);

        // Tum sayfalrada FinBy anotation'i kullanacagimiz icin. her seferinde yazmamak icin bu pageFactory'i
        // initElement'i yaptik constructor da
    }
    public static void waitSomeTime(Long miliSeconds) {
        try {
            Thread.sleep(miliSeconds);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }
            // try catch kullanmak throw atmaktan daha iyi dir. Herhangi bir hatada
            // catch ten sonraki islemleri de yappar. Ama Throws ex da islemi durdurur.
            // Throws kullaniminda reusable methodlari implimenent eden her method/class
            // da throws etmeniz gerekir.

    /**
     *  this script must scroll, until link element is visible
     *  once link element visible, it will stop scrolling
     *  arguments[0] = means first webelement after comma
     *  arguments it's an array of webelements after comma
     *  arguments[0] = link web element, it can be any web element
     */
    public void scrollDown(WebElement str) {
        JavascriptExecutor javascriptExecutor = (JavascriptExecutor) MyDriver.get();

        javascriptExecutor.executeScript("arguments[0].scrollIntoView(true)",str);
        // javascriptExecutor.executeScript("window.scrollBy(0,200)", str);

    }

}
