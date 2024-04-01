"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orders = exports.componentArgs = exports.availableOrders = void 0;
var orders = exports.orders = Object.freeze({
  ASC: "asc",
  DESC: "desc"
});
var availableOrders = exports.availableOrders = Object.freeze(Object.values(orders));
var componentArgs = exports.componentArgs = {
  className: {
    table: {
      disable: true
    }
  },
  order: {
    control: {
      type: "select"
    },
    options: availableOrders
  }
};