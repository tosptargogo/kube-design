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

var _Radio = _interopRequireDefault(require("./Radio"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var RadioButton = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RadioButton, _Component);

  var _super = _createSuper(RadioButton);

  function RadioButton() {
    (0, _classCallCheck2["default"])(this, RadioButton);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(RadioButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          disabled = _this$props.disabled,
          style = _this$props.style;
      var radioGroup = this.context.radioGroup;

      var radioProps = _objectSpread({}, this.props);

      if (radioGroup) {
        radioProps.onChange = radioGroup.onChange;
        radioProps.checked = value === radioGroup.value;
        radioProps.disabled = disabled || radioGroup.disabled;
        radioProps.style = _objectSpread(_objectSpread({}, style), {}, {
          width: radioGroup.buttonWidth
        });
      }

      delete radioProps.buttonWidth;
      radioProps.className = (0, _classnames["default"])(radioProps.className, "button");
      return /*#__PURE__*/_react["default"].createElement(_Radio["default"], radioProps);
    }
  }]);
  return RadioButton;
}(_react.Component);

(0, _defineProperty2["default"])(RadioButton, "propTypes", {
  disabled: _propTypes["default"].bool,
  value: _propTypes["default"].any,
  style: _propTypes["default"].object
});
(0, _defineProperty2["default"])(RadioButton, "contextTypes", {
  radioGroup: _propTypes["default"].any
});
(0, _defineProperty2["default"])(RadioButton, "defaultProps", {
  prefixCls: "radio-button",
  style: {}
});
var _default = RadioButton;
exports["default"] = _default;