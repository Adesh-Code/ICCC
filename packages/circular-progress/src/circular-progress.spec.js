import React from "react";
import CircularProgress from "./circular-progress";
import { createSerializer, matchers } from "@emotion/jest";
import { screen, render } from "@testing-library/react";

import { themeLight } from "@iccc/theme-mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const light = createTheme(themeLight);

expect.extend(matchers);
expect.addSnapshotSerializer(createSerializer({ includeStyles: false }));

const arrange = (args) => {
  return render(
    <ThemeProvider theme={light}>
      <CircularProgress {...args} />
    </ThemeProvider>
  );
};

describe("Circular progress", () => {
  it("renders a circular progress", () => {
    const { container } = arrange();
    expect(container).toMatchSnapshot();
  });

  it("renders in medium size", () => {
    arrange({ size: "medium" });
    const progress = screen.getAllByRole("progressbar")[0];
    expect(progress).toHaveClass("DhigCircularProgress--size--medium");
  });

  it("renders in large size", () => {
    arrange({ size: "large" });
    const progress = screen.getAllByRole("progressbar")[0];
    expect(progress).toHaveClass("DhigCircularProgress--size--large");
  });

  it("renders in large size with label", () => {
    const { container } = arrange({ label: "Label", size: "large" });
    const progress = screen.getAllByRole("progressbar")[0];
    expect(progress).toHaveClass("DhigCircularProgress--size--large");
    expect(container).toHaveTextContent("Label");
  });

  it("renders in large size with percentage label", () => {
    const { container } = arrange({
      size: "large",
      variant: "determinate",
      value: 95
    });
    const progress = screen.getAllByRole("progressbar")[0];
    expect(progress).toHaveClass("DhigCircularProgress--size--large");
    expect(container).toHaveTextContent("95%");
  });

  it("renders in medium size with percentage label", () => {
    const { container } = arrange({
      size: "medium",
      variant: "determinate",
      value: 64
    });
    const progress = screen.getAllByRole("progressbar")[0];
    expect(progress).toHaveClass("DhigCircularProgress--size--medium");
    expect(container).toHaveTextContent("64%");
  });

  it("renders in small size with percentage label", () => {
    const { container } = arrange({
      size: "small",
      variant: "determinate",
      value: 48
    });
    const progress = screen.getAllByRole("progressbar")[0];
    expect(progress).toHaveClass("DhigCircularProgress--size--small");
    expect(container).toHaveTextContent("48%");
  });

  it("renders in x-small size with percentage label", () => {
    const { container } = arrange({
      label: "X-small determinate",
      size: "x-small",
      variant: "determinate",
      value: 10
    });
    const progress = screen.getAllByRole("progressbar")[0];
    expect(progress).toHaveClass("DhigCircularProgress--size--x-small");
    expect(container).toHaveTextContent("X-small determinate");
  });

  it("accepts classnames", () => {
    arrange({
      className: "foo"
    });
    const progress = screen.getAllByRole("progressbar")[0];
    expect(progress).toHaveClass("foo");
  });
});
