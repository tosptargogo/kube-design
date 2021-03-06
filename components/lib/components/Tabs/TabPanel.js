"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TabPanel = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(TabPanel, _Component);

  var _super = _createSuper(TabPanel);

  function TabPanel(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, TabPanel);
    _this = _super.call(this, props);
    _this.state = {
      isActive: props.isActive
    };
    return _this;
  }

  (0, _createClass2["default"])(TabPanel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          children = _this$props.children;
      var isActive = this.state.isActive;

      if (isActive) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _classnames["default"])("tab-panel", {
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
}(_react.Component);

(0, _defineProperty2["default"])(TabPanel, "propTypes", {
  name: _propTypes["default"].string,
  isActive: _propTypes["default"].bool,
  children: _propTypes["default"].node
});
(0, _defineProperty2["default"])(TabPanel, "defaultProps", {
  isActive: false
});
var _default = TabPanel;
exports["default"] = _default;