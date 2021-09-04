import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
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

var Badge = /*#__PURE__*/function (_Component) {
  _inherits(Badge, _Component);

  var _super = _createSuper(Badge);

  function Badge() {
    var _this;

    _classCallCheck(this, Badge);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "renderBadge", function () {
      var _this$props = _this.props,
          status = _this$props.status,
          text = _this$props.text,
          overflowCount = _this$props.overflowCount,
          count = _this$props.count;
      var number = "";

      if (text) {
        number = text;
      } else if (overflowCount && count > overflowCount) {
        number = "".concat(overflowCount, "+");
      } else {
        number = count;
      }

      return /*#__PURE__*/React.createElement("span", {
        className: classNames("is-".concat(status), "badge")
      }, number);
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var _this$props2 = _this.props,
          style = _this$props2.style,
          className = _this$props2.className,
          children = _this$props2.children;
      return /*#__PURE__*/React.createElement("div", {
        className: classNames("badge-wrapper", className),
        style: style
      }, children, _this.renderBadge());
    });

    return _this;
  }

  return Badge;
}(Component);

_defineProperty(Badge, "propTypes", {
  count: PropTypes.number,
  children: PropTypes.node,
  overflowCount: PropTypes.number,
  status: PropTypes.oneOf(["default", "success", "error", "warning"]),
  style: PropTypes.object,
  text: PropTypes.string,
  className: PropTypes.string
});

_defineProperty(Badge, "defaultProps", {
  status: "success",
  overflowCount: 99,
  count: 0
});

export default Badge;