"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Basic = _interopRequireDefault(require("./Basic"));

var _Generator = _interopRequireDefault(require("../../utils/Generator"));

var Columns = (0, _Generator["default"])({
  componentCls: "columns"
})(_Basic["default"]);
var _default = Columns;
exports["default"] = _default;