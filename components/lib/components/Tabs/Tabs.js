"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = require("lodash");

var _TabPanel = _interopRequireDefault(require("./TabPanel"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Tabs = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Tabs, _Component);

  var _super = _createSuper(Tabs);

  function Tabs(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Tabs);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleSelect", function (activeName) {
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

  (0, _createClass2["default"])(Tabs, [{
    key: "renderTabLabel",
    value: function renderTabLabel(tabProps, isActive, index) {
      var _this2 = this;

      var specKey = tabProps.name || "tab-".concat(index);
      var activeName = this.state.activeName;
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: specKey,
        className: (0, _classnames["default"])({
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
      var hasActiveName = !(0, _lodash.isUndefined)(activeName);
      var leastIndex = 0;
      var leastActive = false;

      _react.Children.forEach(children, function (tab, index) {
        if ( /*#__PURE__*/_react["default"].isValidElement(tab)) {
          var tabProps = tab.props;
          var isActive = false;
          if (tabProps.disabled && !leastActive) leastIndex += 1;

          if (hasActiveName && tabProps.name === activeName || !hasActiveName && index === leastIndex) {
            isActive = true;
            leastActive = true;
          }

          var tabLabel = _this3.renderTabLabel(tabProps, isActive, index);

          tabLabels.push(tabLabel);

          var tabPanel = /*#__PURE__*/_react["default"].cloneElement(tab, {
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

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("tabs-container", className, {
          "tabs-container-vertical": direction === "vertical"
        })
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("tabs", "tabs-".concat(type))
      }, /*#__PURE__*/_react["default"].createElement("ul", null, tabLabels)), /*#__PURE__*/_react["default"].createElement("div", {
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
}(_react.Component);

(0, _defineProperty2["default"])(Tabs, "TabPanel", _TabPanel["default"]);
(0, _defineProperty2["default"])(Tabs, "propTypes", {
  type: _propTypes["default"].oneOf(["default", "button"]),
  direction: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  activeName: _propTypes["default"].string,
  defaultActiveName: _propTypes["default"].string,
  children: _propTypes["default"].node,
  onChange: _propTypes["default"].func
});
(0, _defineProperty2["default"])(Tabs, "defaultProps", {
  type: "default",
  direction: "horizon",
  style: {},
  onChange: _lodash.noop
});
var _default = Tabs;
exports["default"] = _default;