/// <reference types="cypress" />

describe('Counter test', () => {
    beforeEach(function(){
        cy.visit("http://localhost:3000");
    });
    it('Button should exists', () => {
        cy.visit("http://localhost:3000");
        cy.get(".counterBtn").should("exist");
        cy.get(".doesnexists").should("not.exist");
    });
    it("Should increment counter", function(){
        cy.get(".counterBtn").should("have.text", "count is: 0");
        cy.get(".counterBtn").click();
        cy.get(".counterBtn").should("have.text", "count is: 1");
    });
    it("Should increment counter multiple times", function(){
        cy.get(".counterBtn").should("have.text", "count is: 0");
        cy.get(".counterBtn").click();
        cy.get(".counterBtn").click();
        cy.get(".counterBtn").click();
        cy.get(".counterBtn").click();
        cy.get(".counterBtn").should("have.text", "count is: 4");
    });
    it("should have red colour", function(){
        cy.get("h3").should("have.css", {color: "red"} )
    })
    it("should have height 20px for h2", function(){
        cy.get("h6").should("have.css", {height: "20px"})
    })
});