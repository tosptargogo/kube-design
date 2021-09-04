import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
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
import classNames from "classnames";
import Checkbox from "./Checkbox";

var CheckboxGroup = /*#__PURE__*/function (_Component) {
  _inherits(CheckboxGroup, _Component);

  var _super = _createSuper(CheckboxGroup);

  function CheckboxGroup() {
    var _this;

    _classCallCheck(this, CheckboxGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      values: _this.props.value || []
    });

    _defineProperty(_assertThisInitialized(_this), "handleOptionChange", function (checked, value) {
      var onChange = _this.props.onChange;
      var values = _this.state.values;
      var newValues = [];

      if (checked) {
        newValues = [].concat(_toConsumableArray(values), [value]);
      } else {
        newValues = values.filter(function (item) {
          return item !== value;
        });
      }

      _this.setState({
        values: newValues
      }, function () {
        return onChange(newValues);
      });
    });

    return _this;
  }

  _createClass(CheckboxGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          name = _this$props.name,
          direction = _this$props.direction,
          options = _this$props.options,
          children = _this$props.children;
      var values = this.state.values;

      if (children && children.length > 0) {
        var childContent = React.Children.map(children, function (child) {
          return /*#__PURE__*/React.cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
            name: name,
            checked: values.includes(child.props.value),
            onChange: _this2.handleOptionChange
          }));
        });
        return /*#__PURE__*/React.createElement("div", {
          "data-direction": direction,
          className: classNames("checkbox-group", className)
        }, childContent);
      }

      return /*#__PURE__*/React.createElement("div", {
        "data-direction": direction,
        className: classNames("checkbox-group", className)
      }, options.map(function (option) {
        return /*#__PURE__*/React.createElement(Checkbox, {
          key: option.value,
          name: name,
          value: option.value,
          checked: values.includes(option.value),
          onChange: _this2.handleOptionChange
        }, option.label);
      }));
    }
  }]);

  return CheckboxGroup;
}(Component);

_defineProperty(CheckboxGroup, "propTypes", {
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    value: PropTypes.any,
    label: PropTypes.string,
    disabled: PropTypes.bool
  })])),
  value: PropTypes.array,
  onChange: PropTypes.func,
  direction: PropTypes.oneOf(["row", "column"]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node
});

_defineProperty(CheckboxGroup, "defaultProps", {
  direction: "row",
  options: [],
  value: [],
  onChange: function onChange() {}
});

export { CheckboxGroup as default };