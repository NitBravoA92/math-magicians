import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';

describe('The Home component', () => {
  test('renders correctly into the DOM', () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <Home />
        </MemoryRouter>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should render the text: Welcome to our page!', () => {
    const component = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    expect(component.container).toHaveTextContent('Welcome to our page!');
  });

  test('should render 2 paragraphs elements', () => {
    const component = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const paragraphs = component.container.querySelectorAll('p');

    expect(paragraphs.length).toBe(2);
  });
});
