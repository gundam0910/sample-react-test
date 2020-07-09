import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitFor,
  screen
} from "@testing-library/react";
import "@testing-library/jest-dom";
import Click from "./Click";

afterEach(cleanup);

it("displays the count", () => {
  const { getByTestId } = render(<Click />);
  expect(getByTestId("count")).toHaveTextContent("0");
});

it("increments count", () => {
  const { getByTestId, getByText } = render(<Click />);
  fireEvent.click(getByText("Increase"));
  expect(getByTestId("count")).toHaveTextContent("1");
});

it("decrements count", async () => {
  const { getByTestId, getByText } = render(<Click />);
  fireEvent.click(getByText("Decrease"));

  expect(getByTestId("count")).toHaveTextContent("-1");
});