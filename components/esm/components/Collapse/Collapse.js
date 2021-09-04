import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component, cloneElement, Children } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { noop, remove, isEqual } from "lodash";
import CollapseItem from "./CollapseItem";

var Collapse = /*#__PURE__*/function (_Component) {
  _inherits(Collapse, _Component);

  var _super = _createSuper(Collapse);

  function Collapse(props) {
    var _this;

    _classCallCheck(this, Collapse);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleVisible", function (key, visible) {
      var _this$props = _this.props,
          accordion = _this$props.accordion,
          onChange = _this$props.onChange;
      var activeKey = _this.state.activeKey;

      var nextKey = _toConsumableArray(activeKey);

      if (accordion) {
        nextKey = visible ? [key] : [];
      }

      if (!accordion && visible && !activeKey.includes(key)) {
        nextKey = activeKey.concat(key);
      }

      if (!accordion && !visible && activeKey.includes(key)) {
        remove(nextKey, function (k) {
          return k === key;
        });
      }

      if (!("activeKey" in _this.props)) {
        _this.setState({
          activeKey: nextKey
        });
      }

      onChange(nextKey);
    });

    _defineProperty(_assertThisInitialized(_this), "renderChildren", function () {
      var children = _this.props.children;
      var activeKey = _this.state.activeKey;
      if (!children) return null;
      return Children.map(children, function (child, i) {
        if (!child) {
          return null;
        }

        return /*#__PURE__*/cloneElement(child, {
          visible: activeKey.includes(child.key),
          specKey: child.key,
          isLast: children.length - 1 === i,
          handleVisible: _this.handleVisible
        });
      });
    });

    _this.state = {
      activeKey: props.activeKey || props.defaultActiveKey || []
    };
    return _this;
  }

  _createClass(Collapse, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          style = _this$props2.style;
      return /*#__PURE__*/React.createElement("div", {
        className: classNames({
          collapse: !!children.length
        }, className),
        style: style
      }, /*#__PURE__*/React.createElement("ul", null, this.renderChildren()));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if ("activeKey" in nextProps && !isEqual(nextProps.activeKey, prevState.activeKey)) {
        return {
          activeKey: nextProps.activeKey
        };
      }

      return null;
    }
  }]);

  return Collapse;
}(Component);

_defineProperty(Collapse, "CollapseItem", CollapseItem);

_defineProperty(Collapse, "propTypes", {
  activeKey: PropTypes.arrayOf(PropTypes.string),
  defaultActiveKey: PropTypes.arrayOf(PropTypes.string),
  accordion: PropTypes.bool,
  children: PropTypes.node,
  onChange: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
});

_defineProperty(Collapse, "defaultProps", {
  accordion: false,
  onChange: noop
});

export { Collapse as default };