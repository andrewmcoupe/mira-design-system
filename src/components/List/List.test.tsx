import List from "./List";
import { screen, render } from "@testing-library/react";
import Select from "../Select/Select";
import React from "react";

describe("List", () => {
  it("should throw an error if list item elements are not used as children", () => {
    const ErroredList = () =>
      render(
        <List>
          <p>Cry me an error</p>
        </List>
      );

    expect(ErroredList).toThrowError('List children must be of type "li"');
  });

  it("should render children successfully", () => {
    render(
      <List>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </List>
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });
});
