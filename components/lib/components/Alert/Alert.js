"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ICON_COLORS = {
  info: {
    primary: "#3385b0",
    secondary: "#fff"
  },
  error: {
    primary: "#8c3231",
    secondary: "#fff"
  },
  warning: {
    primary: "#8d663e",
    secondary: "#ffc781"
  }
};
var ICONS = {
  info: "check",
  error: "close",
  warning: "substract",
  "default": "information"
};

var Alert = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(Alert, _React$PureComponent);

  var _super = _createSuper(Alert);

  function Alert() {
    (0, _classCallCheck2["default"])(this, Alert);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Alert, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          type = _this$props.type,
          title = _this$props.title,
          message = _this$props.message;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("alert", className, "alert-".concat(type))
      }, this.renderIcon(), /*#__PURE__*/_react["default"].createElement("div", {
        className: "alert-content"
      }, title && /*#__PURE__*/_react["default"].createElement("div", {
        className: "alert-title"
      }, title), /*#__PURE__*/_react["default"].createElement("span", {
        className: "alert-message"
      }, message)));
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var _this$props2 = this.props,
          icon = _this$props2.icon,
          type = _this$props2.type,
          title = _this$props2.title;

      if (!icon && !title) {
        return null;
      }

      var iconName = icon || ICONS[type];
      return /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: "alert-icon",
        name: iconName,
        size: !!title ? 32 : 20,
        color: ICON_COLORS[type]
      });
    }
  }]);
  return Alert;
}(_react["default"].PureComponent);

exports["default"] = Alert;
(0, _defineProperty2["default"])(Alert, "propTypes", {
  type: _propTypes["default"].oneOf(["info", "error", "warning", "default"]),
  icon: _propTypes["default"].string,
  title: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  message: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object])
});
(0, _defineProperty2["default"])(Alert, "defaultProps", {
  type: "default",
  message: ""
});