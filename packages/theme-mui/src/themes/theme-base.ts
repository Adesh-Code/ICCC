import { createTheme, Breakpoints } from "@mui/material/styles";
import type { PaletteMode, ThemeData } from "../types";
import { makeAccordionStyles } from "./theme-base/accordion";
import { makeAlertStyles } from "./theme-base/alert";
import { makeAutocompleteStyles } from "./theme-base/autocomplete";
import { makeBadgeStyles } from "./theme-base/badge";
import { makeButtonGroupStyles } from "./theme-base/button-group";
import { makeButtonStyles } from "./theme-base/button";
import { makeCardStyles } from "./theme-base/card";
import { makeCheckboxStyles } from "./theme-base/checkbox";
import { makeChipStyles } from "./theme-base/chip";
import { makeCircularProgressStyles } from "./theme-base/circular-progress";
import { makeContainerStyles } from "./theme-base/container";
import { makeDatePickerStyles } from "./theme-base/date-picker";
import { makeDialogStyles } from "./theme-base/dialog";
import { makeDividerStyles } from "./theme-base/divider";
import { makeFilledInputStyles } from "./theme-base/filled-input";
import { makeFormControlLabelStyles } from "./theme-base/form-control-label";
import { makeFormControlStyles } from "./theme-base/form-control";
import { makeFormGroupStyles } from "./theme-base/form-group";
import { makeFormHelperTextStyles } from "./theme-base/form-helper-text";
import { makeFormLabelStyles } from "./theme-base/form-label";
import { makeGridStyles } from "./theme-base/grid";
import { makeIconButtonStyles } from "./theme-base/icon-button";
import { makeInputLabelStyles } from "./theme-base/input-label";
import { makeInputStyles } from "./theme-base/input";
import { makeLinearProgressStyles } from "./theme-base/linear-progress";
import { makeLinkStyles } from "./theme-base/link";
import { makeListSubheaderStyles } from "./theme-base/list-subheader";
import { makeMenuItemStyles } from "./theme-base/menu-item";
import { makeOutlinedInputStyles } from "./theme-base/outlined-input";
import { makePaginationStyles } from "./theme-base/pagination";
import { makePopoverStyles } from "./theme-base/popover";
import { makePopperStyles } from "./theme-base/popper";
import { makeRadioStyles } from "./theme-base/radio";
import { makeSelectStyles } from "./theme-base/select";
import { makeSkeletonStyles } from "./theme-base/skeleton";
import { makeSnackbarStyles } from "./theme-base/snackbar";
import { makeStepperStyles } from "./theme-base/stepper";
import { makeSvgIconStyles } from "./theme-base/svg-icon";
import { makeTableStyles } from "./theme-base/table";
import { makeTabsStyles } from "./theme-base/tabs";
import { makeTextFieldStyles } from "./theme-base/text-field";
import { makeToggleButtonGroupStyles } from "./theme-base/toggle-button-group";
import { makeToggleButtonStyles } from "./theme-base/toggle-button";
import { makeToolbarStyles } from "./theme-base/toolbar";
import { makeTooltipStyles } from "./theme-base/tooltip";
import { makeTreeItemStyles } from "./theme-base/tree-item";
import { makeTreeViewStyles } from "./theme-base/tree-view";
import { makeTypographyStyles } from "./theme-base/typography";

interface ThemeBaseOptions {
  paletteMode?: PaletteMode;
  themeData: ThemeData;
}

/**
 * Returns a MUI-compatible theme base object
 *
 * @param {Object} props
 * @param {paletteMode} [props.paletteMode=light] - Light or dark
 * @param {Object} props.themeData - Digital HIG design tokens
 *
 * @returns {Object} Returns a MUI theme.
 */
