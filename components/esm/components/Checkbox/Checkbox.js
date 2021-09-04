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

var Checkbox = /*#__PURE__*/function (_Component) {
  _inherits(Checkbox, _Component);

  var _super = _createSuper(Checkbox);

  function Checkbox(props) {
    var _this;

    _classCallCheck(this, Checkbox);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
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

  _createClass(Checkbox, [{
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
          rest = _objectWithoutProperties(_this$props2, ["className", "children", "onChange", "indeterminate", "checked"]);

      return /*#__PURE__*/React.createElement("label", {
        className: classNames("checkbox", {
          indeterminate: indeterminate,
          checked: this.state.checked,
          disabled: rest.disabled
        }, className)
      }, /*#__PURE__*/React.createElement("input", _extends({
        type: "checkbox"
      }, rest, {
        checked: this.state.checked,
        onChange: this.handleChange
      })), children ? /*#__PURE__*/React.createElement("span", {
        className: "label-value"
      }, children) : null);
    }
  }]);

  return Checkbox;
}(Component);

_defineProperty(Checkbox, "propTypes", {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
  checked: PropTypes.bool,
  children: PropTypes.node,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func
});

_defineProperty(Checkbox, "defaultProps", {
  indeterminate: false,
  onChange: function onChange() {}
});

export { Checkbox as default };