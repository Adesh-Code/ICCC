import React from "react";
import SecurityCode from "./security-code";
import { render } from "@testing-library/react";

import { themeLight } from "@iccc/theme-mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const light = createTheme(themeLight);

const arrange = ({ ...otherProps } = {}) =>
  render(
    <ThemeProvider theme={light}>
      <SecurityCode
        value="123445"
        numInputs={6}
        onChange={jest.fn()}
        {...otherProps}
      />
    </ThemeProvider>
  );

describe("Security code component", () => {
  it("renders", () => {
    const { container } = arrange();
    expect(container).toMatchSnapshot();
  });

  it("renders in a disabled state", () => {
    const { container } = arrange({ disabled: true });
    expect(container.firstChild.firstChild).toHaveClass("Mui-disabled");
  });

  it("renders in an error state", () => {
    const { container } = arrange({ error: true });
    expect(container.firstChild.firstChild).toHaveClass(
      "DhigSecurityCode--error"
    );
  });

  it("renders a dense variant", () => {
    const { container } = arrange({ dense: true });
    expect(container.firstChild.firstChild).toHaveClass(
      "DhigSecurityCode--dense"
    );
  });
});
