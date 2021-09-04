import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { isFunction } from "lodash";
import Radio from "./Radio";
import RadioButton from "./RadioButton";

var RadioGroup = /*#__PURE__*/function (_Component) {
  _inherits(RadioGroup, _Component);

  var _super = _createSuper(RadioGroup);

  function RadioGroup(props) {
    var _this;

    _classCallCheck(this, RadioGroup);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
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

      if (isFunction(onChange) && value !== stateValue) {
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

  _createClass(RadioGroup, [{
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

          var RadioComponent = mode === "button" ? RadioButton : Radio;
          return /*#__PURE__*/React.createElement(RadioComponent, _extends({
            key: "radio-".concat(restProps.value)
          }, restProps, {
            onChange: _this2.handleChange
          }), newLabel);
        });
      }

      return /*#__PURE__*/React.createElement("div", {
        className: classNames(prefixCls, wrapClassName, {
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
      React.Children.forEach(nextProps.children, function (radio) {
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
}(Component);

_defineProperty(RadioGroup, "propTypes", {
  options: PropTypes.array,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  prefixCls: PropTypes.string,
  children: PropTypes.node,
  mode: PropTypes.string,
  buttonWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
});

_defineProperty(RadioGroup, "childContextTypes", {
  radioGroup: PropTypes.any
});

_defineProperty(RadioGroup, "defaultProps", {
  prefixCls: "radio-group",
  buttonWidth: "auto",
  mode: ""
});

export default RadioGroup;