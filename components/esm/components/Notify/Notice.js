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
import classNames from "classnames";
import PropTypes from "prop-types";
import Icon from "../Icon";

var Notice = /*#__PURE__*/function (_Component) {
  _inherits(Notice, _Component);

  var _super = _createSuper(Notice);

  function Notice() {
    var _this;

    _classCallCheck(this, Notice);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "close", function () {
      _this.clearCloseTimer();

      _this.props.onClose();
    });

    _defineProperty(_assertThisInitialized(_this), "startCloseTimer", function () {
      var duration = _this.props.duration;
      if (duration === 0) return;
      _this.closeTimer = setTimeout(function () {
        _this.close();
      }, duration);
    });

    _defineProperty(_assertThisInitialized(_this), "clearCloseTimer", function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    });

    return _this;
  }

  _createClass(Notice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCloseTimer();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          type = _this$props.type,
          closable = _this$props.closable,
          children = _this$props.children,
          prefixCls = _this$props.prefixCls;
      return /*#__PURE__*/React.createElement("div", {
        className: classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-closable"), closable), _defineProperty(_classNames, className, !!className), _classNames), "notice-".concat(type)),
        style: style,
        onMouseEnter: this.clearCloseTimer,
        onMouseLeave: this.startCloseTimer
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, children), closable ? /*#__PURE__*/React.createElement(Icon, {
        className: "".concat(prefixCls, "-close"),
        name: "close",
        onClick: this.close
      }) : null);
    }
  }]);

  return Notice;
}(Component);

_defineProperty(Notice, "propTypes", {
  duration: PropTypes.number,
  onClose: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
  type: PropTypes.string,
  closable: PropTypes.bool,
  children: PropTypes.node,
  prefixCls: PropTypes.string
});

_defineProperty(Notice, "defaultProps", {
  duration: 3000,
  closable: false,
  prefixCls: "notice"
});

export default Notice;