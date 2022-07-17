import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/Counter';

describe("testing sample render",()=>{
    it('Testing if rendering or not', () => {
        render(<Counter />);
        expect(1).toBe(1)    
    });
})

describe("If Count Val is 0 && check if ID exist or not",()=>{ 
    it('Testing if element exist or not', () => {
        render(<Counter />);
        expect(screen.getByTestId("count-value")).toHaveTextContent(0); 
        expect(screen.getByTestId("count-value")).toBeInTheDocument(); 
        expect(screen.getByTestId("decrement")).toBeInTheDocument();    
        expect(screen.getByTestId("increment")).toBeInTheDocument();    
    });
})

//For calling render in before each we need to keep render in a function and we need to directly call that function in that render function before each function 
const setup = () => {
    render(<Counter />);
}
describe("Test Component render",()=>{ 
    beforeEach(()=>{
        setup()
    })

    it('Testing if exist or not', () => {
        let counterValue = screen.getByTestId("count-value");
        // console.log(counterValue)
        expect(counterValue).toHaveTextContent(0);    
    });
    it('Testing if element exist or not', () => {
        // render(<Counter />);
        expect(screen.getByTestId("count-value")).toHaveTextContent(0); 
        expect(screen.getByTestId("count-value")).toBeInTheDocument(); 
        expect(screen.getByTestId("decrement")).toBeInTheDocument();    
        expect(screen.getByTestId("increment")).toBeInTheDocument();    
    });
})

describe("Checking for buttons of counter",()=>{
    it('Should have button with - sign', () => {
        render(<Counter />);
        let IncButton = screen.getByTestId("increment");
        expect(IncButton).toHaveTextContent("ADD");    
    });
    
    it('Should have button with + sign', () => {
        render(<Counter />);
        let DecButton = screen.getByTestId("decrement");
        expect(DecButton).toHaveTextContent("REDUCE");    
    });
})

describe("Checking if count inceased by 1",()=>{
    it("Testing cout increase by 1",()=>{
        render(<Counter />);
        let IncButton = screen.getByTestId("increment");
        fireEvent.click(IncButton);
        expect(screen.getByTestId("count-value")).toHaveTextContent(1);       
    })

    it("Testing cout increase to 5 and then decrease to 2",()=>{
        render(<Counter />);
        let IncButton = screen.getByTestId("increment");
        let DecButton = screen.getByTestId("decrement")
        fireEvent.click(IncButton);
        fireEvent.click(IncButton);
        fireEvent.click(IncButton);
        fireEvent.click(IncButton);
        fireEvent.click(IncButton);
        expect(screen.getByTestId("count-value")).toHaveTextContent(5); 
        fireEvent.click(DecButton);
        fireEvent.click(DecButton);      
        fireEvent.click(DecButton);
        expect(screen.getByTestId("count-value")).toHaveTextContent(2);
        expect(screen.getByTestId("count-value")).not.toHaveTextContent(1);  
    })

    it("Testing cout decrease to -5",()=>{
        render(<Counter />);
        let IncButton = screen.getByTestId("increment");
        let DecButton = screen.getByTestId("decrement")
        fireEvent.click(DecButton);
        fireEvent.click(IncButton);
        fireEvent.click(DecButton);
        fireEvent.click(DecButton);
        fireEvent.click(DecButton);
        fireEvent.click(DecButton);
        //Method-1
        expect(screen.getByTestId("count-value").textContent).toBe("Count: -4"); 
        //Method-2
        expect(screen.getByTestId("count-value")).toHaveTextContent("Count: -4"); 
    })
})


let imp = [1,2,3]
describe("Testing new component",()=>{
    it('inputbox1',()=>{
        render(<input data-testid="inputbox" placeholder='Sample textbox for testing'/>)
    })
    it('inputbox2',()=>{
        render(<input data-testid="inputbox"/>)
    })
    it('inputbox3',()=>{
        render(<input data-testid="inputbox" arsh1 = {imp}/>)
        // imp = [1,2,3]
    })
})