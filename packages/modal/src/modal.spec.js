import React from "react";
import Button from "@mui/material/Button";
import Modal from "./modal";
import { fireEvent, render, screen, within } from "@testing-library/react";
import Typography from "@iccc/typography";

import { themeLight } from "@iccc/theme-mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const light = createTheme(themeLight);

const onChangeMock = jest.fn();

const arrange = (options) => {
  const args = {
    actions: <Button>Modal action</Button>,
    content: "Modal body",
    open: true,
    title: "Modal title",
    ...options
  };

  return render(
    <ThemeProvider theme={light}>
      <Modal {...args} />
    </ThemeProvider>
  );
};

describe("Modal component", () => {
  it("renders a modal", () => {
    arrange();
    const modal = screen.getByRole("dialog");
    expect(modal).toMatchSnapshot();
  });

  it("renders with title, content, actions, and close button", () => {
    arrange();
    const modal = screen.getByRole("dialog");
    const closeButton = screen.getByLabelText("close");

    expect(modal).toHaveTextContent("Modal title");
    expect(modal).toHaveTextContent("Modal body");
    expect(modal).toHaveTextContent("Modal action");
    expect(closeButton).toBeInTheDocument();
  });

  it("doesn't render actions if none are provided", () => {
    arrange({ actions: null });
    expect(screen.queryByText("Modal action")).not.toBeInTheDocument();
  });

  it("renders subdivision style variant", () => {
    arrange({ styleVariant: "subdivision" });
    const modal = screen.getByRole("dialog");
    expect(modal).toHaveClass("DhigModal--styleVariant--subdivision");
  });

  it("renders lightbox type", () => {
    arrange({ type: "lightbox" });
    const modal = screen.getByRole("dialog");
    const closeButton = screen.getByLabelText("close");

    expect(modal.firstChild).not.toHaveClass("MuiDialogTitle-root");
    expect(closeButton).toHaveClass("DhigModal--closeButton--outside");
  });

  it("renders lightbox type with caption content", () => {
    const caption = (
      <>
        <Typography variant="caption">
          This is a placeholder caption.
        </Typography>
        <Typography variant="smallprint">
          Image credit: © 2022 Faucibus imperdiet integer leo nunc urna et
          gravida lobortis quam.
        </Typography>
      </>
    );
    arrange({ type: "lightbox", caption });
    const modal = screen.getByRole("dialog");
    const closeButton = screen.getByLabelText("close");
    const captionText = screen.getByText("This is a placeholder caption.");
    const creditText = screen.getByText(
      "Image credit: © 2022 Faucibus imperdiet integer leo nunc urna et gravida lobortis quam."
    );

    expect(modal.firstChild).not.toHaveClass("MuiDialogTitle-root");
    expect(captionText).toHaveClass("MuiTypography-caption");
    expect(creditText).toHaveClass("MuiTypography-smallprint");
    expect(closeButton).toHaveClass("DhigModal--closeButton--outside");
  });

  it("renders lightbox type with a string in the caption prop", () => {
    arrange({ type: "lightbox", caption: "This is a placeholder caption." });
    const modal = screen.getByRole("dialog");
    const closeButton = screen.getByLabelText("close");
    const captionText = screen.getByText("This is a placeholder caption.");

    expect(modal.firstChild).not.toHaveClass("MuiDialogTitle-root");
    expect(captionText).toHaveClass("MuiTypography-caption");
    expect(closeButton).toHaveClass("DhigModal--closeButton--outside");
  });

  it("renders alert type", () => {
    // eslint-disable-next-line react/display-name
    arrange({ type: "alert", AlertIcon: () => <div /> });
    const modal = screen.getByRole("dialog");

    expect(modal).toHaveClass("DhigModal--type--alert");
  });

  it("renders alert type without AlertIcon", () => {
    arrange({ type: "alert" });
    const modal = screen.getByRole("dialog");

    expect(modal).toHaveClass("DhigModal--type--alert");
  });

  it("renders different max-widths", () => {
    arrange({ maxWidth: "xl" });
    const modal = screen.getByRole("dialog");
    expect(modal).toHaveClass("MuiDialog-paperWidthXl");
  });

  it("renders with logo", () => {
    arrange({ displayLogo: true });
    const modal = screen.getByRole("dialog");
    const logo = screen.getByAltText("Autodesk logo");

    expect(modal).not.toHaveTextContent("Modal title");
    expect(logo).toBeInTheDocument();
  });

  it("renders without close button", () => {
    arrange({ closeButtonDisplay: false });
    const closeButton = screen.queryByLabelText("close");
    expect(closeButton).not.toBeInTheDocument();
  });

  it("renders without a title", () => {
    const { container } = arrange({ title: null });

    const h2 = container.querySelector("h2");
    expect(h2).toBeNull();
  });

  it("renders with accessibility props", () => {
    arrange({
      "aria-describedby": "aria-described-by-test",
      "aria-labelledby": "aria-labelled-by-test"
    });
    const modal = screen.getByRole("dialog");

    expect(modal).toHaveAttribute("aria-labelledby", "aria-labelled-by-test");
    expect(modal).toHaveAttribute("aria-describedby", "aria-described-by-test");
  });

  it("accepts close button props", () => {
    arrange({
      CloseButtonProps: {
        accessibleLabel: "test-label",
        handleClose: () => {},
        onClick: onChangeMock
      }
    });
    const modal = screen.getByRole("dialog");
    const closeButton = within(modal).getAllByRole("button")[0];
    expect(closeButton).toHaveAttribute("aria-label", "test-label");

    fireEvent.click(closeButton);
    expect(onChangeMock).toBeCalledTimes(1);
  });
});
