import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Home from "../pages/Home";

describe("The Home component", () => {

  test("renders correctly into the DOM", () => {
    const component = renderer
    .create(<Home />)
    .toJSON();
    expect(component).toMatchSnapshot();
  });

  test("should render the text: Welcome to our page!", () => {
    const component = render(<Home />);

    expect(component.container).toHaveTextContent("Welcome to our page!");
  });
  
  test("should render 2 paragraphs elements", () => {
    const component = render(<Home />);

    const paragraphs = component.container.querySelectorAll("p");
    
    expect(paragraphs.length).toBe(2);
  });

});
