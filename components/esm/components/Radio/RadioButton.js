import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Radio from "./Radio";

var RadioButton = /*#__PURE__*/function (_Component) {
  _inherits(RadioButton, _Component);

  var _super = _createSuper(RadioButton);

  function RadioButton() {
    _classCallCheck(this, RadioButton);

    return _super.apply(this, arguments);
  }

  _createClass(RadioButton, [{
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
      radioProps.className = classNames(radioProps.className, "button");
      return /*#__PURE__*/React.createElement(Radio, radioProps);
    }
  }]);

  return RadioButton;
}(Component);

_defineProperty(RadioButton, "propTypes", {
  disabled: PropTypes.bool,
  value: PropTypes.any,
  style: PropTypes.object
});

_defineProperty(RadioButton, "contextTypes", {
  radioGroup: PropTypes.any
});

_defineProperty(RadioButton, "defaultProps", {
  prefixCls: "radio-button",
  style: {}
});

export default RadioButton;