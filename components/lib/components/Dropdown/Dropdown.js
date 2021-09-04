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

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _Popper = _interopRequireDefault(require("../Popper"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Dropdown = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Dropdown, _Component);

  var _super = _createSuper(Dropdown);

  function Dropdown() {
    (0, _classCallCheck2["default"])(this, Dropdown);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Dropdown, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          onClick = _this$props.onClick,
          theme = _this$props.theme,
          restProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "children", "onClick", "theme"]);
      var isTriggerValid = /*#__PURE__*/(0, _react.isValidElement)(children);
      return /*#__PURE__*/_react["default"].createElement(_Popper["default"], (0, _extends2["default"])({}, restProps, {
        type: "dropdown",
        className: (0, _classnames["default"])("dropdown", "dropdown-".concat(theme), className),
        onClick: onClick
      }), isTriggerValid ? /*#__PURE__*/(0, _react.cloneElement)(children, {
        className: (0, _classnames["default"])("is-trigger", children.props.className)
      }) : /*#__PURE__*/_react["default"].createElement("span", {
        className: "is-trigger"
      }, children));
    }
  }]);
  return Dropdown;
}(_react.Component);

(0, _defineProperty2["default"])(Dropdown, "propTypes", {
  trigger: _propTypes["default"].string,
  theme: _propTypes["default"].oneOf(["dark", ""]),
  content: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].element, _propTypes["default"].func]),
  placement: _propTypes["default"].string,
  showArrow: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  visible: _propTypes["default"].bool,
  closeAfterClick: _propTypes["default"].bool,
  closeAfterMouseLeave: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  onClick: _propTypes["default"].func
});
(0, _defineProperty2["default"])(Dropdown, "defaultProps", {
  theme: "",
  trigger: "click",
  placement: "bottomLeft",
  showArrow: false,
  closeAfterClick: true,
  closeAfterMouseLeave: false,
  onClick: _lodash.noop
});
var _default = Dropdown;
exports["default"] = _default;