"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeGridStyles = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var makeGridStyles = exports.makeGridStyles = function makeGridStyles(_ref) {
  var breakpoints = _ref.breakpoints,
    primitives = _ref.primitives,
    tokens = _ref.tokens;
  // Use grid token "margin" values for container padding
  var containerBreakpointStyles = Object.fromEntries(breakpoints.keys.map(function (breakpoint) {
    return [breakpoints.up(breakpoints.values[breakpoint]), {
      // Subtract left padding of first grid item from left padding of container
      // for consistent padding on either side of the container
      paddingLeft: "calc(".concat(tokens.grid[breakpoint].margin, " - ").concat(tokens.grid[breakpoint].gutter, ")"),
      paddingRight: tokens.grid[breakpoint].margin
    }];
  }));
  // Programatically add scoped item spacing using the "gutter" values of the grid tokens
  var itemBreakpointStyles = Object.fromEntries(breakpoints.keys.map(function (breakpoint) {
    return [breakpoints.up(breakpoints.values[breakpoint]), _defineProperty({}, "& [class*='MuiGrid-item']", {
      paddingLeft: tokens.grid[breakpoint].gutter,
      paddingTop: tokens.grid[breakpoint].gutter
    })];
  }));
  return {
    MuiGrid: {
      styleOverrides: {
        root: Object.assign({
          "&[class*='MuiGrid-container']": Object.assign(Object.assign({}, containerBreakpointStyles), {
            maxWidth: primitives.grid["max-width"]
          })
        }, itemBreakpointStyles)
      }
    },
    MuiGrid2: {
      defaultProps: {
        spacing: {
          xs: tokens.grid.xs.gutter,
          sm: tokens.grid.sm.gutter,
          md: tokens.grid.md.gutter,
          lg: tokens.grid.lg.gutter,
          xl: tokens.grid.xl.gutter
        }
      }
    }
  };
};