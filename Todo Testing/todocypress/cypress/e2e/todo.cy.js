describe('testing todo app', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000/')
  })
  it('should visit correctly', () => {
    cy.focused().should("have.id", "todo-input")
  })
})