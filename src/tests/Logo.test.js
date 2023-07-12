import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Logo from "../components/Logo";

describe("The Logo component", () => {

  test("renders correctly into the DOM", () => {
    const logoComponent = renderer
    .create(<Logo />)
    .toJSON();
    expect(logoComponent).toMatchSnapshot();
  });
  
  test("should display the text: Math Magicians", () => {
    const component = render(<Logo />);
    expect(component.container).toHaveTextContent("Math Magicians");
  });
  
  test("should display a Logo image", () => {
    const component = render(<Logo />);
    const image = component.container.querySelector("img");
    expect(image).toHaveAttribute("src", "mathLogo.gif");
    expect(image).toHaveAttribute("alt", "logo");
  });

});

