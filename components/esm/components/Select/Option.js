import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Checkbox from "../Checkbox/Checkbox";
import Icon from "../Icon";

var Option = /*#__PURE__*/function (_React$Component) {
  _inherits(Option, _React$Component);

  var _super = _createSuper(Option);

  function Option() {
    var _this;

    _classCallCheck(this, Option);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "renderIcon", function () {
      var isActive = _this.props.isActive;
      return isActive ? /*#__PURE__*/React.createElement("div", {
        className: "select-option-icon"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        type: "coloured"
      })) : null;
    });

    _defineProperty(_assertThisInitialized(_this), "renderCheckbox", function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          isActive = _this$props.isActive;
      return /*#__PURE__*/React.createElement(Checkbox, {
        size: "small",
        checked: isActive,
        disabled: disabled,
        onChange: _this.handleCancelBubble
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderContent", function () {
      var _this$props2 = _this.props,
          multi = _this$props2.multi,
          children = _this$props2.children;
      return multi ? /*#__PURE__*/React.createElement(React.Fragment, null, _this.renderCheckbox(), /*#__PURE__*/React.createElement("span", {
        className: "select-option-label"
      }, children)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        className: "select-option-label"
      }, children), _this.renderIcon());
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancelBubble", function (checked, value, e) {
      _this.props.onClick(_this.props.option);
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectedValue", function (e) {
      e.stopPropagation();
      e.preventDefault();

      _this.props.onClick(_this.props.option);
    });

    return _this;
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          disabled = _this$props3.disabled,
          isActive = _this$props3.isActive;
      return /*#__PURE__*/React.createElement("div", {
        className: classNames("select-option", {
          "select-option-disabled": disabled,
          "select-option-active": isActive
        }),
        onClick: this.handleSelectedValue
      }, this.renderContent());
    }
  }]);

  return Option;
}(React.Component);

_defineProperty(Option, "propTypes", {
  isActive: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  multi: PropTypes.bool
});

_defineProperty(Option, "defaultProps", {
  onChange: function onChange() {},
  multi: false
});

export { Option as default };