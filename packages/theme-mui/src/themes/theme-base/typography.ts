import type { ThemeData } from "../../types";

export const makeTypographyStyles = ({ tokens }: Pick<ThemeData, "tokens">) => ({
  MuiTypography: {
    defaultProps: {
      component: "p"
    },
    styleOverrides: {
      root: {
        color: tokens.colors["text-on-background"]
      },
      colorPrimary: {
        color: tokens.colors["text-on-background"]
      },
      colorError: {
        color: tokens.colors["ink-error"]
      }
    }
  }
});
