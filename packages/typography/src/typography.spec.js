// Libraries
import React from "react";

// Components
import Typography from "./typography";
import { themeLight, themeDark } from "@iccc/theme-mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Test Utilities
import { render, screen } from "@testing-library/react";
import { matchers } from "@emotion/jest";

expect.extend(matchers);

const light = createTheme(themeLight);
const dark = createTheme(themeDark);

const arrange = (options) => {
  const args = {
    children: "Lorem ipsum",
    ...options
  };

  return render(
    <ThemeProvider theme={light}>
      <Typography {...args} />
    </ThemeProvider>
  );
};

describe("Typography component", () => {
  beforeEach(() => {
    // eslint-disable-next-line no-console
    console.error = jest.fn((error) => {
      throw new Error(error);
    });
  });

  it("exposes internal paragraph DOM node", () => {
    // Arrange
    const ref = React.createRef();
    arrange({ ref });

    // Assert
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement);
  });

  it("renders with body-copy-medium variant by default", () => {
    arrange();
    const typography = screen.getByText("Lorem ipsum");
    expect(typography).toHaveStyleRule(
      "font-family",
      "ArtifaktElement,Arial,sans-serif"
    );
    expect(typography).toHaveStyleRule("font-size", /(1rem)/i);
    expect(typography).toHaveStyleRule("font-weight", "400");
    expect(typography).toHaveStyleRule("line-height", "1.5");
    expect(typography).toMatchSnapshot();
  });

  it("renders with different variants", () => {
    arrange({
      variant: "display-extra"
    });
    const typography = screen.getByText("Lorem ipsum");
    expect(typography).toHaveStyleRule("font-family", "ArtifaktLegend");
    expect(typography).toHaveStyleRule("font-size", /(clamp)/i);
    expect(typography).toHaveStyleRule("font-weight", "800");
    expect(typography).toHaveStyleRule("line-height", "1.2");
    expect(typography).toMatchSnapshot();
  });

  it("accepts classnames", () => {
    arrange({
      className: "bar"
    });
    const typography = screen.getByText("Lorem ipsum");
    expect(typography).toHaveClass("bar");
  });

  it("renders with tabular numeric", () => {
    arrange({
      tabularNumeric: true
    });
    const typography = screen.getByText("Lorem ipsum");
    expect(typography).toHaveStyleRule("font-variant-numeric", "tabular-nums");
  });

  it("uses the color prop to handle color", () => {
    arrange({
      color: "ink-error"
    });
    const typography = screen.getByText("Lorem ipsum");
    expect(typography).toHaveStyle("color: rgb(195, 73, 34)");
  });

  it("handles color correctly in dark theme", () => {
    render(
      <ThemeProvider theme={dark}>
        <Typography color="ink-error">Lorem ipsum</Typography>
      </ThemeProvider>
    );

    const typography = screen.getByText("Lorem ipsum");
    expect(typography).toHaveStyle("color: rgb(217, 85, 41)");
  });
});
