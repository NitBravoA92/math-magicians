import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Calculator from '../pages/Calculator';

describe('The Calculator component', () => {
  test('renders correctly into the DOM', () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <Calculator />
        </MemoryRouter>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test("should render the text: Let's do some math!", () => {
    const component = render(
      <MemoryRouter>
        <Calculator />
      </MemoryRouter>,
    );

    expect(component.container).toHaveTextContent("Let's do some math!");
  });

  test("should render the CalculatorApp with 19 buttons and displays the value '0' as default", () => {
    const component = render(
      <MemoryRouter>
        <Calculator />
      </MemoryRouter>,
    );

    const calculatorContainer = component.container.querySelector('#calculator-app');
    const calculatorButtons = component.container.querySelectorAll('button');
    const displayResult = component.container.querySelector('.final-result');

    expect(calculatorContainer).toBeInTheDocument();
    expect(calculatorButtons.length).toBe(19);
    expect(displayResult.textContent).toBe('  0 ');
  });
});
