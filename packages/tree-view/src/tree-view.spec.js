import React from "react";
import { render } from "@testing-library/react";
import TreeView from "./tree-view.js";

import { themeLight } from "@iccc/theme-mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const light = createTheme(themeLight);

const arrange = ({ ...props }) =>
  render(
    <ThemeProvider theme={light}>
      <TreeView {...props} />
    </ThemeProvider>
  );
describe("Tree View component", () => {
  it("renders", () => {
    const { container } = arrange();
    expect(container).toMatchSnapshot();
  });
  it("accepts classnames", () => {
    const { container } = arrange({ className: "test-classname" });
    expect(container.firstChild).toHaveClass("test-classname");
  });
});
