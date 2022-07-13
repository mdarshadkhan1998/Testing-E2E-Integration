/// <reference types="cypress" />

describe('Todo test', () => {
    beforeEach(function(){
        cy.visit("https://example.cypress.io/todo");
    });

    it('should show basic structure', () => {
        cy.get(".new-todo").should("exist");
        cy.get(".main").should("exist");
        cy.get(".todo-count").should("exist");
        cy.get(".filters").should("exist");
        cy.get(".selected").should("exist");
        cy.get("a").should("exist");
    });

    it("Should be able to add todo",()=>{
        cy.get(".todo-list").children().should("have.length", 2);
        cy.get(".new-todo").type("Automated tests{enter}");
        cy.get(".new-todo").type("Arshad{enter}");
        cy.get(".todo-list").children().should("have.length", 4);
    })

    it("Should increase footer text",()=>{
        cy.get(".todo-count strong").should("have.text", 2);
        cy.get(".new-todo").type("Automated tests{enter}");
        cy.get(".todo-count strong").should("have.text", 3);
    })   
    
});

//to skip any case use xit
//xit

//to run any specific case use
//it.only