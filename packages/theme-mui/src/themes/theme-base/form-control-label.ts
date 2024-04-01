import type { ThemeData } from "../../types";

export const makeFormControlLabelStyles = ({
  primitives,
  tokens
}: ThemeData) => ({
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        marginLeft: 0,
        "&.Mui-disabled": {
          opacity: tokens.opacities.disabled,
          '& [class*="MuiCheckbox-root"]': {
            "&.Mui-disabled": {
              opacity: tokens.opacities.default
            }
          }
        },
        "&.Mui-error": {
          '& [class*="MuiFormControlLabel-label"]': {
            color: tokens.colors["ink-error"]
          },
          '& [class*="MuiCheckbox-root"]': {
            "& > svg": {
              outline: `${primitives.borderWidths.large} solid ${tokens.colors["ink-error"]}`,
              outlineOffset: primitives.borderWidths.medium,
              borderRadius: primitives.borderRadii.small
            }
          }
        },
        '& [class*="MuiFormControlLabel-label"][class*="MuiTypography-smallprint"]':
          {
            fontSize: primitives.fontSizes[1]
          }
      },
      label: {
        "&.Mui-disabled": {
          color: tokens.colors["ink-on-background"]
        }
      }
    }
  }
});
