"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var _Radio = _interopRequireDefault(require("./Radio"));

var _RadioButton = _interopRequireDefault(require("./RadioButton"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var RadioGroup = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RadioGroup, _Component);

  var _super = _createSuper(RadioGroup);

  function RadioGroup(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RadioGroup);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (e) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          name = _this$props.name;
      var stateValue = _this.state.value;
      var value = e.target.value;
      if (!e.target.checked) return;

      if (!("value" in _this.props)) {
        _this.setState({
          value: value
        });
      }

      if ((0, _lodash.isFunction)(onChange) && value !== stateValue) {
        onChange(value, name);
      }
    });
    var newValue;

    if ("value" in props) {
      newValue = props.value;
    } else if ("defaultValue" in props) {
      newValue = props.defaultValue;
    }

    _this.state = {
      value: newValue
    };
    return _this;
  }

  (0, _createClass2["default"])(RadioGroup, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _this$props2 = this.props,
          disabled = _this$props2.disabled,
          name = _this$props2.name,
          buttonWidth = _this$props2.buttonWidth;
      var value = this.state.value;
      return {
        radioGroup: {
          onChange: this.handleChange,
          value: value,
          disabled: disabled,
          name: name,
          buttonWidth: buttonWidth
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          options = _this$props3.options,
          className = _this$props3.className,
          wrapClassName = _this$props3.wrapClassName,
          prefixCls = _this$props3.prefixCls,
          name = _this$props3.name,
          style = _this$props3.style,
          children = _this$props3.children,
          disabled = _this$props3.disabled,
          mode = _this$props3.mode;
      var value = this.state.value;
      var newChildren = children;

      if (options && options.length > 0) {
        newChildren = options.map(function (option) {
          var restProps = {
            name: name,
            className: className
          };
          var newLabel = null;

          if (typeof option === "string") {
            restProps.value = option;
            restProps.checked = value === option;
            restProps.disabled = disabled;
            newLabel = option;
          } else {
            restProps.value = option.value;
            restProps.checked = value === option.value;
            restProps.disabled = option.disabled || disabled;
            newLabel = option.label;
          }

          var RadioComponent = mode === "button" ? _RadioButton["default"] : _Radio["default"];
          return /*#__PURE__*/_react["default"].createElement(RadioComponent, (0, _extends2["default"])({
            key: "radio-".concat(restProps.value)
          }, restProps, {
            onChange: _this2.handleChange
          }), newLabel);
        });
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])(prefixCls, wrapClassName, {
          "radio-group-button": mode === "button"
        }),
        style: style
      }, newChildren);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ("value" in nextProps) {
        return {
          value: nextProps.value
        };
      }

      var newValue = null;
      var matched = false;

      _react["default"].Children.forEach(nextProps.children, function (radio) {
        if (radio && radio.props && radio.props.checked) {
          newValue = radio.props.value;
          matched = true;
        }
      });

      return matched ? {
        value: newValue
      } : null;
    }
  }]);
  return RadioGroup;
}(_react.Component);

(0, _defineProperty2["default"])(RadioGroup, "propTypes", {
  options: _propTypes["default"].array,
  value: _propTypes["default"].any,
  defaultValue: _propTypes["default"].any,
  onChange: _propTypes["default"].func,
  disabled: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  style: _propTypes["default"].object,
  className: _propTypes["default"].string,
  wrapClassName: _propTypes["default"].string,
  prefixCls: _propTypes["default"].string,
  children: _propTypes["default"].node,
  mode: _propTypes["default"].string,
  buttonWidth: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
});
(0, _defineProperty2["default"])(RadioGroup, "childContextTypes", {
  radioGroup: _propTypes["default"].any
});
(0, _defineProperty2["default"])(RadioGroup, "defaultProps", {
  prefixCls: "radio-group",
  buttonWidth: "auto",
  mode: ""
});
var _default = RadioGroup;
exports["default"] = _default;