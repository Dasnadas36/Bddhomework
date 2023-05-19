$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Lenovo/IdeaProjects/Bddhomework/src/test/resources/Features/Register.Feature");
formatter.feature({
  "line": 1,
  "name": "NopCommerce Register",
  "description": "",
  "id": "nopcommerce-register",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Nopcommerce Valid Register Test",
  "description": "",
  "id": "nopcommerce-register;nopcommerce-valid-register-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User on Register Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Select a \"\u003cGender\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter \"\u003cFirst name\u003e\" And \"\u003cLast Name\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter \"\u003cDay\u003e\",\"\u003cMonth\u003e\"And \"\u003cYear\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User Enter \"\u003cEmail Address\u003e\" And \"\u003cCompany Name\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Enter \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enter Final \"\u003cConfirm Password\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click On \"\u003cRegister Button\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "nopcommerce-register;nopcommerce-valid-register-test;",
  "rows": [
    {
      "cells": [
        "Gender",
        "First name",
        "Last Name",
        "Day",
        "Month",
        "Year",
        "Email Address",
        "Company Name",
        "Password",
        "Confirm Password",
        "Register Button"
      ],
      "line": 19,
      "id": "nopcommerce-register;nopcommerce-valid-register-test;;1"
    },
    {
      "cells": [
        "Male",
        "Sachin",
        "Bhatt",
        "03",
        "April",
        "1989",
        "Dasnadas208@gmail.com",
        "ABC",
        "abc123",
        "abc123",
        "Register Button"
      ],
      "line": 20,
      "id": "nopcommerce-register;nopcommerce-valid-register-test;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "User able to open Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "Enter an Url",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_able_to_open_Browser()"
});
formatter.result({
  "duration": 8840796600,
  "status": "passed"
});
formatter.match({
  "location": "Register.enter_an_Url()"
});
formatter.result({
  "duration": 1708776900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Nopcommerce Valid Register Test",
  "description": "",
  "id": "nopcommerce-register;nopcommerce-valid-register-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User on Register Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Select a \"Male\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter \"Sachin\" And \"Bhatt\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Enter \"03\",\"April\"And \"1989\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User Enter \"Dasnadas208@gmail.com\" And \"ABC\"",
  "matchedColumns": [
    6,
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Enter \"abc123\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enter Final \"abc123\"",
  "matchedColumns": [
    9
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Click On \"Register Button\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_click_on_Register_Link()"
});
formatter.result({
  "duration": 636826100,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_on_Register_Page()"
});
formatter.result({
  "duration": 39100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 15
    }
  ],
  "location": "Register.user_Select_a(String)"
});
formatter.result({
  "duration": 156114700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sachin",
      "offset": 7
    },
    {
      "val": "Bhatt",
      "offset": 20
    }
  ],
  "location": "Register.enter_And(String,String)"
});
formatter.result({
  "duration": 375597900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03",
      "offset": 7
    },
    {
      "val": "April",
      "offset": 12
    },
    {
      "val": "1989",
      "offset": 23
    }
  ],
  "location": "Register.enter_And(String,String,String)"
});
formatter.result({
  "duration": 382443400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dasnadas208@gmail.com",
      "offset": 12
    },
    {
      "val": "ABC",
      "offset": 40
    }
  ],
  "location": "Register.user_Enter_And(String,String)"
});
formatter.result({
  "duration": 320836400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 7
    }
  ],
  "location": "Register.enter(String)"
});
formatter.result({
  "duration": 187660900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 13
    }
  ],
  "location": "Register.enter_Final(String)"
});
formatter.result({
  "duration": 181250800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register Button",
      "offset": 10
    }
  ],
  "location": "Register.click_On(String)"
});
formatter.result({
  "duration": 643136300,
  "status": "passed"
});
formatter.match({
  "location": "Register.close_Browser()"
});
formatter.result({
  "duration": 524365200,
  "status": "passed"
});
});