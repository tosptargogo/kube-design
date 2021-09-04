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
import classNames from "classnames";

var TabPanel = /*#__PURE__*/function (_Component) {
  _inherits(TabPanel, _Component);

  var _super = _createSuper(TabPanel);

  function TabPanel(props) {
    var _this;

    _classCallCheck(this, TabPanel);

    _this = _super.call(this, props);
    _this.state = {
      isActive: props.isActive
    };
    return _this;
  }

  _createClass(TabPanel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          children = _this$props.children;
      var isActive = this.state.isActive;

      if (isActive) {
        return /*#__PURE__*/React.createElement("div", {
          className: classNames("tab-panel", {
            "is-active": isActive
          }),
          key: name
        }, children);
      }

      return null;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if ("isActive" in nextProps && nextProps.isActive !== prevState.isActive) {
        return {
          isActive: nextProps.isActive
        };
      }

      return null;
    }
  }]);

  return TabPanel;
}(Component);

_defineProperty(TabPanel, "propTypes", {
  name: PropTypes.string,
  isActive: PropTypes.bool,
  children: PropTypes.node
});

_defineProperty(TabPanel, "defaultProps", {
  isActive: false
});

export default TabPanel;