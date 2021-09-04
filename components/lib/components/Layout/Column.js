"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Basic = _interopRequireDefault(require("./Basic"));

var _Generator = _interopRequireDefault(require("../../utils/Generator"));

var Column = (0, _Generator["default"])({
  componentCls: "column"
})(_Basic["default"]);
var _default = Column;
exports["default"] = _default;