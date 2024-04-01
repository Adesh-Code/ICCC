"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.overlays = exports.componentArgs = exports.availableOverlays = exports.appearances = void 0;
/*
Constants to be used for Card component
*/
var overlays = exports.overlays = Object.freeze({
  NONE: "none",
  TOP: "top",
  CENTER: "center",
  BOTTOM: "bottom"
});
var appearances = exports.appearances = Object.freeze({
  DEFAULT: "default",
  FRAMED: "framed",
  QUIET_AND_FRAMED: "quietAndFramed",
  QUIET: "quiet"
});
var availableOverlays = exports.availableOverlays = Object.freeze(Object.values(overlays));
var componentArgs = exports.componentArgs = {
  className: {
    table: {
      disable: true
    }
  },
  children: {
    table: {
      disable: true
    }
  },
  twoColumns: {
    table: {
      disable: true
    }
  }
};