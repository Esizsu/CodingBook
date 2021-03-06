package com.codingbook.stepdef;

import com.codingbook.pages.Comment;
import com.codingbook.utils.ConfigurationReader;
import com.codingbook.utils.MyDriver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.Assert;

import static com.codingbook.pages.Base.waitSomeTime;

public class CommentStep {

    Logger logger = LoggerFactory.getLogger(CommentStep.class);
    Comment comment = new Comment();

    @Given("Navigate to CodingBook website")
    public void navigateToCodingBookWebsite() {
        MyDriver.get().get(ConfigurationReader.getProperty("baseUrl"));

        MyDriver.get().manage().deleteAllCookies();
        waitSomeTime(3000L);
        String expected = "CodingBook – Shape your future";
        String actual = MyDriver.get().getTitle();
        Assert.assertEquals(expected, actual);
        logger.info("CodingBook title : {}", actual);
    }

        @And("click on Test Automation sub-menu under Courses menu")
        public void clickOnTestAutomationSubMenuUnderCoursesMenu() {
            comment.clickOnTestAutomation();
    }

        @And("click on Curriculum")
        public void clickOnCurriculum() {
            comment.clickOnCurriculum();
        }

        @And("click on Test NG – Summary")
        public void clickOnTestNGSummary() {
            comment.clickOnTestNG();
        }

        @And("write a comment {string}")
        public void writeAComment(String comment) {
            this.comment.writeAComment(comment);
        }

        @And("type name {string}")
        public void typeName(String name) {
            comment.typeName(name);
        }

        @And("type email {string}")
        public void typeEmail(String email) {
            comment.typeEmail(email);
        }

        @And("type Website")
        public void typeWebsite() {
            comment.typeWebsite();
        }

        @And("check the Save my information check-box")
        public void checkTheSaveMyInformationCheckBox() {
            comment.checkTheSaveBox();
        }

        @When("click on Post Comment button")
        public void clickOnPostCommentButton() {
        comment.clickOnPostButton();
        }

        @Then("verify success Comment")
        public void verifySuccessComment() {
        comment.verifySuccessComment();
    }
}



