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

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = require("lodash");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Input = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Input, _Component);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Input);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (e) {
      var value = e.target.value;
      var _this$props = _this.props,
          propsValue = _this$props.value,
          onChange = _this$props.onChange;
      var newValue = propsValue || value;

      _this.setState({
        value: newValue
      });

      onChange(e, value);
    });
    _this.state = {
      value: "value" in props ? props.value : props.defaultValue
    };
    return _this;
  }

  (0, _createClass2["default"])(Input, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          innerRef = _this$props2.innerRef,
          rest = (0, _objectWithoutProperties2["default"])(_this$props2, ["className", "innerRef"]);
      var value = this.state.value;
      return /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({}, (0, _lodash.omit)(rest, "onChange", "value", "defaultValue"), {
        ref: innerRef,
        value: value,
        onChange: this.handleChange,
        className: (0, _classnames["default"])("input", className)
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
  return Input;
}(_react.Component);

exports["default"] = Input;
(0, _defineProperty2["default"])(Input, "propTypes", {
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  type: _propTypes["default"].string,
  onChange: _propTypes["default"].func
});
(0, _defineProperty2["default"])(Input, "defaultProps", {
  type: "text",
  defaultValue: "",
  onChange: function onChange() {}
});