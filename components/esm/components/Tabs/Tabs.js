import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { noop, isUndefined } from "lodash";
import TabPanel from "./TabPanel";

var Tabs = /*#__PURE__*/function (_Component) {
  _inherits(Tabs, _Component);

  var _super = _createSuper(Tabs);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function (activeName) {
      var _this$props = _this.props,
          propsActiveName = _this$props.activeName,
          onChange = _this$props.onChange;

      if (!propsActiveName) {
        _this.setState({
          activeName: activeName
        });
      }

      onChange(activeName);
    });

    _this.state = {
      activeName: props.activeName || props.defaultActiveName
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: "renderTabLabel",
    value: function renderTabLabel(tabProps, isActive, index) {
      var _this2 = this;

      var specKey = tabProps.name || "tab-".concat(index);
      var activeName = this.state.activeName;
      return /*#__PURE__*/React.createElement("li", {
        key: specKey,
        className: classNames({
          "is-active": isActive,
          "is-disabled": tabProps.disabled
        }),
        onClick: function onClick(e) {
          if (!tabProps.disabled && activeName !== specKey) {
            _this2.handleSelect(specKey);
          }
        }
      }, tabProps.label);
    }
  }, {
    key: "renderTabPanels",
    value: function renderTabPanels() {
      var _this3 = this;

      var tabLabels = [];
      var tabPanels = [];
      var children = this.props.children;
      var activeName = this.state.activeName;
      var hasActiveName = !isUndefined(activeName);
      var leastIndex = 0;
      var leastActive = false;
      Children.forEach(children, function (tab, index) {
        if ( /*#__PURE__*/React.isValidElement(tab)) {
          var tabProps = tab.props;
          var isActive = false;
          if (tabProps.disabled && !leastActive) leastIndex += 1;

          if (hasActiveName && tabProps.name === activeName || !hasActiveName && index === leastIndex) {
            isActive = true;
            leastActive = true;
          }

          var tabLabel = _this3.renderTabLabel(tabProps, isActive, index);

          tabLabels.push(tabLabel);
          var tabPanel = /*#__PURE__*/React.cloneElement(tab, {
            isActive: isActive,
            key: tabProps.name
          });
          tabPanels.push(tabPanel);
        } else {
          leastIndex += 1;
        }
      });
      return {
        tabLabels: tabLabels,
        tabPanels: tabPanels
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          type = _this$props2.type,
          className = _this$props2.className,
          direction = _this$props2.direction;

      var _this$renderTabPanels = this.renderTabPanels(),
          tabLabels = _this$renderTabPanels.tabLabels,
          tabPanels = _this$renderTabPanels.tabPanels;

      return /*#__PURE__*/React.createElement("div", {
        className: classNames("tabs-container", className, {
          "tabs-container-vertical": direction === "vertical"
        })
      }, /*#__PURE__*/React.createElement("div", {
        className: classNames("tabs", "tabs-".concat(type))
      }, /*#__PURE__*/React.createElement("ul", null, tabLabels)), /*#__PURE__*/React.createElement("div", {
        className: "tab-content"
      }, tabPanels));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var activeName = prevState.activeName;

      if ("activeName" in nextProps && nextProps.activeName !== activeName) {
        return {
          activeName: nextProps.activeName
        };
      }

      return null;
    }
  }]);

  return Tabs;
}(Component);

_defineProperty(Tabs, "TabPanel", TabPanel);

_defineProperty(Tabs, "propTypes", {
  type: PropTypes.oneOf(["default", "button"]),
  direction: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  activeName: PropTypes.string,
  defaultActiveName: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func
});

_defineProperty(Tabs, "defaultProps", {
  type: "default",
  direction: "horizon",
  style: {},
  onChange: noop
});

export default Tabs;