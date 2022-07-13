/// <reference types="cypress" />

describe('Counter test', () => {
    beforeEach(function(){
        cy.visit("http://localhost:3000");
    });
    it.only('basic', () => {
        cy.intercept('GET', "https://localhost:8080/counter",{
            value: "hello world"
        }).as("counterReq");

        cy.wait("@counterReq");
        
        cy.get(".counter-value").should("have.text", "count is: hello world")

    });

});