describe('testing todo app', () => {
  // beforeEach(()=>{

  // })
  it('Able to pass visit', () => {
    cy.visit('http://localhost:3000');
  })

  it('Able to type inside an input box', () => {
    let val = "Arshad"
    cy.visit('http://localhost:3000');
    cy.get("[data-testid=todoinput]").type(val);
  })

  it('should visit correctly using ID', () => {
    cy.visit('http://localhost:3000');
    cy.focused().should("have.id", "todoinput");
  })

  it('should visit correctly using CLASS', () => {
    cy.visit('http://localhost:3000');
    cy.focused().should('have.class', 'todo-input');
  })

})

describe('Testing For existance and other Stimulai', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('should type and check in input box', () => {
    cy.get("[data-testid=todoinput]").type("HAVE TEA").should('have.value', 'HAVE TEA');
  })

  it('Adding data into db.json using input', () => {
    let val = "element added";
    cy.focused().should("have.id", "todoinput")
    cy.get("[data-testid=todoinput]").type(val);
    cy.get("[data-testid=todobutton]").click();
  })

  it("check box element", () => {
    let val = "element added";
    cy.get("[data-testid=todocheckbox]").check()
    cy.get("[data-testid=todolist]").should("contain", val)
  })
})

describe('Testing For POST method', () => {
  it("Checking for POST", () => {
    let val = "chechbox added";
    cy.intercept("POST", "http://localhost:4040/todos", {
      statusCode: 201,
      body: {
        id: 20,
        value: val,
        isCompleted: true
      }
    }).as("posttodo")
  })

  // //////////////////////////    POST Method-1

  it("Checking for POST", () => {
    cy.visit('http://localhost:3000');
    let val = "chechbox added";
    cy.server();
    cy.route("POST", "http://localhost:4040/todos", {
      statusCode: 201,
      body: {
        id: 20,
        value: val,
        isCompleted: false
      }
    }).as("add")
    // cy.get("[data-testid=todoinput]").type(val).type("{enter}");
    cy.get("[data-testid=todoinput]").type(val);
    cy.get("[data-testid=todobutton]").click();

    cy.wait("@add")

    // cy.get("[data-testid=todolist]").should("contain",val)
    // cy.get("[data-testid=todocheckbox]").should("be.checked")
  })

  // //////////////////////////    POST Method-2

  it('error message when adding a new item on submit of form', () => {
    const val = "BUY MILK"
    cy.visit('http://localhost:3000');
    cy.server() // create a server
    cy.route({  // we can also pass a configuration or options into the route method
      url: 'http://localhost:4040/todos', // url
      status: 200, // status code
      method: 'POST', // method
      response: {} // empty response
    }).as("POSTSuccessful")
    cy.get("[data-testid=todoinput]").type(val);
    cy.get("[data-testid=todobutton]").click();

  })

  // //////////////////////////    POST Method-3

  it('error message when adding a new item on submit of form', () => {
    cy.server() // create a server
    cy.route({  // we can also pass a configuration or options into the route method
      url: 'http://localhost:4040/todos', // url
      status: 200, // status code
      method: 'POST', // method
      response: {} // empty response
    }).as("error")
    
    cy.visit('http://localhost:3000');
    let val = "new element added";
    cy.focused().should("have.id", "todoinput")
    cy.get("[data-testid=todoinput]").type(val);
    cy.get("[data-testid=todobutton]").click();

    // cy.get('.task-list li') // 
    //     .should('not.exist') // there should not be any task created

    // cy.get('.error')
    //     .should('be.visible')
  })
  

})