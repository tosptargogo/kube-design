"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Td;

var _react = _interopRequireDefault(require("react"));

var _lodash = require("lodash");

function Td(_ref) {
  var column = _ref.column,
      record = _ref.record;
  var value = "dataIndex" in column ? (0, _lodash.get)(record, column.dataIndex) : record;

  if ((0, _lodash.isFunction)(column.render)) {
    return /*#__PURE__*/_react["default"].createElement("td", null, column.render(value, record));
  }

  if (!"dataIndex" in column) {
    return /*#__PURE__*/_react["default"].createElement("td", null);
  }

  return /*#__PURE__*/_react["default"].createElement("td", null, value);
}