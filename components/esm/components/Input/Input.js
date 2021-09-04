import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
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
import {get, isUndefined, omit} from "lodash";

var Input = /*#__PURE__*/function (_Component) {
  _inherits(Input, _Component);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;
    _classCallCheck(this, Input);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var value = e.target.value;
      var _this$props = _this.props,
          propsValue = _this$props.value,

          formData = props.formData,
          onChange = _this$props.onChange;
      var newValue = propsValue || value;

      _this.setState({
        value: newValue
      });
      if (props.descdynamicvalue === 'true'){
         props.formdata.NodeIPCount = ""
       }
      
      onChange(e, value);
    });

    _this.state = {
      value: "value" in props ? props.value : props.defaultValue
    };
    return _this;
  }

  _createClass(Input, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          innerRef = _this$props2.innerRef,
          rest = _objectWithoutProperties(_this$props2, ["className", "innerRef"]);

      var value = this.state.value;


      return /*#__PURE__*/React.createElement("input", _extends({}, omit(rest, "onChange", "value", "defaultValue"), {
        ref: innerRef,
        value: value,
        onChange: this.handleChange,
        className: classNames("input", className)
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
}(Component);

_defineProperty(Input, "propTypes", {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  onChange: PropTypes.func
});

_defineProperty(Input, "defaultProps", {
  type: "text",
  defaultValue: "",
  onChange: function onChange() {}
});

export { Input as default };