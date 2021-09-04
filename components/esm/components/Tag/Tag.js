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
import classNames from "classnames";

var Tag = /*#__PURE__*/function (_React$Component) {
  _inherits(Tag, _React$Component);

  var _super = _createSuper(Tag);

  function Tag() {
    _classCallCheck(this, Tag);

    return _super.apply(this, arguments);
  }

  _createClass(Tag, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          children = _this$props.children,
          className = _this$props.className,
          color = _this$props.color;
      var style = {};

      if (color) {
        style.backgroundColor = color;
      }

      return /*#__PURE__*/React.createElement("span", {
        className: classNames("tag", "tag-".concat(type), className),
        style: style
      }, children);
    }
  }]);

  return Tag;
}(React.Component);

_defineProperty(Tag, "propTypes", {
  color: PropTypes.string,
  type: PropTypes.oneOf(["default", "secondary", "info", "warning", "primary"]),
  className: PropTypes.string
});

_defineProperty(Tag, "defaultProps", {
  type: "default"
});

export { Tag as default };