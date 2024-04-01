import React from "react";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card, { CardDivider } from "./card";

import { render } from "@testing-library/react";

import { themeLight } from "@iccc/theme-mui";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const light = createTheme(themeLight);

const arrange = (options) => {
  const args = {
    children: "Card body",
    ...options
  };

  return render(
    <ThemeProvider theme={light}>
      <Card {...args} />
    </ThemeProvider>
  );
};

const testMediaUrl =
  "https://swc.autodesk.com/pharmacopeia/img/placeholders/960x640.png";

beforeEach(() => {
  // eslint-disable-next-line no-console
  console.error = jest.fn((error) => {
    throw new Error(error);
  });
});

describe("card component", () => {
  it("requires children for card", () => {
    expect(() =>
      arrange({
        children: null
      })
    ).toThrow();
  });

  it("renders a card", () => {
    const { container } = arrange();
    expect(container).toMatchSnapshot();
  });

  it("renders a quiet card", () => {
    const { container } = arrange({
      quiet: true
    });
    expect(container.firstChild).toHaveClass("MuiCard--quiet");
  });

  it("renders a framed card", () => {
    const { container } = arrange({
      framed: true
    });
    expect(container.firstChild).toHaveClass("MuiCard--framed");
  });

  it("renders a quiet and framed card", () => {
    const { container } = arrange({
      framed: true,
      quiet: true
    });
    expect(container.firstChild).toHaveClass("MuiCard--quiet");
    expect(container.firstChild).toHaveClass("MuiCard--framed");
  });

  it("renders an outlined card", () => {
    expect(() =>
      arrange({
        quiet: false
      })
    ).toBeTruthy();
  });

  it("renders a card with custom class name", () => {
    const { container } = arrange({
      className: "test-classname"
    });
    expect(container.firstChild).toHaveClass("test-classname");
  });

  it("renders a card with two column class added", () => {
    const { container } = arrange({
      twoColumns: true
    });
    expect(container.firstChild).toHaveClass("MuiCard--twoColumns");
  });
});

describe("card content component", () => {
  it("renders a card content", () => {
    const { container } = render(<CardContent>Hello</CardContent>);
    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();
  });
});

describe("card actions component", () => {
  it("renders a card actions", () => {
    const { container } = render(<CardActions>Action</CardActions>);
    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();
  });
});

describe("card action area component", () => {
  it("renders a card action area", () => {
    const { container } = render(
      <CardActionArea href="https://www.autodesk.com">Action</CardActionArea>
    );
    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();
  });
});

describe("card media component", () => {
  it("renders a card media", () => {
    const { container } = render(<CardMedia image={testMediaUrl} />);
    expect(container).toMatchSnapshot();
    expect(container).toBeTruthy();
  });
});

describe("card divider component", () => {
  it("renders", () => {
    const { container } = render(<CardDivider />);
    expect(container).toMatchSnapshot();
  });
});
