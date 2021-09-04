"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Form = _interopRequireDefault(require("./Form"));

var _Item = _interopRequireDefault(require("./Item"));

var _Group = _interopRequireDefault(require("./Group"));

_Form["default"].Item = _Item["default"];
_Form["default"].Group = _Group["default"];
var _default = _Form["default"];
exports["default"] = _default;