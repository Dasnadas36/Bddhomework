Feature: NopCommerce Register
  Background:
    Given User able to open Browser
    And Enter an Url

    Scenario Outline:Nopcommerce Valid Register Test
      When User click on Register Link
      And User on Register Page
      Then User Select a "<Gender>"
      Then Enter "<First name>" And "<Last Name>"
      Then Enter "<Day>","<Month>"And "<Year>"
      Then User Enter "<Email Address>" And "<Company Name>"
      Then Enter "<Password>"
      Then Enter Final "<Confirm Password>"
      And Click On "<Register Button>"
      And Close Browser

      Examples:
        | Gender | First name | Last Name | Day | Month | Year | Email Address | Company Name | Password | Confirm Password | Register Button |
        | Male   | Sachin     | Bhatt     |03   |April  | 1989 | Dasnadas208@gmail.com| ABC   | abc123   |  abc123          | Register Button |