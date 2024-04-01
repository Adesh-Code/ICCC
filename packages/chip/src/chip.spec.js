import React from "react";
import { render, screen } from "@testing-library/react";
import Chip from "./chip";

import { themeLight } from "@iccc/theme-mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const light = createTheme(themeLight);

const arrange = ({ label = "Chip", ...otherProps } = {}) =>
  render(
    <ThemeProvider theme={light}>
      <Chip label={label} {...otherProps} />
    </ThemeProvider>
  );

describe("Chip", () => {
  it("renders", () => {
    const { container } = arrange();
    expect(container).toMatchSnapshot();
  });

  it("should render selected state via prop", () => {
    arrange({ selected: true });
    const chip = screen.getByText("Chip").parentElement;
    expect(chip).toHaveClass("DhigChip--selected");
  });

  it("accepts classnames", () => {
    arrange({ className: "foo" });
    const chip = screen.getByText("Chip").parentElement;
    expect(chip).toHaveClass("foo");
  });

  it("should render disabled state via prop", () => {
    arrange({ disabled: true });
    const chip = screen.getByText("Chip").parentElement;
    expect(chip).toHaveClass("Mui-disabled");
  });
});
