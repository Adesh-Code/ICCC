import type { ThemeData } from "../../types";

export const makeListSubheaderStyles = ({
  primitives,
  tokens
}: ThemeData) => ({
  MuiListSubheader: {
    styleOverrides: {
      root: {
        backgroundColor: primitives.colors.detail.transparent,
        color: tokens.colors["detail-2-transparent"],
        padding: `${primitives.spacings["2"]} ${primitives.spacings["3"]} ${primitives.spacings["1"]}`,
        fontSize: primitives.fontSizes["1"],
        fontWeight: primitives.fontWeights["default"],
        lineHeight: primitives.lineHeights["compact"],
        margin: `${primitives.spacings["0"]} ${primitives.spacings["0"]} ${primitives.spacings["1"]}`
      },
      gutters: {
        paddingLeft: primitives.spacings["3"],
        paddingRight: primitives.spacings["3"]
      }
    }
  }
});
