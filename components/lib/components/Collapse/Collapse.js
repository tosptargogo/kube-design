"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

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

var _CollapseItem = _interopRequireDefault(require("./CollapseItem"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Collapse = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Collapse, _Component);

  var _super = _createSuper(Collapse);

  function Collapse(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Collapse);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleVisible", function (key, visible) {
      var _this$props = _this.props,
          accordion = _this$props.accordion,
          onChange = _this$props.onChange;
      var activeKey = _this.state.activeKey;
      var nextKey = (0, _toConsumableArray2["default"])(activeKey);

      if (accordion) {
        nextKey = visible ? [key] : [];
      }

      if (!accordion && visible && !activeKey.includes(key)) {
        nextKey = activeKey.concat(key);
      }

      if (!accordion && !visible && activeKey.includes(key)) {
        (0, _lodash.remove)(nextKey, function (k) {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderChildren", function () {
      var children = _this.props.children;
      var activeKey = _this.state.activeKey;
      if (!children) return null;
      return _react.Children.map(children, function (child, i) {
        if (!child) {
          return null;
        }

        return /*#__PURE__*/(0, _react.cloneElement)(child, {
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

  (0, _createClass2["default"])(Collapse, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          style = _this$props2.style;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])({
          collapse: !!children.length
        }, className),
        style: style
      }, /*#__PURE__*/_react["default"].createElement("ul", null, this.renderChildren()));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if ("activeKey" in nextProps && !(0, _lodash.isEqual)(nextProps.activeKey, prevState.activeKey)) {
        return {
          activeKey: nextProps.activeKey
        };
      }

      return null;
    }
  }]);
  return Collapse;
}(_react.Component);

exports["default"] = Collapse;
(0, _defineProperty2["default"])(Collapse, "CollapseItem", _CollapseItem["default"]);
(0, _defineProperty2["default"])(Collapse, "propTypes", {
  activeKey: _propTypes["default"].arrayOf(_propTypes["default"].string),
  defaultActiveKey: _propTypes["default"].arrayOf(_propTypes["default"].string),
  accordion: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  onChange: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
});
(0, _defineProperty2["default"])(Collapse, "defaultProps", {
  accordion: false,
  onChange: _lodash.noop
});