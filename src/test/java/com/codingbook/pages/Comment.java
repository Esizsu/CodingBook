package com.codingbook.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Comment extends Base {

    Logger logger = LoggerFactory.getLogger(Comment.class);


    @FindBy(xpath = "//a[@title='Courses']")
    public WebElement courses;

    @FindBy(xpath = "//a[@title='Test Automation']")
    public WebElement testAutomation;

    @FindBy(xpath = "//a[normalize-space()='Curriculum']")
    public WebElement curriculum;

    @FindBy(xpath = "//span[contains(text(),'Test NG – Summary')]")
    public WebElement testNG;

    @FindBy(xpath = "//textarea[@id='comment']")
    public WebElement comment;

    @FindBy(xpath = "//input[@id='author']")
    public WebElement name;

    @FindBy(xpath = "//input[@id='email']")
    public WebElement email;

    @FindBy(xpath = "//input[@id='url']")
    public WebElement website;

    @FindBy(xpath = "//input[@id='wp-comment-cookies-consent']")
    public WebElement saveCheckBox;

    @FindBy(xpath = "//input[@id='submit']")
    public WebElement submit;

    @FindBy(xpath = "//p[@class='comment-awaiting-moderation label label-info']")
    WebElement commentSentMessage;

    public void clickOnTestAutomation() {
        waitSomeTime(5L);
        courses.click();
        waitSomeTime(5L);
        testAutomation.click();
        logger.info("Clicked TestAutomation sub-menu.");
    }
    public void clickOnCurriculum() {
        curriculum.click();
        logger.info("Clicked Curriculum.");
    }
    public void clickOnTestNG() {
        testNG.click();
        logger.info("Clicked TestNG.");
    }

    public void writeAComment(String comment) {
        this.comment.sendKeys(comment);
    }

    public void typeName(String name) {
        this.name.sendKeys(name);
    }

    public void typeEmail(String email) {
        this.email.sendKeys(email);
    }

    public void typeWebsite() {
        website.sendKeys("www.gmail.com");
    }
    public void checkTheSaveBox() {
        saveCheckBox.click();
    }
    public void clickOnPostButton() {
        submit.click();
    }

    public void verifySuccessComment() {
        commentSentMessage.isDisplayed();
        logger.info("Comment sent successfully.");
    }
}

/*
ArrayList<String> locators = new ArrayList<String>();
    	locators.add("//li[@id='menu-item-6539']/a"); //Course
    	locators.add("//li[@id='menu-item-6538']/a"); //Test Automation
    	locators.add("//div[@id='learn-press-course-tabs']/ul/li[2]/a"); //Curriculum
    	locators.add("//span[contains(text(), 'Basic Test Automation – Assignments')]"); //Basic Test Automation – Assignments
    	locators.add("//a[contains(text(), 'youtube')]"); //Youtube
 */
