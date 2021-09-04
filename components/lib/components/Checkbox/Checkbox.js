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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Checkbox = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Checkbox, _Component);

  var _super = _createSuper(Checkbox);

  function Checkbox(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Checkbox);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (e) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          value = _this$props.value;
      var checked = _this.state.checked;

      if (!_this.isControlled) {
        _this.setState({
          checked: !checked
        });
      }

      onChange(!checked, value, e);
    });

    if ("checked" in _this.props) {
      _this.isControlled = true;
    }

    _this.state = {
      checked: !!_this.props.checked
    };
    return _this;
  }

  (0, _createClass2["default"])(Checkbox, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.isControlled && this.props.checked !== prevState.checked) {
        this.setState({
          checked: this.props.checked
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          children = _this$props2.children,
          onChange = _this$props2.onChange,
          indeterminate = _this$props2.indeterminate,
          checked = _this$props2.checked,
          rest = (0, _objectWithoutProperties2["default"])(_this$props2, ["className", "children", "onChange", "indeterminate", "checked"]);
      return /*#__PURE__*/_react["default"].createElement("label", {
        className: (0, _classnames["default"])("checkbox", {
          indeterminate: indeterminate,
          checked: this.state.checked,
          disabled: rest.disabled
        }, className)
      }, /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
        type: "checkbox"
      }, rest, {
        checked: this.state.checked,
        onChange: this.handleChange
      })), children ? /*#__PURE__*/_react["default"].createElement("span", {
        className: "label-value"
      }, children) : null);
    }
  }]);
  return Checkbox;
}(_react.Component);

exports["default"] = Checkbox;
(0, _defineProperty2["default"])(Checkbox, "propTypes", {
  name: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].bool, _propTypes["default"].number]),
  checked: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  indeterminate: _propTypes["default"].bool,
  onChange: _propTypes["default"].func
});
(0, _defineProperty2["default"])(Checkbox, "defaultProps", {
  indeterminate: false,
  onChange: function onChange() {}
});