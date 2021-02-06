$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Comment.feature");
formatter.feature({
  "name": "Comment Test",
  "description": "",
  "keyword": "Feature"
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
  "keyword": "Scenario Outline"
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
  "status": "passed"
});
formatter.step({
  "name": "write a comment \"Comment-4\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.codingbook.stepdef.CommentStep.writeAComment(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "type name \"ali\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.codingbook.stepdef.CommentStep.typeName(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "type email \"ahmet@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.codingbook.stepdef.CommentStep.typeEmail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "type Website",
  "keyword": "And "
});
formatter.match({
  "location": "com.codingbook.stepdef.CommentStep.typeWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check the Save my information check-box",
  "keyword": "And "
});
formatter.match({
  "location": "com.codingbook.stepdef.CommentStep.checkTheSaveMyInformationCheckBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Post Comment button",
  "keyword": "When "
});
formatter.match({
  "location": "com.codingbook.stepdef.CommentStep.clickOnPostCommentButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify success Comment",
  "keyword": "Then "
});
formatter.match({
  "location": "com.codingbook.stepdef.CommentStep.verifySuccessComment()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//p[@class\u003d\u0027comment-awaiting-moderation label label-info\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.141)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ONJFJK9\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\tsume\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54072}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 47aecfdbdaf0b1e6166258fed1a3b4ff\n*** Element info: {Using\u003dxpath, value\u003d//p[@class\u003d\u0027comment-awaiting-moderation label label-info\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat com.codingbook.pages.Comment.verifySuccessComment(Comment.java:85)\r\n\tat com.codingbook.stepdef.CommentStep.verifySuccessComment(CommentStep.java:79)\r\n\tat ✽.verify success Comment(file:///C:/Users/tsume/IntelliJ%20Workplace/CodingBook/src/test/resources/features/Comment.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "java.lang.RuntimeException: Unexpected result for screenshot command: null\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:304)\r\n\tat com.codingbook.stepdef.Hooks.after(Hooks.java:33)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/features/MainPage.feature");
formatter.feature({
  "name": "CodingBook Main Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test CodingBook Logo",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d87.0.4280.141)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ONJFJK9\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\tsume\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54072}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 47aecfdbdaf0b1e6166258fed1a3b4ff\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat com.codingbook.stepdef.Hooks.setup(Hooks.java:21)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User opens CodingBook web page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.codingbook.stepdef.MainPageSteps.userOpensCodingBookWebPage()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d87.0.4280.141)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-ONJFJK9\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\tsume\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54072}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 47aecfdbdaf0b1e6166258fed1a3b4ff\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.codingbook.stepdef.Hooks.after(Hooks.java:33)\r\n",
  "status": "failed"
});
});