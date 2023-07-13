import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Quote from '../pages/Quote';

describe('The Quote component', () => {
  test('renders correctly into the DOM', () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <Quote />
        </MemoryRouter>,
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  test("display the message 'Loading Quote...'", () => {
    const component = render(
      <MemoryRouter>
        <Quote />
      </MemoryRouter>,
    );

    expect(component.container).toHaveTextContent('Loading Quote...');
  });

  test('should render the QuoteItem component', () => {
    const component = render(
      <MemoryRouter>
        <Quote />
      </MemoryRouter>,
    );

    const quoteContainer = component.container.querySelector('#display-quote');

    expect(quoteContainer).toBeInTheDocument();
  });

  test("shouldn't display an error message in the first rendered", () => {
    const component = render(
      <MemoryRouter>
        <Quote />
      </MemoryRouter>,
    );

    const errorMessageContainer = component.container.querySelector('#error-message');

    expect(errorMessageContainer).toHaveClass('d-none');
  });
});
