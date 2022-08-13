Feature: End to End Ecommerce Validation
    Regression Testing of the Ecommerce Scenario Outline: 

    Scenario: Product Delivary
    Given I open Ecommerce Page
    When I add item to Cart
    And Validate the total prices
    Then select the country submit and varify Thankyou