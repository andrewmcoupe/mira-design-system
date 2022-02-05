import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Badge from "./Badge";

describe("Pill", () => {
  it("should render the correct text", () => {
    const { getByText } = render(<Badge>Hello World</Badge>);
    expect(getByText("Hello World")).toBeInTheDocument();
  });
});
