import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import CalculatorButton from '../components/CalculatorButton';

describe('The CalculatorButton component', () => {
  test('renders correctly into the DOM', () => {
    const operations = (name) => name;
    const name = '5';

    const component = renderer
      .create(<CalculatorButton name={name} classes={['btn-gray']} interactivity={() => { operations(name); }} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  test('should render a button with the text: 1', () => {
    const buttonOne = render(<CalculatorButton name="1" classes={['btn-gray']} interactivity={() => {}} />);

    expect(buttonOne.container).toHaveTextContent('1');
  });

  test('should render a button with the text: ÷', () => {
    const buttonDivider = render(<CalculatorButton name="÷" classes={['btn-orange']} interactivity={() => {}} />);

    expect(buttonDivider.container).toHaveTextContent('÷');
  });

  test('should render a button with the text: AC', () => {
    const buttonAC = render(<CalculatorButton name="AC" classes={['btn-gray']} interactivity={() => {}} />);

    expect(buttonAC.container).toHaveTextContent('AC');
  });

  test('should render a button with the text: 9', () => {
    const buttonNine = render(<CalculatorButton name="9" classes={['btn-gray']} interactivity={() => {}} />);

    expect(buttonNine.container).toHaveTextContent('9');
  });
});
