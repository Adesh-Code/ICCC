import type { ThemeData } from "../../types";

export const makeFormGroupStyles = ({ primitives }: Pick<ThemeData, "primitives">) => ({
  MuiFormGroup: {
    styleOverrides: {
      root: {
        "& label": {
          marginBottom: primitives.spacings[1]
        }
      }
    }
  }
});
