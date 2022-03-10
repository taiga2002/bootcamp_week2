import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "../PageComponents/App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn chakra/i);
  expect(linkElement).toBeInTheDocument();
});
