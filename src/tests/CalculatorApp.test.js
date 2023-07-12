import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import CalculatorApp from "../components/CalculatorApp";

describe("The CalculatorApp component", () => {
  test("renders correctly into the DOM", () => {
    const component = renderer.create(<CalculatorApp />).toJSON();

    expect(component).toMatchSnapshot();
  });

  test("displays the value 0 when first rendered", () => {
    const component = render(<CalculatorApp />);

    const displayResult = component.container.querySelector(".final-result");

    expect(displayResult).toHaveTextContent("0");
  });

  test("renders the nineteen buttons of the calculator", () => {
    const component = render(<CalculatorApp />);

    const buttons = component.container.querySelectorAll("button");

    expect(buttons.length).toBe(19);
  });
});

// buttons interactions
describe("The CalculatorApp component displays", () => {

  test("the result '0' in the '.final-result' box when user clicks on the button AC", () => {

    const component = render(<CalculatorApp />);

    const buttons = component.container.querySelectorAll("button");
    const buttonNine = buttons[6]; // Button: 9
    const buttonFour = buttons[8]; // Button: 4
    const buttonAC = buttons[0]; // Button: AC

    fireEvent.click(buttonNine); // Detect click on button 9
    fireEvent.click(buttonFour); // Detect click on button 4
    fireEvent.click(buttonAC); // Detect click on button AC

    const displayResult = component.container.querySelector(".final-result");

    expect(displayResult.textContent).toBe("  0 ");
  });

  test("the result '1' in the '.final-result' box when user clicks on the button 1", () => {

    const component = render(<CalculatorApp />);

    const buttons = component.container.querySelectorAll("button");
    const buttonOne = buttons[12]; // Button: 1

    fireEvent.click(buttonOne); // Detect click on button 1

    const displayResult = component.container.querySelector(".final-result");

    expect(displayResult.textContent).toBe("  1 ");
  });

  test("the result '15' in the '.final-result' box when user clicks on the buttons 7, +, 8, =", () => {

    const component = render(<CalculatorApp />);

    const buttons = component.container.querySelectorAll("button");
    const buttonSeven = buttons[4]; // Button: 7
    const buttonPlus = buttons[15]; // Button: +
    const buttonEight = buttons[5]; // Button: 8
    const buttonEqual = buttons[18]; // Button: =

    fireEvent.click(buttonSeven); // Detect click on button 7
    fireEvent.click(buttonPlus); // Detect click on button +
    fireEvent.click(buttonEight); // Detect click on button 8
    fireEvent.click(buttonEqual); // Detect click on button =

    const displayResult = component.container.querySelector(".final-result");

    expect(displayResult.textContent).toBe("15   ");
  });

  test("the result '0.5 x 2' in the '.final-result' box when user clicks on the buttons 0, ., 5, x, 2", () => {

    const component = render(<CalculatorApp />);

    const buttons = component.container.querySelectorAll("button");
    const buttonZero = buttons[16]; // Button: 0
    const buttonDot = buttons[17]; // Button: .
    const buttonFive = buttons[9]; // Button: 5
    const buttonMultiply = buttons[7]; // Button: x
    const buttonTwo = buttons[13]; // Button: 2

    fireEvent.click(buttonZero); // Detect click on button 0
    fireEvent.click(buttonDot); // Detect click on button .
    fireEvent.click(buttonFive); // Detect click on button 5
    fireEvent.click(buttonMultiply); // Detect click on button x
    fireEvent.click(buttonTwo); // Detect click on button 2

    const displayResult = component.container.querySelector(".final-result");

    expect(displayResult.textContent).toBe("0.5 x 2 ");
  });

});
