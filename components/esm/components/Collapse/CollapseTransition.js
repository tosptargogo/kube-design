import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from "react";
import PropTypes from "prop-types";

var CollapseTransition = /*#__PURE__*/function (_Component) {
  _inherits(CollapseTransition, _Component);

  var _super = _createSuper(CollapseTransition);

  function CollapseTransition() {
    _classCallCheck(this, CollapseTransition);

    return _super.apply(this, arguments);
  }

  _createClass(CollapseTransition, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var visible = this.props.visible;
      this.beforeEnter();

      if (visible) {
        this.enter();
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this$props = this.props,
          visible = _this$props.visible,
          children = _this$props.children;

      if (visible !== nextProps.visible) {
        this.triggerChange(nextProps.visible);
      }

      if (children !== nextProps.children) {
        return true;
      }

      return false;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.beforeLeave();
      this.leave();
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
    }
  }, {
    key: "triggerChange",
    value: function triggerChange(visible) {
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);

      if (visible) {
        this.beforeEnter();
        this.enter();
      } else {
        this.beforeLeave();
        this.leave();
      }
    }
  }, {
    key: "beforeEnter",
    value: function beforeEnter() {
      var el = this.selfRef;
      el.dataset.oldOverflow = el.style.overflow;
      el.style.height = 0;
    }
  }, {
    key: "enter",
    value: function enter() {
      var _this = this;

      var el = this.selfRef;
      el.style.display = "block";

      if (el.scrollHeight !== 0) {
        el.style.height = "".concat(el.scrollHeight, "px");
      } else {
        el.style.height = "";
      }

      el.style.overflow = "hidden";
      this.enterTimer = setTimeout(function () {
        return _this.afterEnter();
      }, 300);
    }
  }, {
    key: "afterEnter",
    value: function afterEnter() {
      var el = this.selfRef;
      el.style.display = "block";
      el.style.height = "";
      el.style.overflow = el.dataset.oldOverflow;
    }
  }, {
    key: "beforeLeave",
    value: function beforeLeave() {
      var el = this.selfRef;
      el.dataset.oldOverflow = el.style.overflow;
      el.style.display = "block";

      if (el.scrollHeight !== 0) {
        el.style.height = "".concat(el.scrollHeight, "px");
      }

      el.style.overflow = "hidden";
    }
  }, {
    key: "leave",
    value: function leave() {
      var _this2 = this;

      var el = this.selfRef;

      if (el.scrollHeight !== 0) {
        el.style.height = 0;
      }

      this.leaveTimer = setTimeout(function () {
        return _this2.afterLeave();
      }, 300);
    }
  }, {
    key: "afterLeave",
    value: function afterLeave() {
      var el = this.selfRef;
      if (!el) return;
      el.style.display = "none";
      el.style.height = "";
      el.style.overflow = el.dataset.oldOverflow;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;
      return /*#__PURE__*/React.createElement("div", {
        className: "collapse-transition",
        ref: function ref(e) {
          _this3.selfRef = e;
        }
      }, children);
    }
  }]);

  return CollapseTransition;
}(Component);

_defineProperty(CollapseTransition, "propTypes", {
  visible: PropTypes.bool,
  children: PropTypes.node
});

export { CollapseTransition as default };