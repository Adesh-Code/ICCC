"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLicenseKey = void 0;
var _xLicensePro = require("@mui/x-license-pro");
var setLicenseKey = exports.setLicenseKey = function setLicenseKey(key) {
  _xLicensePro.LicenseInfo.setLicenseKey(key || process && process.env && process.env.DHIG_MUIXPRO_ENTRY || undefined);
  return {
    key: _xLicensePro.LicenseInfo.getLicenseKey()
  };
};