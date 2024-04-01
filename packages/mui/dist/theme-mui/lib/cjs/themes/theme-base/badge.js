"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeBadgeStyles = void 0;
var makeBadgeStyles = exports.makeBadgeStyles = function makeBadgeStyles(_ref) {
  var primitives = _ref.primitives,
    tokens = _ref.tokens;
  return {
    MuiBadge: {
      styleOverrides: {
        root: {
          "& [class*='MuiBadge-standard'], [class*='MuiBadge-inline']": {
            fontSize: primitives.fontSizes["1"],
            borderRadius: primitives.borderRadii.round,
            fontWeight: primitives.fontWeights.stout,
            padding: "calc(".concat(primitives.spacings[1], " / 2) ").concat(primitives.spacings[2]),
            boxSizing: "initial",
            minWidth: primitives.spacings[3],
            minHeight: primitives.spacings[3],
            "&:has([class*='MuiSvgIcon'])": {
              padding: primitives.spacings[1]
            },
            "& [class*='MuiSvgIcon-root']": {
              color: "currentColor"
            }
          },
          "& [class*='MuiBadge-dot']": {
            padding: 0,
            minHeight: primitives.spacings[3],
            minWidth: primitives.spacings[3],
            borderRadius: primitives.borderRadii.round
          },
          "& [class*='MuiBadge-colorUrgency']": {
            backgroundColor: primitives.colors.accent.clay,
            color: tokens.colors["ink-on-fill-urgent"]
          },
          "& [class*='MuiBadge-colorSuccess']": {
            backgroundColor: primitives.colors.accent.plant,
            color: tokens.colors["ink-on-fill-success"]
          },
          "& [class*='MuiBadge-colorAttention']": {
            backgroundColor: primitives.colors.accent.gold,
            color: tokens.colors["ink-on-fill-warning"]
          },
          "& [class*='MuiBadge-colorNeutral']": {
            backgroundColor: primitives.colors.detail["slate-light"],
            color: tokens.colors["ink-on-light"]
          }
        },
        badge: {
          backgroundColor: tokens.colors["fill-engage"],
          color: tokens.colors["ink-on-fill-engage"]
        },
        inline: {
          position: "static",
          transform: "none",
          transformOrigin: "initial"
        }
      }
    }
  };
};