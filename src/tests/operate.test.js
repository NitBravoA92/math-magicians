import operate from "../logic/operate";

describe("The operate function", () => {

  test("returns the string '0', when we pass the numbers 25 and 25, and the subtraction operator ('-')", () => {
    const numberOne = 25;
    const numberTwo = 25;
    const operation = "-";

    const result = operate(numberOne, numberTwo, operation);
    
    expect(result).toBe("0");
  });

  test("returns the string '10', when we pass the numbers 7 and 3, and the addition operator ('+')", () => {
    const numberOne = 7;
    const numberTwo = 3;
    const operation = "+";

    const result = operate(numberOne, numberTwo, operation);
    
    expect(result).toBe("10");
  });


  test("returns the string '36', when we pass the numbers 4 and 9, and the multiplication operator ('x')", () => {
    const numberOne = 4;
    const numberTwo = 9;
    const operation = "x";

    const result = operate(numberOne, numberTwo, operation);
    
    expect(result).toBe("36");
  });

  test("returns the string '4', when we pass the numbers 16 and 4, and the division operator ('÷')", () => {
    const numberOne = 16;
    const numberTwo = 4;
    const operation = "÷";

    const result = operate(numberOne, numberTwo, operation);
    
    expect(result).toBe("4");
  });

  test("returns the string Can't divide by 0. when we pass the numbers 345 and 0, and the division operator ('÷')", () => {
    const numberOne = 345;
    const numberTwo = 0;
    const operation = "÷";

    const result = operate(numberOne, numberTwo, operation);
    
    expect(result).toBe("Can't divide by 0.");
  });

  test("returns the string '1'. when we pass the numbers 120 and 7, and the residue operator ('%')", () => {
    const numberOne = 120;
    const numberTwo = 7;
    const operation = "%";

    const result = operate(numberOne, numberTwo, operation);
    
    expect(result).toBe("1");
  });

  test("returns the string Can't find modulo as can't divide by 0. when we pass the numbers 720 and 0, and the residue operator ('%')", () => {
    const numberOne = 720;
    const numberTwo = 0;
    const operation = "%";

    const result = operate(numberOne, numberTwo, operation);
    
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

});