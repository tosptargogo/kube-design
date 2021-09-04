"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Menu = _interopRequireDefault(require("./Menu"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

_Menu["default"].MenuItem = _MenuItem["default"];
var _default = _Menu["default"];
exports["default"] = _default;