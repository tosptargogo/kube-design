"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  componentCls: _propTypes["default"].string,
  as: _propTypes["default"].string
};

var Basic = function Basic(_ref) {
  var children = _ref.children,
      _ref$as = _ref.as,
      ElementType = _ref$as === void 0 ? "div" : _ref$as,
      componentCls = _ref.componentCls,
      className = _ref.className,
      restProps = (0, _objectWithoutProperties2["default"])(_ref, ["children", "as", "componentCls", "className"]);
  return /*#__PURE__*/_react["default"].createElement(ElementType, (0, _extends2["default"])({
    className: (0, _classnames["default"])(componentCls, className)
  }, restProps), children);
};

Basic.propTypes = propTypes;
var _default = Basic;
exports["default"] = _default;