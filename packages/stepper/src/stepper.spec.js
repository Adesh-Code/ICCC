import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { render } from "@testing-library/react";
import { StepIconComponent } from ".";
import { themeLight } from "@iccc/theme-mui";
import "@testing-library/jest-dom";

const light = createTheme(themeLight);

const arrange = ({ ...props }) =>
  render(
    <ThemeProvider theme={light}>
      <StepIconComponent {...props} />
    </ThemeProvider>
  );

describe("Step icon component", () => {
  it("renders an error icon", () => {
    const { container } = arrange({ error: true });
    expect(container).toMatchSnapshot();
  });
  it("renders an error icon even if other props are provided", () => {
    const { container } = arrange({ completed: true, error: true });
    expect(container).toMatchSnapshot();
  });
  it("renders a completed icon", () => {
    const { container } = arrange({ completed: true });
    expect(container).toMatchSnapshot();
  });
  it("renders an incomplete icon", () => {
    const { container } = arrange({ icon: null });
    expect(container).toMatchSnapshot();
  });
  it("renders a numeric incomplete icon", () => {
    const { container } = arrange({ icon: 1 });
    expect(container).toMatchSnapshot();
  });
  it("renders an active incomplete icon", () => {
    const { container } = arrange({ active: true });
    expect(container).toMatchSnapshot();
  });
  it("renders an active numeric incomplete icon", () => {
    const { container } = arrange({ active: true, icon: 1 });
    expect(container).toMatchSnapshot();
  });
});
