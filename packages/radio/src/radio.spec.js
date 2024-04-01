import React from "react";
import Radio from "./radio";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Radio", () => {
  it("renders unchecked", () => {
    render(<Radio />);
  });

  it("renders checked", () => {
    render(<Radio checked />);
  });
});
