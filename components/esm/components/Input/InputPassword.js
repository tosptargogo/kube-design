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

import React, { PureComponent } from "react";
import propTypes from "prop-types";
import { noop } from "lodash";
import Icon from "../Icon";
import Input from "./Input";

var InputPassword = /*#__PURE__*/function (_PureComponent) {
  _inherits(InputPassword, _PureComponent);

  var _super = _createSuper(InputPassword);

  function InputPassword(props) {
    var _this;

    _classCallCheck(this, InputPassword);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (e, value) {
      var onChange = _this.props.onChange;

      _this.setState({
        value: value
      });

      if (onChange && onChange !== noop) {
        onChange(e, value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function () {
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

  _createClass(InputPassword, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          type = _this$state.type,
          value = _this$state.value;

      var _this$props = this.props,
          defaultValue = _this$props.defaultValue,
          rest = _objectWithoutProperties(_this$props, ["defaultValue"]);

      return /*#__PURE__*/React.createElement("div", {
        className: "input-password has-icons-right"
      }, /*#__PURE__*/React.createElement(Input, _extends({}, rest, {
        type: type,
        value: value,
        onChange: this.handleInputChange
      })), /*#__PURE__*/React.createElement(Icon, {
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
}(PureComponent);

_defineProperty(InputPassword, "propTypes", {
  value: propTypes.string,
  defaultValue: propTypes.string,
  onChange: propTypes.func
});

_defineProperty(InputPassword, "defaultProps", {
  defaultValue: "",
  onChange: noop
});

export default InputPassword;