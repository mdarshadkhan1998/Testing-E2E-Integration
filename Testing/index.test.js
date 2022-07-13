// import { test, expect } from "@jest/globals"
// import sum from "./index"
const { sum,multiply} = require("./index")
const {test} = require("@jest/globals");
const { describe } = require("yargs");
const { expect } = require("expect");

// both of these are same 1st one was with js and 2nd one was from node.js(old script)
// import { test } from "@jest/globals"
// const {test} = require("@jest/globals")

// 1 unit of test
test("Should Work on all positive number", function (){
    //Assertions
    //LHS : your part
    //RHS : expected part
    expect(sum(2,2)).toBe(4);
    expect(sum(100,0)).toBe(100);
    expect(sum(0,0)).toBe(0);
})

test("Should Work on all negative number", function (){
    expect(sum(-2,-2)).toBe(-4);
    expect(sum(-100,0)).toBe(-100);
    expect(sum(-2,2)).toBe(0);

})

describe("Test Sum function with characters", function(){
    test("Should add to characters", function (){
        expect(sum("a", "b")).toBe("ab")
    })
})

describe("Test Sum function should not work with characters", function(){
    test("Should add to characters", function (){
        expect(sum("a", "b")).toBeUndefined()
        expect(sum( a , "b")).toBeUndefined()
        expect(sum("a",  b )).toBeUndefined()
    })
})

//multiply
test("Should Work on all positive number", function (){
    expect(multiply(2,2)).toBe(4);
    expect(multiply(100,0)).toBe(0);
    expect(multiply(0,0)).toBe(0);

})