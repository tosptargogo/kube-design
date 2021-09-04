import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-disable react/prefer-stateless-function */
import React, { Component, cloneElement, isValidElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { noop } from "lodash";
import Popper from "../Popper";

var Dropdown = /*#__PURE__*/function (_Component) {
  _inherits(Dropdown, _Component);

  var _super = _createSuper(Dropdown);

  function Dropdown() {
    _classCallCheck(this, Dropdown);

    return _super.apply(this, arguments);
  }

  _createClass(Dropdown, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          onClick = _this$props.onClick,
          theme = _this$props.theme,
          restProps = _objectWithoutProperties(_this$props, ["className", "children", "onClick", "theme"]);

      var isTriggerValid = /*#__PURE__*/isValidElement(children);
      return /*#__PURE__*/React.createElement(Popper, _extends({}, restProps, {
        type: "dropdown",
        className: classNames("dropdown", "dropdown-".concat(theme), className),
        onClick: onClick
      }), isTriggerValid ? /*#__PURE__*/cloneElement(children, {
        className: classNames("is-trigger", children.props.className)
      }) : /*#__PURE__*/React.createElement("span", {
        className: "is-trigger"
      }, children));
    }
  }]);

  return Dropdown;
}(Component);

_defineProperty(Dropdown, "propTypes", {
  trigger: PropTypes.string,
  theme: PropTypes.oneOf(["dark", ""]),
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func]),
  placement: PropTypes.string,
  showArrow: PropTypes.bool,
  className: PropTypes.string,
  visible: PropTypes.bool,
  closeAfterClick: PropTypes.bool,
  closeAfterMouseLeave: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func
});

_defineProperty(Dropdown, "defaultProps", {
  theme: "",
  trigger: "click",
  placement: "bottomLeft",
  showArrow: false,
  closeAfterClick: true,
  closeAfterMouseLeave: false,
  onClick: noop
});

export default Dropdown;