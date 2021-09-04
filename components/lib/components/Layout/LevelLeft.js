"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Basic = _interopRequireDefault(require("./Basic"));

var _Generator = _interopRequireDefault(require("../../utils/Generator"));

var LevelLeft = (0, _Generator["default"])({
  componentCls: "level-left"
})(_Basic["default"]);
var _default = LevelLeft;
exports["default"] = _default;