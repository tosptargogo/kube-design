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
import Icon from "../Icon";
import CollapseTransition from "./CollapseTransition";

var CollapseItem = /*#__PURE__*/function (_Component) {
  _inherits(CollapseItem, _Component);

  var _super = _createSuper(CollapseItem);

  function CollapseItem() {
    var _this;

    _classCallCheck(this, CollapseItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleVisible", function () {
      var _this$props = _this.props,
          specKey = _this$props.specKey,
          handleVisible = _this$props.handleVisible,
          visible = _this$props.visible;
      handleVisible(specKey, !visible);
    });

    return _this;
  }

  _createClass(CollapseItem, [{
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _this$props2 = this.props,
          label = _this$props2.label,
          children = _this$props2.children,
          visible = _this$props2.visible,
          isLast = _this$props2.isLast,
          className = _this$props2.className,
          style = _this$props2.style;
      var prefixCls = "collapse";
      var classLabel = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-item-label"), true), _defineProperty(_classNames, "".concat(prefixCls, "-item-label-border-bottom"), !!visible), _defineProperty(_classNames, "".concat(prefixCls, "-item-label-last-border-bottom"), isLast && !visible), _classNames));
      var classContent = classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-item-content"), true), _defineProperty(_classNames2, "".concat(prefixCls, "-item-content-last-border-bottom"), isLast && !!visible), _classNames2));
      return /*#__PURE__*/React.createElement("li", {
        className: classNames("".concat(prefixCls, "-item"), className),
        style: style
      }, /*#__PURE__*/React.createElement("div", {
        className: classLabel,
        onClick: this.handleVisible
      }, label, /*#__PURE__*/React.createElement(Icon, {
        name: "caret-".concat(visible ? "up" : "down"),
        type: visible ? "dark" : "light",
        size: 20
      })), /*#__PURE__*/React.createElement(CollapseTransition, {
        visible: visible
      }, /*#__PURE__*/React.createElement("div", {
        className: classContent
      }, children)));
    }
  }]);

  return CollapseItem;
}(Component);

_defineProperty(CollapseItem, "propTypes", {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool,
  specKey: PropTypes.string,
  isLast: PropTypes.bool,
  handleVisible: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
});

_defineProperty(CollapseItem, "defaultProps", {
  visible: false
});

export { CollapseItem as default };