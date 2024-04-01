"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureClassnameGenerator = void 0;
var _className = require("@mui/material/className");
/* istanbul ignore file: MUI implementation details */

// Handles prefix for Mui v5. Experimental!
// https://mui.com/material-ui/experimental-api/classname-generator/
var configureClassnameGenerator = exports.configureClassnameGenerator = function configureClassnameGenerator(_ref) {
  var prefix = _ref.prefix;
  _className.unstable_ClassNameGenerator.configure(function (componentName) {
    // Some MUI components with dynamic behaviors do not apply prefixes correctly
    // Choosing the lesser of two evils which is to exclude CSS scoping
    var excludedComponents = ["MuiTooltip", "MuiDataGrid", "MuiPieArc", "MuiPieArcLabel"];
    return prefix && !excludedComponents.includes(componentName) ? "".concat(prefix, "-").concat(componentName) : componentName;
  });
};