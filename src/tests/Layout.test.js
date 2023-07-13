import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '../pages/Layout';
import Header from '../components/Header';

describe('The Layout component', () => {
  test('renders correctly into the DOM', () => {
    const component = renderer
      .create(
        <Layout>
          <Header />
          <main>
            <section id="home">
              <h1 className="page-title">Welcome to our page!</h1>
            </section>
          </main>
        </Layout>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
