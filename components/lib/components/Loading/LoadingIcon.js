"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = require("lodash");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var LoadingIcon = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(LoadingIcon, _PureComponent);

  var _super = _createSuper(LoadingIcon);

  function LoadingIcon() {
    (0, _classCallCheck2["default"])(this, LoadingIcon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(LoadingIcon, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          prefix = _this$props.prefix,
          name = _this$props.name,
          type = _this$props.type,
          size = _this$props.size,
          className = _this$props.className,
          onClick = _this$props.onClick,
          style = _this$props.style,
          clickable = _this$props.clickable,
          changeable = _this$props.changeable,
          disabled = _this$props.disabled;
      var styles = style;

      if ((0, _lodash.isNumber)(size)) {
        styles = Object.assign({}, style, {
          width: "".concat(size, "px"),
          height: "".concat(size, "px")
        });
      }

      return /*#__PURE__*/_react["default"].createElement("span", {
        style: styles,
        className: (0, _classnames["default"])("icon", (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "is-".concat(size), !(0, _lodash.isNumber)(size)), (0, _defineProperty2["default"])(_classNames, "icon-clickable", clickable), (0, _defineProperty2["default"])(_classNames, "icon-changeable", changeable && !disabled), (0, _defineProperty2["default"])(_classNames, "icon-disabled", disabled), _classNames), className),
        onClick: onClick
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        className: "".concat(prefix, " ").concat(prefix, "-").concat(name, " ").concat(prefix, "-").concat(type, " svg-loading"),
        xmlns: "http://www.w3.org/2000/svg",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48"
      }, /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("linearGradient", {
        id: "icon-line-spinner-a",
        x1: "4.167%",
        x2: "4.167%",
        y1: "0%",
        y2: "100%"
      }, /*#__PURE__*/_react["default"].createElement("stop", {
        offset: "0%",
        stopColor: "#E4EBF1"
      }), /*#__PURE__*/_react["default"].createElement("stop", {
        offset: "100%",
        stopColor: "#86919C"
      })), /*#__PURE__*/_react["default"].createElement("linearGradient", {
        id: "icon-line-spinner-b",
        x1: "95.833%",
        x2: "95.833%",
        y1: "0%",
        y2: "100%"
      }, /*#__PURE__*/_react["default"].createElement("stop", {
        offset: "0%",
        stopColor: "#324558"
      }), /*#__PURE__*/_react["default"].createElement("stop", {
        offset: "100%",
        stopColor: "#86919C"
      }))), /*#__PURE__*/_react["default"].createElement("g", {
        fillRule: "evenodd",
        fill: "none"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M24,0 C37.254834,-2.4348735e-15 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 C10.745166,48 1.623249e-15,37.254834 0,24 C-1.623249e-15,10.745166 10.745166,2.4348735e-15 24,0 Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        fill: "url(#icon-line-spinner-a)",
        d: "M24,48 L24,46 C36.1502645,46 46,36.1502645 46,24 C46,12.1554065 36.6396211,2.49704654 24.9125246,2.01858157 L24.9954814,0.0202708022 C37.7886803,0.542235439 48,11.078627 48,24 C48,37.254834 37.254834,48 24,48 Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        fill: "url(#icon-line-spinner-b)",
        d: "M24,46 L24,48 C10.745166,48 0,37.254834 0,24.0000001 C0,11.0786271 10.2113197,0.542235649 23.0045134,0.0202712255 L23.0874754,2.01858177 C11.3603789,2.49704674 2,12.1554066 2,24.0000001 C2,36.1502645 11.8497355,46 24,46 Z"
      }))));
    }
  }]);
  return LoadingIcon;
}(_react.PureComponent);

(0, _defineProperty2["default"])(LoadingIcon, "propTypes", {
  prefix: _propTypes["default"].string,
  name: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].string,
  size: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  changeable: _propTypes["default"].bool,
  clickable: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  disabled: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(LoadingIcon, "defaultProps", {
  type: "dark",
  size: "small",
  prefix: "qicon",
  style: {},
  changeable: false,
  clickable: false,
  disabled: false,
  onClick: _lodash.noop
});
var _default = LoadingIcon;
exports["default"] = _default;