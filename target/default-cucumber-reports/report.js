$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Comment.feature");
formatter.feature({
  "name": "Comment Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke_test,"
    },
    {
      "name": "@unit_test"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Write a comment",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Navigate to CodingBook website",
  "keyword": "Given "
});
formatter.step({
  "name": "click on Test Automation sub-menu under Courses menu",
  "keyword": "And "
});
formatter.step({
  "name": "click on Curriculum",
  "keyword": "And "
});
formatter.step({
  "name": "click on Test NG – Summary",
  "keyword": "And "
});
formatter.step({
  "name": "write a comment \"\u003cComment\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "type name \"\u003cName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "type email \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "type Website",
  "keyword": "And "
});
formatter.step({
  "name": "check the Save my information check-box",
  "keyword": "And "
});
formatter.step({
  "name": "click on Post Comment button",
  "keyword": "When "
});
formatter.step({
  "name": "verify success Comment",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Comment",
        "Name",
        "Email"
      ]
    },
    {
      "cells": [
        "Comment-4",
        "ali",
        "ahmet@gmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Write a comment",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke_test,"
    },
    {
      "name": "@unit_test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to CodingBook website",
  "keyword": "Given "
});
formatter.match({
  "location": "com.codingbook.stepdef.CommentStep.navigateToCodingBookWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Test Automation sub-menu under Courses menu",
  "keyword": "And "
});
formatter.match({
  "location": "com.codingbook.stepdef.CommentStep.clickOnTestAutomationSubMenuUnderCoursesMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Curriculum",
  "keyword": "And "
});
formatter.match({
  "location": "com.codingbook.stepdef.CommentStep.clickOnCurriculum()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Test NG – Summary",
  "keyword": "And "
});
formatter.match({
  "location": "com.codingbook.stepdef.CommentStep.clickOnTestNGSummary()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d87.0.4280.141)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ONJFJK9\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\tsume\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:65172}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 2f194e4e11847d2cfe57871ce1bbd8b3\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat com.codingbook.pages.Comment.clickOnTestNG(Comment.java:58)\r\n\tat com.codingbook.stepdef.CommentStep.clickOnTestNGSummary(CommentStep.java:45)\r\n\tat ✽.click on Test NG – Summary(file:///C:/Users/tsume/IntelliJ%20Workplace/CodingBook/src/test/resources/features/Comment.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "write a comment \"Comment-4\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.codingbook.stepdef.CommentStep.writeAComment(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "type name \"ali\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.codingbook.stepdef.CommentStep.typeName(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "type email \"ahmet@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.codingbook.stepdef.CommentStep.typeEmail(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "type Website",
  "keyword": "And "
});
formatter.match({
  "location": "com.codingbook.stepdef.CommentStep.typeWebsite()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "check the Save my information check-box",
  "keyword": "And "
});
formatter.match({
  "location": "com.codingbook.stepdef.CommentStep.checkTheSaveMyInformationCheckBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Post Comment button",
  "keyword": "When "
});
formatter.match({
  "location": "com.codingbook.stepdef.CommentStep.clickOnPostCommentButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify success Comment",
  "keyword": "Then "
});
formatter.match({
  "location": "com.codingbook.stepdef.CommentStep.verifySuccessComment()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/MainPage.feature");
formatter.feature({
  "name": "CodingBook Main Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.scenario({
  "name": "Test CodingBook Logo",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User opens CodingBook web page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.codingbook.stepdef.MainPageSteps.userOpensCodingBookWebPage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d87.0.4280.141)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ONJFJK9\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\tsume\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:65217}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: e5697b5faf916ccb4d4a955598102085\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat com.codingbook.stepdef.MainPageSteps.userOpensCodingBookWebPage(MainPageSteps.java:28)\r\n\tat ✽.User opens CodingBook web page(file:///C:/Users/tsume/IntelliJ%20Workplace/CodingBook/src/test/resources/features/MainPage.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User checks if CodingBook logo is visible on the top left corner",
  "keyword": "When "
});
formatter.match({
  "location": "com.codingbook.stepdef.MainPageSteps.userChecksIfCodingBookLogoIsVisibleOnTheTopLeftCorner()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User first clicks on About and CodingBook logo",
  "keyword": "And "
});
formatter.match({
  "location": "com.codingbook.stepdef.MainPageSteps.userFirstClicksOnAboutAndCodingBookLogo()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that info@ email address is present",
  "keyword": "Then "
});
formatter.match({
  "location": "com.codingbook.stepdef.MainPageSteps.verifyThatInfoEmailAddressIsPresent()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d87.0.4280.141)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ONJFJK9\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\tsume\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:65217}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: e5697b5faf916ccb4d4a955598102085\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.codingbook.stepdef.Hooks.after(Hooks.java:33)\r\n",
  "status": "failed"
});
});