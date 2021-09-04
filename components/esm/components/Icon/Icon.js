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
import svgSprite from "./spirits";
import domReady from "../../utils/domReady";
var idPrefix = "icon-";

var prepend = function prepend(el, target) {
  if (target.firstChild) {
    target.insertBefore(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
};

var appendSvg = function appendSvg() {
  var svgContainer = document.createElement("div");
  svgContainer.innerHTML = svgSprite;
  var svg = svgContainer.getElementsByTagName("svg")[0];

  if (svg) {
    svg.setAttribute("aria-hidden", "true");
    svg.style.position = "absolute";
    svg.style.width = 0;
    svg.style.height = 0;
    svg.style.overflow = "hidden";
    prepend(svg, document.body);
  }
};

if (typeof window !== "undefined" && !window.iconfont__svg__inject) {
  window.iconfont__svg__inject = true;
  domReady(appendSvg);
}

var Icon = /*#__PURE__*/function (_PureComponent) {
  _inherits(Icon, _PureComponent);

  var _super = _createSuper(Icon);

  function Icon() {
    _classCallCheck(this, Icon);

    return _super.apply(this, arguments);
  }

  _createClass(Icon, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          prefix = _this$props.prefix,
          name = _this$props.name,
          type = _this$props.type,
          size = _this$props.size,
          className = _this$props.className,
          onClick = _this$props.onClick,
          style = _this$props.style,
          clickable = _this$props.clickable,
          changeable = _this$props.changeable,
          disabled = _this$props.disabled,
          color = _this$props.color;
      var styles = style;
      var colorStyles = {};
      var isNumberSize = !isNaN(Number(size));

      if (isNumberSize) {
        styles = Object.assign({}, style, {
          width: "".concat(size, "px"),
          height: "".concat(size, "px")
        });
      }

      if (color) {
        colorStyles = {
          color: color.primary,
          fill: color.secondary
        };
      }

      return /*#__PURE__*/React.createElement("span", {
        style: styles,
        className: classNames("icon", (_classNames = {}, _defineProperty(_classNames, "is-".concat(size), !isNumberSize), _defineProperty(_classNames, "icon-clickable", clickable), _defineProperty(_classNames, "icon-changeable", changeable && !disabled), _defineProperty(_classNames, "icon-disabled", disabled), _classNames), className),
        onClick: disabled ? null : onClick
      }, /*#__PURE__*/React.createElement("svg", {
        className: "".concat(prefix, " ").concat(prefix, "-").concat(name, " ").concat(prefix, "-").concat(type),
        style: colorStyles
      }, /*#__PURE__*/React.createElement("use", {
        xlinkHref: "#".concat(idPrefix + name)
      })));
    }
  }]);

  return Icon;
}(PureComponent);

_defineProperty(Icon, "propTypes", {
  prefix: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  style: PropTypes.object,
  changeable: PropTypes.bool,
  clickable: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.object
});

_defineProperty(Icon, "defaultProps", {
  type: "dark",
  size: "small",
  prefix: "kubed-icon",
  style: {},
  changeable: false,
  clickable: false,
  disabled: false,
  onClick: function onClick() {}
});

export { Icon as default };