import type { ThemeData } from "../../types";

export const makeLinkStyles = ({ tokens }: Pick<ThemeData, "tokens">) => ({
  MuiLink: {
    styleOverrides: {
      root: {
        ...tokens.textLink.defaultState,
        '&[class*="MuiLink-underlineHover"]': {
          textDecoration: tokens.textLink.defaultState.textDecoration
        },
        '&[class*="MuiTypography-root"]': {
          "&:visited": tokens.textLink.visitedState,
          "&:hover, &:visited:hover": tokens.textLink.hoverState,
          "&:focus-visible": tokens.textLink.focusState,
          "&:active": tokens.textLink.pressedState,
          "&[disabled]": {
            opacity: tokens.opacities.disabled,
            pointerEvents: "none",
            cursor: "default"
          }
        }
      },
      underlineNone: {
        textDecoration: "none"
      }
    },
  }
});
