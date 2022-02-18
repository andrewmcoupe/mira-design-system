import React from "react";
import { render, fireEvent } from "@testing-library/react";
import StyledButton from "./Button";

describe("Pill", () => {
  it("should render the correct text", () => {
    const { getByText } = render(<StyledButton>Hello World</StyledButton>);
    expect(getByText("Hello World")).toBeInTheDocument();
  });

  it("should call the onClick handler", () => {
    const mockOnClickHandler = jest.fn();
    const { getByText } = render(
      <StyledButton onClick={mockOnClickHandler}>Hello World</StyledButton>
    );

    const button = getByText("Hello World");
    fireEvent.click(button);

    expect(mockOnClickHandler).toHaveBeenCalledTimes(1);
  });
});
