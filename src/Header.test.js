import React from "react";
import { render, cleanup } from "@testing-library/react";
import Header from "./Header";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Header text="Hello!" />);
  expect(asFragment()).toMatchSnapshot();
});