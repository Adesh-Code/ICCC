import React from "react";
import { render } from "@testing-library/react";
import Accordion from "./accordion";
import Typography from "@iccc/typography";

import { themeLight } from "@iccc/theme-mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const light = createTheme(themeLight);

const arrange = ({ ...otherProps } = {}) =>
  render(
    <ThemeProvider theme={light}>
      <Accordion {...otherProps}>
        <Typography className="dhig-m-0">Accordion content</Typography>
      </Accordion>
    </ThemeProvider>
  );

describe("Accordion", () => {
  it("mounts an accordion", () => {
    const { container } = arrange();
    expect(container).toMatchSnapshot();
  });

  it("renders the dense variant", () => {
    const { container } = arrange({ dense: true });
    const accordion = container.firstChild;
    expect(accordion).toHaveClass("DhigAccordion--density--dense");
  });

  it("renders the minimal variant", () => {
    const { container } = arrange({ variant: "minimal" });
    const accordion = container.firstChild;
    expect(accordion).toHaveClass("DhigAccordion--variant--minimal");
  });

  it("renders the normal variant using the 'size' prop", () => {
    const { container } = arrange({ size: "normal" });
    const accordion = container.firstChild;
    expect(accordion).not.toHaveClass("DhigAccordion--density--dense");
  });

  it("renders the flat variant using the 'styleVariant' prop", () => {
    const { container } = arrange({ styleVariant: "flat" });
    const accordion = container.firstChild;
    expect(accordion).toHaveClass("DhigAccordion--variant--flat");
  });

  it("disables transitions", () => {
    arrange({ disableTransitions: true });
    // not tested because transitions are a MUI implementation detail
  });
});
