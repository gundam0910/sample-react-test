import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "./Header";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Header title="Hello!" />);
  expect(asFragment()).toMatchSnapshot();
});

it("inserts title in h1", () => {
  const { getByTestId, getByText } = render(<Header title="Hello!" />);

  expect(getByTestId("h1tag")).toHaveTextContent("Hello!");
  expect(getByText("Hello!")).toHaveClass("sample");
});