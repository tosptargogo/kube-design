import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
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
import { isEqual } from "lodash";
import classNames from "classnames";

var Radio = /*#__PURE__*/function (_Component) {
  _inherits(Radio, _Component);

  var _super = _createSuper(Radio);

  function Radio(props) {
    var _this;

    _classCallCheck(this, Radio);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
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

  _createClass(Radio, [{
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
          restProps = _objectWithoutProperties(props, ["prefixCls", "className", "children", "style", "defaultChecked", "onChange"]);

      var checked = this.state.checked;
      var radioGroup = context.radioGroup;

      var RadioProps = _objectSpread({}, restProps);

      if (radioGroup) {
        RadioProps.name = radioGroup.name;
        RadioProps.checked = isEqual(props.value, radioGroup.value);
        RadioProps.disabled = props.disabled || radioGroup.disabled;
      } else {
        RadioProps.checked = checked;
      }

      var wrapperClassString = classNames(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-wrapper"), true), _defineProperty(_classNames, "".concat(prefixCls, "-wrapper-checked"), RadioProps.checked), _defineProperty(_classNames, "".concat(prefixCls, "-wrapper-disabled"), RadioProps.disabled), _classNames));
      return /*#__PURE__*/React.createElement("label", {
        className: classNames(prefixCls, wrapperClassString, {
          checked: RadioProps.checked,
          disabled: RadioProps.disabled
        }, className),
        style: style
      }, /*#__PURE__*/React.createElement("input", _extends({
        type: "radio",
        onChange: this.handleChange
      }, RadioProps)), children ? /*#__PURE__*/React.createElement("span", {
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
}(Component);

_defineProperty(Radio, "propTypes", {
  name: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  className: PropTypes.string,
  prefixCls: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.any,
  defaultChecked: PropTypes.bool,
  children: PropTypes.node
});

_defineProperty(Radio, "defaultProps", {
  prefixCls: "radio",
  defaultChecked: false
});

_defineProperty(Radio, "contextTypes", {
  radioGroup: PropTypes.any
});

export default Radio;