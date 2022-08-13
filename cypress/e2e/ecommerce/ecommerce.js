/// <reference types="Cypress" />
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import { data } from "cypress/types/jquery";
import HomePage from '../../support/pageObject/HomePage'
const homePage=new HomePage()
Given('I open Ecommerce Page', ()=>{
    // before(function(){
    //     cy.fixture.then(function(data){
    //         this.data = data;
    //     })
    // })
    cy.visit(Cypress.env('url')+"/angularpractice")
})
When('I add item to Cart',()=>{
    
   // homePage.getshopTab().click()
    
    
})
Then('select the country submit and varify Thankyou',()=>{
    
})