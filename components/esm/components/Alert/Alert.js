import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Icon from "../Icon";
var ICON_COLORS = {
  info: {
    primary: "#3385b0",
    secondary: "#fff"
  },
  error: {
    primary: "#8c3231",
    secondary: "#fff"
  },
  warning: {
    primary: "#8d663e",
    secondary: "#ffc781"
  }
};
var ICONS = {
  info: "check",
  error: "close",
  warning: "substract",
  "default": "information"
};

var Alert = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Alert, _React$PureComponent);

  var _super = _createSuper(Alert);

  function Alert() {
    _classCallCheck(this, Alert);

    return _super.apply(this, arguments);
  }

  _createClass(Alert, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          type = _this$props.type,
          title = _this$props.title,
          message = _this$props.message;
      return /*#__PURE__*/React.createElement("div", {
        className: classnames("alert", className, "alert-".concat(type))
      }, this.renderIcon(), /*#__PURE__*/React.createElement("div", {
        className: "alert-content"
      }, title && /*#__PURE__*/React.createElement("div", {
        className: "alert-title"
      }, title), /*#__PURE__*/React.createElement("span", {
        className: "alert-message"
      }, message)));
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var _this$props2 = this.props,
          icon = _this$props2.icon,
          type = _this$props2.type,
          title = _this$props2.title;

      if (!icon && !title) {
        return null;
      }

      var iconName = icon || ICONS[type];
      return /*#__PURE__*/React.createElement(Icon, {
        className: "alert-icon",
        name: iconName,
        size: !!title ? 32 : 20,
        color: ICON_COLORS[type]
      });
    }
  }]);

  return Alert;
}(React.PureComponent);

_defineProperty(Alert, "propTypes", {
  type: PropTypes.oneOf(["info", "error", "warning", "default"]),
  icon: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
});

_defineProperty(Alert, "defaultProps", {
  type: "default",
  message: ""
});

export { Alert as default };