export const getThemeBase = ({
  paletteMode = "light",
  themeData: { primitives, tokens },
}: ThemeBaseOptions) => {
  /* TODO: [Typescript] Migrate the htmlFontSize logic to work with createTheme */
  // Modify rem-based primitive and token values for cases in which the
  // root font size of the page is not set to the default 16px
  // const htmlFontSize = additionalThemeOptions?.typography?.htmlFontSize ?? 16;

  // const htmlFontSizeRatio = htmlFontSize / 16;

  // const primitives = {
  //   ...themeData.primitives,
  //   fontSizes: Object.entries(themeData.primitives.fontSizes).reduce(
  //     (acc, [key, fontSize]) => {
  //       acc[key] =
  //         htmlFontSizeRatio === 1
  //           ? fontSize
  //           : `calc(${fontSize} / ${htmlFontSizeRatio})`;
  //       return acc;
  //     },
  //     {}
  //   )
  // };

  // const typographyTokens = Object.entries(themeData.tokens.typography).reduce(
  //   (acc, [key, token]) => {
  //     acc[key] = {
  //       ...token,
  //       fontSize:
  //         htmlFontSizeRatio === 1
  //           ? token.fontSize
  //           : `calc(${token.fontSize} / ${htmlFontSizeRatio})`
  //     };
  //     return acc;
  //   },
  //   {}
  // );

  // const tokens = {
  //   ...themeData.tokens,
  //   typography: typographyTokens
  // };

  // Create a MUI-compatible breakpoint configuration based on theme data
  const breakpointValues = Object.entries(tokens.grid).reduce(
    (acc, [key, value]) => {
      acc.keys.push(key);
      acc.values[key] = parseInt(value.breakpoint, 10);
      return acc;
    },
    { keys: [], values: {} }
  );

  const { breakpoints } = createTheme({ breakpoints: breakpointValues as Breakpoints });

  const transitionValues = Object.entries(tokens.transitions).reduce(
    (acc, [key, value]) => {
      acc.duration[key] = value.transitionDuration;
      acc.easing[key] = value.transitionTimingFunction;
      return acc;
    },
    { duration: {}, easing: {} }
  );

  /* istanbul ignore next */
  return {
    breakpoints,
    direction: "ltr",
    palette: {
      mode: paletteMode,
      common: {
        black: primitives.colors.primary.black,
        white: primitives.colors.primary.white
      },
      primary: {
        main:
          paletteMode === "light"
            ? primitives.colors.primary.black
            : primitives.colors.primary.white
      },
      error: {
        main: tokens.colors["ink-error"]
      },
      success: {
        main: tokens.colors["fill-success"]
      },
      urgency: {
        main: tokens.colors["fill-urgent"]
      },
      attention: {
        main: tokens.colors["fill-warning"]
      },
      neutral: {
        main: tokens.colors["detail-1-opaque"]
      },
      text: {
        primary: primitives.colors.primary.black,
        secondary: primitives.colors.primary.white
      },
      divider: "rgba(0, 0, 0, 0.1)",
      background: {
        paper: tokens.colors.background, // Background for Card, Tabs
        default: tokens.colors.background
      }
    },
    typography: {
      fontFamily: primitives.fontFamilies.default,
      fontWeightLight: primitives.fontWeights.default,
      fontWeightRegular: primitives.fontWeights.default,
      fontWeightMedium: primitives.fontWeights.emphasized,
      fontWeightBold: primitives.fontWeights.display,
      body1: tokens.typography["body-copy-medium"],
      ...tokens.typography
    },
    spacing: Object.entries(primitives.spacings).map(([_, value]) => value),
    transitions: {
      ...transitionValues
    },
    zIndex: {},
    primitives,
    tokens,
    components: {
      ...makeAccordionStyles({ primitives, tokens }),
      ...makeAlertStyles({ primitives, tokens }),
      ...makeAutocompleteStyles({ primitives, tokens }),
      ...makeBadgeStyles({ primitives, tokens }),
      ...makeButtonGroupStyles({ primitives, tokens }),
      ...makeButtonStyles({ primitives, tokens }),
      ...makeCardStyles({ primitives, tokens }),
      ...makeCheckboxStyles({ primitives, tokens }),
      ...makeChipStyles({ primitives, tokens }),
      ...makeCircularProgressStyles({ primitives, tokens }),
      ...makeContainerStyles({ primitives }),
      ...makeDatePickerStyles({ primitives, tokens }),
      ...makeDialogStyles({
        breakpoints,
        paletteMode,
        primitives,
        tokens
      }),
      ...makeDividerStyles({ tokens }),
      ...makeFilledInputStyles({ primitives, tokens }),
      ...makeFormControlLabelStyles({ primitives, tokens }),
      ...makeFormControlStyles({ primitives, tokens }),
      ...makeFormGroupStyles({ primitives }),
      ...makeFormHelperTextStyles({ primitives, tokens }),
      ...makeFormLabelStyles({ tokens }),
      ...makeGridStyles({ breakpoints, primitives, tokens }),
      ...makeIconButtonStyles({ primitives, tokens }),
      ...makeInputLabelStyles({ primitives, tokens }),
      ...makeInputStyles({ primitives, tokens }),
      ...makeLinearProgressStyles({ primitives, tokens }),
      ...makeLinkStyles({ tokens }),
      ...makeListSubheaderStyles({ primitives, tokens }),
      ...makeMenuItemStyles({ primitives, tokens }),
      ...makeOutlinedInputStyles({ primitives, tokens }),
      ...makePaginationStyles({ primitives, tokens }),
      ...makePopoverStyles({ primitives, tokens }),
      ...makePopperStyles({ primitives, tokens }),
      ...makeRadioStyles({ primitives, tokens }),
      ...makeSelectStyles({ primitives, tokens }),
      ...makeSkeletonStyles({ tokens }),
      ...makeSnackbarStyles({ primitives, tokens }),
      ...makeStepperStyles({ primitives, tokens }),
      ...makeSvgIconStyles({ primitives, tokens }),
      ...makeTableStyles({ primitives, tokens }),
      ...makeTabsStyles({ primitives, tokens }),
      ...makeTextFieldStyles({ primitives, tokens }),
      ...makeToggleButtonGroupStyles({ primitives, tokens }),
      ...makeToggleButtonStyles({ primitives, tokens }),
      ...makeToolbarStyles({ primitives, tokens }),
      ...makeTooltipStyles({ primitives, tokens }),
      ...makeTreeItemStyles({ primitives, tokens }),
      ...makeTreeViewStyles({ primitives, tokens }),
      ...makeTypographyStyles({ tokens })
    }
  };
};
