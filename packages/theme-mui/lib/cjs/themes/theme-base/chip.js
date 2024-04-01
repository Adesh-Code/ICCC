"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeChipStyles = void 0;
var makeChipStyles = exports.makeChipStyles = function makeChipStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiChip: {
      styleOverrides: {
        root: Object.assign(Object.assign(Object.assign(Object.assign({}, tokens.typography["short-copy-small"]), {
          fontWeight: primitives.fontWeights.stout,
          width: "fit-content",
          padding: "".concat(primitives.spacings["2"], " ").concat(primitives.spacings["3"]),
          backgroundColor: tokens.colors["detail-1-40"],
          color: tokens.colors["ink-on-background"]
        }), tokens.transitions["state-blur"]), {
          "&:hover": Object.assign({
            backgroundColor: tokens.colors["detail-1-40"]
          }, tokens.transitions["enter"]),
          "&.DhigChip--selected": Object.assign({
            backgroundColor: tokens.colors["detail-2-opaque"],
            color: tokens.colors["ink-on-fill-primary"]
          }, tokens.transitions["state-activate"]),
          "&:has(svg:hover), &:has(svg:focus-visible)": Object.assign({
            boxShadow: "none",
            backgroundColor: tokens.colors["detail-1-40"]
          }, tokens.transitions["state-activate"]),
          '& [class*="MuiChip-avatar"]': {
            margin: "".concat(primitives.spacings[0], " ").concat(primitives.spacings["1"], " ").concat(primitives.spacings[0], " -").concat(primitives.spacings["2"]),
            height: primitives.spacings["6"],
            width: primitives.spacings["6"],
            color: tokens.colors["ink-on-background"]
          },
          '& [class*="MuiChip-icon"]': {
            margin: "".concat(primitives.spacings[0], " ").concat(primitives.spacings["1"], " ").concat(primitives.spacings[0], " -").concat(primitives.spacings["1"]),
            fontSize: primitives.fontSizes["4"],
            color: tokens.colors["ink-on-background"],
            height: primitives.spacings["5"],
            width: primitives.spacings["5"]
          },
          '& [class*="MuiChip-deleteIcon"]': Object.assign(Object.assign({
            color: tokens.colors["ink-on-background"],
            fontSize: primitives.fontSizes["3"],
            outlineOffset: "1px",
            borderRadius: primitives.borderRadii.round,
            margin: "".concat(primitives.spacings[0], " -").concat(primitives.spacings["2"], " ").concat(primitives.spacings[0], " ").concat(primitives.spacings["1"]),
            display: "inline-block",
            position: "relative",
            zIndex: 1,
            padding: primitives.spacings["1"]
          }, tokens.transitions["state-blur"]), {
            "&:hover, &:focus:not(:focus-visible):hover": Object.assign({
              color: tokens.colors["ink-on-background"],
              backgroundColor: tokens.colors["activated-fill-subtle"]
            }, tokens.transitions["enter"]),
            "&:focus-visible": Object.assign({
              boxShadow: tokens.effects["focus-ring-reverse"],
              outline: "none"
            }, tokens.transitions["state-activate"]),
            "&:focus:not(:focus-visible)": Object.assign({
              boxShadow: "none",
              outline: "none"
            }, tokens.transitions["state-activate"]),
            "&:active, &:focus:not(:focus-visible):active": Object.assign({
              backgroundColor: tokens.colors["activated-hover-fill-subtle"]
            }, tokens.transitions["state-activate"]),
            tabIndex: 0
          }),
          "&.Mui-disabled": {
            opacity: tokens.opacities["disabled"]
          }
        }),
        clickable: {
          "&:hover": {
            boxShadow: tokens.effects["halo-hover"],
            color: tokens.colors["ink-on-background"]
          },
          "&:focus-visible": Object.assign({
            boxShadow: tokens.effects["focus-ring-reverse"],
            backgroundColor: tokens.colors["detail-1-40"]
          }, tokens.transitions["state-activate"]),
          "&:active": {
            boxShadow: tokens.effects["halo-pressed"]
          }
        },
        deletable: {
          "&:focus-visible": {
            boxShadow: tokens.effects["focus-ring-reverse"],
            backgroundColor: tokens.colors["detail-1-40"]
          }
        },
        colorError: {
          backgroundColor: tokens.colors.background,
          color: tokens.colors["ink-error"],
          border: "".concat(primitives.borderWidths.medium, " solid ").concat(tokens.colors["ink-error"]),
          "&.DhigChip--selected": {
            backgroundColor: tokens.colors["fill-error"],
            color: tokens.colors["ink-on-fill-alert"]
          }
        },
        label: {
          padding: primitives.spacings[0]
        }
      }
    }
  };
};