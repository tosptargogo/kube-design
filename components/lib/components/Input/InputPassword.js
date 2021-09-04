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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _Icon = _interopRequireDefault(require("../Icon"));

var _Input = _interopRequireDefault(require("./Input"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var InputPassword = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(InputPassword, _PureComponent);

  var _super = _createSuper(InputPassword);

  function InputPassword(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, InputPassword);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleInputChange", function (e, value) {
      var onChange = _this.props.onChange;

      _this.setState({
        value: value
      });

      if (onChange && onChange !== _lodash.noop) {
        onChange(e, value);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function () {
      _this.setState(function (prevState) {
        return {
          type: prevState.type === "text" ? "password" : "text"
        };
      });
    });
    _this.state = {
      type: "password",
      value: String(props.value || props.defaultValue)
    };
    return _this;
  }

  (0, _createClass2["default"])(InputPassword, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          type = _this$state.type,
          value = _this$state.value;
      var _this$props = this.props,
          defaultValue = _this$props.defaultValue,
          rest = (0, _objectWithoutProperties2["default"])(_this$props, ["defaultValue"]);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "input-password has-icons-right"
      }, /*#__PURE__*/_react["default"].createElement(_Input["default"], (0, _extends2["default"])({}, rest, {
        type: type,
        value: value,
        onChange: this.handleInputChange
      })), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: "is-right",
        name: type === "text" ? "eye" : "eye-closed",
        size: "small",
        clickable: true,
        onClick: this.handleChange
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if ("value" in nextProps && nextProps.value !== prevState.value) {
        return {
          value: nextProps.value
        };
      }

      return null;
    }
  }]);
  return InputPassword;
}(_react.PureComponent);

(0, _defineProperty2["default"])(InputPassword, "propTypes", {
  value: _propTypes["default"].string,
  defaultValue: _propTypes["default"].string,
  onChange: _propTypes["default"].func
});
(0, _defineProperty2["default"])(InputPassword, "defaultProps", {
  defaultValue: "",
  onChange: _lodash.noop
});
var _default = InputPassword;
exports["default"] = _default;