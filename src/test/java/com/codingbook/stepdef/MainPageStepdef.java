package com.codingbook.stepdef;

import com.codingbook.pages.Base;
import com.codingbook.pages.MainPage;
import com.codingbook.utils.ConfigurationReader;
import com.codingbook.utils.MyDriver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;



public class MainPageStepdef extends Base{
    Logger logger = LoggerFactory.getLogger(MainPageStepdef.class);
    MainPage mainPage = new MainPage();


    @Given("User opens CodingBook web page")
    public void userOpensCodingBookWebPage() {
       // MyDriver.get().get(ConfigurationReader.getProperty("baseUrl")); bunu hooks class'tan aliyor
        MyDriver.get().manage().deleteAllCookies();
        waitSomeTime(3000L);
        String expected = "CodingBook – Shape your future";
        String actual = MyDriver.get().getTitle();
        Assert.assertEquals(expected,actual);

    }

    @When("User checks if CodingBook logo is visible on the top left corner")
    public void userChecksIfCodingBookLogoIsVisibleOnTheTopLeftCorner() {
    }

    @And("User clicks CodingBook logo")
    public void userClicksCodingBookLogo() {
    }

    @Then("Test if user landed CodingBook homepage")
    public void testIfUserLandedCodingBookHomepage() {
    }
}
