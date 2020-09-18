const multiply = require("./multiply")

describe("test negative multiply",() =>{
    test("multiply 5*9 should not equal to 50",() =>{
        expect(multiply(5,9)).not.toBe(50);
    });
})

const multiply2 = require("./multiply")

describe("test positive multiply",() =>{
    test("multiply 5*9 should equal to 45",() =>{
        expect(multiply2(5,9)).toBe(45);
    });
})

//Matchers are like .toBe or .toEqual
test("object creation", () => {
    const data = {first: 1};
    data['second'] = 2;
    expect(data).toEqual({first: 1, second: 2});
   });
 
