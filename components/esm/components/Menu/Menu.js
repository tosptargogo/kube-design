import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component, cloneElement } from "react";
import classnames from "classnames";
import { noop, isFunction } from "lodash";
import PropTypes from "prop-types";

var Menu = /*#__PURE__*/function (_Component) {
  _inherits(Menu, _Component);

  var _super = _createSuper(Menu);

  function Menu() {
    var _this;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e, key, value) {
      var onClick = _this.props.onClick;

      if (isFunction(onClick)) {
        onClick(e, key, value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderMenuItem", function (component, index) {
      if (!component) {
        return null;
      }

      if (!component) return null;
      var selectedKey = _this.props.selectedKey;
      var newChildProps = {
        specKey: component.key || "menu-".concat(index),
        onClick: _this.handleClick,
        selected: component.key === selectedKey
      };
      return /*#__PURE__*/cloneElement(component, newChildProps);
    });

    return _this;
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          style = _this$props.style,
          width = _this$props.width,
          label = _this$props.label;
      var classString = classnames("menu", className);
      var widthStyle = width ? {
        width: width
      } : null;
      return /*#__PURE__*/React.createElement("ul", {
        className: classString,
        style: Object.assign({}, style, widthStyle)
      }, label && /*#__PURE__*/React.createElement("div", {
        className: "menu-label"
      }, label), React.Children.map(children, this.renderMenuItem));
    }
  }]);

  return Menu;
}(Component);

_defineProperty(Menu, "propTypes", {
  onClick: PropTypes.func,
  style: PropTypes.object,
  width: PropTypes.number,
  label: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  selectedKey: PropTypes.string
});

_defineProperty(Menu, "defaultProps", {
  onClick: noop,
  style: {}
});

export default Menu;