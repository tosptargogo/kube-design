"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = require("lodash");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Menu = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Menu, _Component);

  var _super = _createSuper(Menu);

  function Menu() {
    var _this;

    (0, _classCallCheck2["default"])(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (e, key, value) {
      var onClick = _this.props.onClick;

      if ((0, _lodash.isFunction)(onClick)) {
        onClick(e, key, value);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderMenuItem", function (component, index) {
      if (!component) {
        return null;
      }

      if (!component) return null;
      var selectedKey = _this.props.selectedKey;
      var newChildProps = {
        specKey: component.key || "menu-".concat(index),
        onClick: _this.handleClick,
        selected: component.key === selectedKey
      };
      return /*#__PURE__*/(0, _react.cloneElement)(component, newChildProps);
    });
    return _this;
  }

  (0, _createClass2["default"])(Menu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          style = _this$props.style,
          width = _this$props.width,
          label = _this$props.label;
      var classString = (0, _classnames["default"])("menu", className);
      var widthStyle = width ? {
        width: width
      } : null;
      return /*#__PURE__*/_react["default"].createElement("ul", {
        className: classString,
        style: Object.assign({}, style, widthStyle)
      }, label && /*#__PURE__*/_react["default"].createElement("div", {
        className: "menu-label"
      }, label), _react["default"].Children.map(children, this.renderMenuItem));
    }
  }]);
  return Menu;
}(_react.Component);

(0, _defineProperty2["default"])(Menu, "propTypes", {
  onClick: _propTypes["default"].func,
  style: _propTypes["default"].object,
  width: _propTypes["default"].number,
  label: _propTypes["default"].string,
  className: _propTypes["default"].string,
  children: _propTypes["default"].node,
  selectedKey: _propTypes["default"].string
});
(0, _defineProperty2["default"])(Menu, "defaultProps", {
  onClick: _lodash.noop,
  style: {}
});
var _default = Menu;
exports["default"] = _default;