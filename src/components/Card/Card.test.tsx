import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import { Button } from "../";

describe("Card", () => {
  it("should render the correct title", () => {
    const { getByText } = render(<Card>Test title</Card>);
    expect(getByText("Test title")).toBeInTheDocument();
  });

  it("should render the correct card body text", () => {
    const { getByText } = render(
      <Card>
        <Card.Body>Card body text</Card.Body>
      </Card>
    );

    expect(getByText("Card body text")).toBeInTheDocument();
  });

  it("should render the correct footer children", () => {
    const { getAllByRole, getByText } = render(
      <Card>
        <Card.Body>Card body text</Card.Body>
        <Card.Footer>
          <Button>Save</Button>
          <Button>Cancel</Button>
        </Card.Footer>
      </Card>
    );

    expect(getAllByRole("button")).toHaveLength(2);
    expect(getByText("Save")).toBeInTheDocument();
    expect(getByText("Cancel")).toBeInTheDocument();
  });
});
