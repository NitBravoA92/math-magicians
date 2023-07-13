import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Navigation from '../components/Navigation';

describe('The Navigation component', () => {
  test('renders correctly into the DOM', () => {
    const component = renderer
      .create(<Navigation />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should render 3 links with the titles: Home, Calculator, Quote', () => {
    const component = render(<Navigation />);

    const links = component.container.querySelectorAll('a');

    expect(links.length).toBe(3);

    expect(component.container).toHaveTextContent('Home');
    expect(component.container).toHaveTextContent('Calculator');
    expect(component.container).toHaveTextContent('Quote');
  });
});
