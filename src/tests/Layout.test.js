import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Layout from '../pages/Layout';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

describe('The Layout component', () => {
  test('renders correctly into the DOM', () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <Layout>
            <Header>
              <Logo />
              <Navigation />
            </Header>
            ,
            <main>
              <section id="home">
                <h1 className="page-title">Welcome to our page!</h1>
              </section>
            </main>
          </Layout>
        </MemoryRouter>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
