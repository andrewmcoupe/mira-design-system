import React from "react";
import { render, fireEvent, act, waitFor } from "@testing-library/react";
import ProgressButton from "./ProgressButton";

beforeEach(() => {
  // Reset timers after each test as we manually advance the timer
  jest.useFakeTimers();
});

describe("ProgressButton", () => {
  it("should animate the child div into the correct position on mouse down", () => {
    const { getByTestId, getByRole } = render(
      <ProgressButton progressColor={"red"} variant={"blue"} />
    );

    const animationDiv = getByTestId("animated-div");
    const button = getByRole("button");

    act(() => {
      fireEvent.mouseDown(button);
      jest.advanceTimersByTime(2000);
    });

    expect(
      window.getComputedStyle(animationDiv).getPropertyValue("transform")
    ).toBe("translateX(0%) translateZ(0)");
  });

  it("should animate back to its initial position on mouse up", () => {
    const { getByTestId, getByRole } = render(
      <ProgressButton progressColor={"red"} variant={"blue"} />
    );

    const animationDiv = getByTestId("animated-div");
    const button = getByRole("button");

    // Mouse down on the button until animation is complete
    act(() => {
      fireEvent.mouseDown(button);
      jest.advanceTimersByTime(2000);

      // assert that the animation is in its correct position
      expect(
        window.getComputedStyle(animationDiv).getPropertyValue("transform")
      ).toBe("translateX(0%) translateZ(0)");
    });

    // Mouse up on the button until animation is back to initial position
    act(() => {
      fireEvent.mouseUp(button);
      jest.advanceTimersByTime(2000);
    });

    expect(
      window.getComputedStyle(animationDiv).getPropertyValue("transform")
    ).toBe("translateX(-101%) translateZ(0)");
  });

  it("should invoke onProgressComplete when animation has completed", () => {
    const mockOnProgressComplete = jest.fn();
    const { getByRole } = render(
      <ProgressButton
        progressColor={"red"}
        variant={"blue"}
        onProgressComplete={mockOnProgressComplete}
      />
    );

    const button = getByRole("button");

    act(() => {
      fireEvent.mouseDown(button);
      jest.advanceTimersByTime(2000);
    });

    expect(mockOnProgressComplete).toHaveBeenCalledTimes(1);
  });
});
