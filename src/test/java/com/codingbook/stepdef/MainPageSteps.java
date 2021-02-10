package com.codingbook.stepdef;

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

import static com.codingbook.pages.Base.waitSomeTime;


public class MainPageSteps{
    Logger logger = LoggerFactory.getLogger(MainPageSteps.class);
    MainPage mainPage = new MainPage();


    @Given("User opens CodingBook web page")
    public void userOpensCodingBookWebPage() {
       MyDriver.get().get(ConfigurationReader.getProperty("baseUrl")); //bunu hooks class'tan aliyor
        MyDriver.get().manage().deleteAllCookies();
        waitSomeTime(3000L);
        String expected = "CodingBook – Shape your future";
        String actual = MyDriver.get().getTitle();
        Assert.assertEquals(expected,actual);
        logger.info("{} CodingBook title:",actual);

    }

    @When("User checks if CodingBook logo is visible on the top left corner")
    public void userChecksIfCodingBookLogoIsVisibleOnTheTopLeftCorner() {
        mainPage.checkingLogo();
    }

    @And("User first clicks on About and CodingBook logo")
    public void userFirstClicksOnAboutAndCodingBookLogo() {
        mainPage.clickAboutAndLogo();
    }


    @Then("Verify that info@ email address is present")
    public void verifyThatInfoEmailAddressIsPresent() {
        mainPage.verifyInfoEmailAddress();

    }

}
