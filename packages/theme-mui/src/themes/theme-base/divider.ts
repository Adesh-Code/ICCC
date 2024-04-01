import type { ThemeData } from "../../types";

export const makeDividerStyles = ({ tokens }: Pick<ThemeData, "tokens">) => ({
  MuiDivider: {
    defaultProps: {
      light: true
    },
    styleOverrides: {
      root: {
        backgroundColor: tokens.colors["divider-1"]
      },
      light: {
        backgroundColor: tokens.colors["divider-0"]
      }
    }
  }
});
