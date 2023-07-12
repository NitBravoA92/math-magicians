import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from "@testing-library/react";
import renderer from 'react-test-renderer';
import QuoteItem from "../components/QuoteItem";

describe("The QuoteItem component", () => {

  test("renders correctly into the DOM", () => {
    const component = renderer.create(<QuoteItem />).toJSON();

    expect(component).toMatchSnapshot();
  });

  test("display the message 'Loading Quote...' when the API request is processing", () => {
    const component = render(<QuoteItem />);

    const loadingMessageParagraph = component.container.querySelector("#loading-message");

    expect(loadingMessageParagraph).toBeInTheDocument();
    expect(loadingMessageParagraph).toHaveTextContent("Loading Quote...");
  });

});
