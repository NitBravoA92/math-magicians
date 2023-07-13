import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

describe('The Header component', () => {
  test('renders correctly into the DOM', () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <Header>
            <Logo />
            <Navigation />
          </Header>
          ,
        </MemoryRouter>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test("should render an '<a>' element with the class 'logo-container' and a '<nav>' element for the navigation links", () => {
    const component = render(
      <MemoryRouter>
        <Header>
          <Logo />
          <Navigation />
        </Header>
        ,
      </MemoryRouter>,
    );

    const navbar = component.container.querySelector('nav');
    const logoLink = component.container.querySelector('.logo-container');

    expect(navbar).toBeInTheDocument();
    expect(logoLink).toBeInTheDocument();
  });
});
