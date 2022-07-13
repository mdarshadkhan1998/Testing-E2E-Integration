const { describe, test, expect } =  require("@jest/globals");

const validate = require("../src/index")
describe("Validate Pasword", function (){
    test("All conditions satisfied",function(){
        expect(validate("aaaaaa1A").status).toBe(true)
        expect(validate("aaaaaa1A").message)
        .toBe("Correct Password")
    })
    test("Upper Case",function(){
        expect(validate("aaaaaaaa").status).toBe(false)
        expect(validate("aaaaaaaa").message)
        .toBe("at least 1 uppercase char is required")
    })
    test("Lower Case",function(){
        expect(validate("AAAA1AAA").status).toBe(false)
        expect(validate("AAAA1AAA").message)
        .toBe("at least 1 lowercase char is required")
    })
    test("Digit Case",function(){
        expect(validate("AAAaaAAA").status).toBe(false)
        expect(validate("AAAaaAAA").message)
        .toBe("at least 1 digit is required")
    })
    test("Length Case",function(){
        expect(validate("AAAAA1a").status).toBe(false)
        expect(validate("AAAAA1a").message)
        .toBe("at least 8 chars required")
    })
})


//both are used to run the specific test case
//xtest   
//test.only