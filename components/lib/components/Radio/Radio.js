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

var _classnames = _interopRequireDefault(require("classnames"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Radio = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Radio, _Component);

  var _super = _createSuper(Radio);

  function Radio(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Radio);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange;
      var radioGroup = _this.context.radioGroup;
      if (disabled) return;

      if (!("checked" in _this.props)) {
        _this.setState({
          checked: e.target.checked
        });
      }

      var params = {
        target: _objectSpread(_objectSpread({}, _this.props), {}, {
          checked: e.target.checked
        }),
        stopPropagation: function stopPropagation() {
          e.stopPropagation();
        },
        preventDefault: function preventDefault() {
          e.preventDefault();
        },
        nativeEvent: e.nativeEvent
      };

      if (radioGroup) {
        radioGroup.onChange(params);
        return;
      }

      if (onChange) {
        onChange(params);
      }
    });
    _this.state = {
      checked: props.checked || props.defaultChecked
    };
    return _this;
  }

  (0, _createClass2["default"])(Radio, [{
    key: "render",
    value: function render() {
      var _classNames;

      var props = this.props,
          context = this.context;
      var prefixCls = props.prefixCls,
          className = props.className,
          children = props.children,
          style = props.style,
          defaultChecked = props.defaultChecked,
          onChange = props.onChange,
          restProps = (0, _objectWithoutProperties2["default"])(props, ["prefixCls", "className", "children", "style", "defaultChecked", "onChange"]);
      var checked = this.state.checked;
      var radioGroup = context.radioGroup;

      var RadioProps = _objectSpread({}, restProps);

      if (radioGroup) {
        RadioProps.name = radioGroup.name;
        RadioProps.checked = (0, _lodash.isEqual)(props.value, radioGroup.value);
        RadioProps.disabled = props.disabled || radioGroup.disabled;
      } else {
        RadioProps.checked = checked;
      }

      var wrapperClassString = (0, _classnames["default"])(className, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper"), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper-checked"), RadioProps.checked), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper-disabled"), RadioProps.disabled), _classNames));
      return /*#__PURE__*/_react["default"].createElement("label", {
        className: (0, _classnames["default"])(prefixCls, wrapperClassString, {
          checked: RadioProps.checked,
          disabled: RadioProps.disabled
        }, className),
        style: style
      }, /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
        type: "radio",
        onChange: this.handleChange
      }, RadioProps)), children ? /*#__PURE__*/_react["default"].createElement("span", {
        className: "label-value"
      }, children) : null);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if ("checked" in nextProps && nextProps.checked !== prevState.checked) {
        return {
          checked: nextProps.checked
        };
      }

      return null;
    }
  }]);
  return Radio;
}(_react.Component);

(0, _defineProperty2["default"])(Radio, "propTypes", {
  name: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  checked: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  prefixCls: _propTypes["default"].string,
  style: _propTypes["default"].object,
  onChange: _propTypes["default"].func,
  value: _propTypes["default"].any,
  defaultChecked: _propTypes["default"].bool,
  children: _propTypes["default"].node
});
(0, _defineProperty2["default"])(Radio, "defaultProps", {
  prefixCls: "radio",
  defaultChecked: false
});
(0, _defineProperty2["default"])(Radio, "contextTypes", {
  radioGroup: _propTypes["default"].any
});
var _default = Radio;
exports["default"] = _default;