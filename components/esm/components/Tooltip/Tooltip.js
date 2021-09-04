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

import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Popper from "../Popper";

var Tooltip = /*#__PURE__*/function (_Component) {
  _inherits(Tooltip, _Component);

  var _super = _createSuper(Tooltip);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    return _super.apply(this, arguments);
  }

  _createClass(Tooltip, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          content = _this$props.content,
          restProps = _objectWithoutProperties(_this$props, ["children", "className", "content"]);

      if ([undefined, null, ""].includes(content)) return children;
      return /*#__PURE__*/React.createElement(Popper, _extends({}, restProps, {
        content: content,
        className: classNames("tooltip", className),
        type: "tooltip"
      }), children);
    }
  }]);

  return Tooltip;
}(Component);

_defineProperty(Tooltip, "propTypes", {
  always: PropTypes.bool,
  trigger: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  placement: PropTypes.string,
  children: PropTypes.node
});

_defineProperty(Tooltip, "defaultProps", {
  always: false,
  trigger: "hover",
  placement: "top"
});

export default Tooltip;