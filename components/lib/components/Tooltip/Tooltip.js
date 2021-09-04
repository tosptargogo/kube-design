"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Popper = _interopRequireDefault(require("../Popper"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Tooltip = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Tooltip, _Component);

  var _super = _createSuper(Tooltip);

  function Tooltip() {
    (0, _classCallCheck2["default"])(this, Tooltip);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Tooltip, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          content = _this$props.content,
          restProps = (0, _objectWithoutProperties2["default"])(_this$props, ["children", "className", "content"]);
      if ([undefined, null, ""].includes(content)) return children;
      return /*#__PURE__*/_react["default"].createElement(_Popper["default"], (0, _extends2["default"])({}, restProps, {
        content: content,
        className: (0, _classnames["default"])("tooltip", className),
        type: "tooltip"
      }), children);
    }
  }]);
  return Tooltip;
}(_react.Component);

(0, _defineProperty2["default"])(Tooltip, "propTypes", {
  always: _propTypes["default"].bool,
  trigger: _propTypes["default"].string,
  className: _propTypes["default"].string,
  content: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].element]),
  placement: _propTypes["default"].string,
  children: _propTypes["default"].node
});
(0, _defineProperty2["default"])(Tooltip, "defaultProps", {
  always: false,
  trigger: "hover",
  placement: "top"
});
var _default = Tooltip;
exports["default"] = _default;