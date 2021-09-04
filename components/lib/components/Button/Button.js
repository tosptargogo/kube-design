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

var _Icon = _interopRequireDefault(require("../Icon"));

var _Loading = _interopRequireDefault(require("../Loading"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Button = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Button, _PureComponent);

  var _super = _createSuper(Button);

  function Button() {
    (0, _classCallCheck2["default"])(this, Button);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          type = _this$props.type,
          htmlType = _this$props.htmlType,
          className = _this$props.className,
          size = _this$props.size,
          icon = _this$props.icon,
          iconType = _this$props.iconType,
          iconSize = _this$props.iconSize,
          loading = _this$props.loading,
          ghost = _this$props.ghost,
          rest = (0, _objectWithoutProperties2["default"])(_this$props, ["children", "type", "htmlType", "className", "size", "icon", "iconType", "iconSize", "loading", "ghost"]);
      return /*#__PURE__*/_react["default"].createElement("button", (0, _extends2["default"])({
        className: (0, _classnames["default"])("button", "button-".concat(type), "button-size-".concat(size), {
          "has-icon": icon,
          "is-loading": loading,
          "is-ghost": ghost
        }, className),
        type: htmlType
      }, rest), icon && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        name: icon,
        type: iconType,
        size: iconSize
      }), children && /*#__PURE__*/_react["default"].createElement("div", {
        className: "button-content"
      }, children), loading && /*#__PURE__*/_react["default"].createElement(_Loading["default"], {
        size: 16
      }));
    }
  }]);
  return Button;
}(_react.PureComponent);

exports["default"] = Button;
(0, _defineProperty2["default"])(Button, "propTypes", {
  type: _propTypes["default"].string,
  htmlType: _propTypes["default"].oneOf(["submit", "button", "reset"]),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  size: _propTypes["default"].oneOf(["small", "normal", "large"]),
  icon: _propTypes["default"].string,
  iconSize: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  iconType: _propTypes["default"].string,
  loading: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(Button, "defaultProps", {
  type: "default",
  htmlType: "button",
  size: "normal",
  icon: "",
  iconType: "dark"
});