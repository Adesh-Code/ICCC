import React from "react";
import { render } from "@testing-library/react";
import { AlertIcon } from ".";

import { themeLight } from "@iccc/theme-mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const light = createTheme(themeLight);

const arrange = ({ ...AlertIconProps }) =>
  render(
    <ThemeProvider theme={light}>
      <AlertIcon {...AlertIconProps} />
    </ThemeProvider>
  );

describe("Alert Icon component", () => {
  describe("when using a filled variant", () => {
    it("renders an error icon", () => {
      const { container } = arrange({ severity: "error", variant: "filled" });
      expect(container).toMatchSnapshot();
    });
    it("renders an info icon", () => {
      const { container } = arrange({ severity: "info", variant: "filled" });
      expect(container).toMatchSnapshot();
    });
    it("renders a success icon", () => {
      const { container } = arrange({ severity: "success", variant: "filled" });
      expect(container).toMatchSnapshot();
    });
    it("renders a warning icon", () => {
      const { container } = arrange({ severity: "warning", variant: "filled" });
      expect(container).toMatchSnapshot();
    });
    it("renders the default icon", () => {
      const { container } = arrange({ severity: null, variant: "filled" });
      expect(container).toMatchSnapshot();
    });
  });

  describe("when using a standard variant", () => {
    it("renders an error icon", () => {
      const { container } = arrange({ severity: "error", variant: "standard" });
      expect(container).toMatchSnapshot();
    });
    it("renders an info icon", () => {
      const { container } = arrange({ severity: "info", variant: "standard" });
      expect(container).toMatchSnapshot();
    });
    it("renders a success icon", () => {
      const { container } = arrange({
        severity: "success",
        variant: "standard"
      });
      expect(container).toMatchSnapshot();
    });
    it("renders a warning icon", () => {
      const { container } = arrange({
        severity: "warning",
        variant: "standard"
      });
      expect(container).toMatchSnapshot();
    });
    it("renders the default icon", () => {
      const { container } = arrange({ severity: null, variant: "standard" });
      expect(container).toMatchSnapshot();
    });
  });

  describe("when using a outlined variant", () => {
    it("renders an error icon", () => {
      const { container } = arrange({ severity: "error", variant: "outlined" });
      expect(container).toMatchSnapshot();
    });
    it("renders an info icon", () => {
      const { container } = arrange({ severity: "info", variant: "outlined" });
      expect(container).toMatchSnapshot();
    });
    it("renders a success icon", () => {
      const { container } = arrange({
        severity: "success",
        variant: "outlined"
      });
      expect(container).toMatchSnapshot();
    });
    it("renders a warning icon", () => {
      const { container } = arrange({
        severity: "warning",
        variant: "outlined"
      });
      expect(container).toMatchSnapshot();
    });
    it("renders the default icon", () => {
      const { container } = arrange({ severity: null, variant: "outlined" });
      expect(container).toMatchSnapshot();
    });
  });
});
