// ---String Matchers --- 
test("there is pool in Liverpool",() => {
    expect("Liverpool").toMatch(/pool/);
})

// ---NumberType Matchers --- 
const multiply = require("./multiply")

describe("test positive scenarios",() =>{
    test("multiply 5*9 should equal to 45",() =>{
        expect(multiply(5,9)).toBe(45);
        expect(multiply(5,9)).toBeGreaterThan(40);
        expect(multiply(5,9)).toBeLessThan(50);
        expect(multiply(5,9)).toBeLessThanOrEqual(46);
    });
})

// ---Truthiness Matchers ---
test("null", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

const carStock = [
    "BMW",
    "Mercedes",
    "Ferrari",
    "Toyota",
];

test("the car stock list has a ferrari", () => {
    expect(carStock).toContain("Ferrari")
})

//Perfect
//Perfect Mac
