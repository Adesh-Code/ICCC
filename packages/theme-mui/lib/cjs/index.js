"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "configureClassnameGenerator", {
  enumerable: true,
  get: function get() {
    return _classnameGenerator.configureClassnameGenerator;
  }
});
Object.defineProperty(exports, "setLicenseKey", {
  enumerable: true,
  get: function get() {
    return _setLicenseKey.setLicenseKey;
  }
});
Object.defineProperty(exports, "themeDark", {
  enumerable: true,
  get: function get() {
    return _dark.default;
  }
});
Object.defineProperty(exports, "themeLight", {
  enumerable: true,
  get: function get() {
    return _light.default;
  }
});
var _dark = _interopRequireDefault(require("./themes/dark"));
var _light = _interopRequireDefault(require("./themes/light"));
var _classnameGenerator = require("./classname-generator");
var _setLicenseKey = require("./set-license-key");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }