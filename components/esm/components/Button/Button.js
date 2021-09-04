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

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../Icon";
import Loading from "../Loading";

var Button = /*#__PURE__*/function (_PureComponent) {
  _inherits(Button, _PureComponent);

  var _super = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super.apply(this, arguments);
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          type = _this$props.type,
          htmlType = _this$props.htmlType,
          className = _this$props.className,
          size = _this$props.size,
          icon = _this$props.icon,
          iconType = _this$props.iconType,
          iconSize = _this$props.iconSize,
          loading = _this$props.loading,
          ghost = _this$props.ghost,
          rest = _objectWithoutProperties(_this$props, ["children", "type", "htmlType", "className", "size", "icon", "iconType", "iconSize", "loading", "ghost"]);
      return /*#__PURE__*/React.createElement("button", _extends({
        className: classNames("button", "button-".concat(type), "button-size-".concat(size), {
          "has-icon": icon,
          "is-loading": loading,
          "is-ghost": ghost
        }, className),
        type: htmlType
      }, rest), icon && /*#__PURE__*/React.createElement(Icon, {
        name: icon,
        type: iconType,
        size: iconSize
      }), children && /*#__PURE__*/React.createElement("div", {
        className: "button-content"
      }, children), loading && /*#__PURE__*/React.createElement(Loading, {
        size: 16
      }));
    }
  }]);

  return Button;
}(PureComponent);

_defineProperty(Button, "propTypes", {
  type: PropTypes.string,
  htmlType: PropTypes.oneOf(["submit", "button", "reset"]),
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(["small", "normal", "large"]),
  icon: PropTypes.string,
  iconSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  iconType: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool
});

_defineProperty(Button, "defaultProps", {
  type: "default",
  htmlType: "button",
  size: "normal",
  icon: "",
  iconType: "dark"
});

export { Button as default };