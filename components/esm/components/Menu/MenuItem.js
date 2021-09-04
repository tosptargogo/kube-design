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
import classnames from "classnames";

var MenuItem = /*#__PURE__*/function (_Component) {
  _inherits(MenuItem, _Component);

  var _super = _createSuper(MenuItem);

  function MenuItem() {
    var _this;

    _classCallCheck(this, MenuItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var _this$props = _this.props,
          specKey = _this$props.specKey,
          value = _this$props.value,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled;
      if (disabled) return;
      onClick(e, specKey, value);
    });

    return _this;
  }

  _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          children = _this$props2.children,
          disabled = _this$props2.disabled,
          selected = _this$props2.selected;
      return /*#__PURE__*/React.createElement("li", {
        className: classnames("menu-item", className, {
          "menu-item-disabled": disabled,
          "menu-item-selected": selected
        }),
        onClick: this.handleClick
      }, children);
    }
  }]);

  return MenuItem;
}(Component);

_defineProperty(MenuItem, "menuType", "MenuItem");

_defineProperty(MenuItem, "propTypes", {
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  className: PropTypes.string,
  value: PropTypes.any,
  specKey: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any.isRequired
});

export default MenuItem;