import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import NavigationLink from '../components/NavigationLink';

describe('The NavigationLink component', () => {
  test('renders correctly into the DOM', () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <NavigationLink title="Calculator" route="/calculator" />
        </MemoryRouter>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  describe("should render an '<a>' element with", () => {
    test("the text 'Home' and a link pointing to the Home page, when the props: title='Home' and route='/'", () => {
      const componentForHome = render(
        <MemoryRouter>
          <NavigationLink title="Home" route="/" />
        </MemoryRouter>,
      );

      const link = componentForHome.container.querySelector('a');

      expect(componentForHome.container).toHaveTextContent('Home');
      expect(link).toHaveAttribute('href', '/');
    });

    test("the text 'Calculator' and a link pointing to the Calculator page, when the props: title='Calculator' and route='/calculator'", () => {
      const componentForCalculator = render(
        <MemoryRouter>
          <NavigationLink title="Calculator" route="/calculator" />
        </MemoryRouter>,
      );

      const link = componentForCalculator.container.querySelector('a');

      expect(componentForCalculator.container).toHaveTextContent('Calculator');
      expect(link).toHaveAttribute('href', '/calculator');
    });

    test("the text 'Quote' and a link pointing to the Quote page, when the props: title='Quote' and route='/quote'", () => {
      const componentForQuote = render(
        <MemoryRouter>
          <NavigationLink title="Quote" route="/quote" />
        </MemoryRouter>,
      );

      const link = componentForQuote.container.querySelector('a');

      expect(componentForQuote.container).toHaveTextContent('Quote');
      expect(link).toHaveAttribute('href', '/quote');
    });
  });
});
