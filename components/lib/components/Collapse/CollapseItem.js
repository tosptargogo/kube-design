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

var _Icon = _interopRequireDefault(require("../Icon"));

var _CollapseTransition = _interopRequireDefault(require("./CollapseTransition"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var CollapseItem = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(CollapseItem, _Component);

  var _super = _createSuper(CollapseItem);

  function CollapseItem() {
    var _this;

    (0, _classCallCheck2["default"])(this, CollapseItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleVisible", function () {
      var _this$props = _this.props,
          specKey = _this$props.specKey,
          handleVisible = _this$props.handleVisible,
          visible = _this$props.visible;
      handleVisible(specKey, !visible);
    });
    return _this;
  }

  (0, _createClass2["default"])(CollapseItem, [{
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _this$props2 = this.props,
          label = _this$props2.label,
          children = _this$props2.children,
          visible = _this$props2.visible,
          isLast = _this$props2.isLast,
          className = _this$props2.className,
          style = _this$props2.style;
      var prefixCls = "collapse";
      var classLabel = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-item-label"), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-item-label-border-bottom"), !!visible), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-item-label-last-border-bottom"), isLast && !visible), _classNames));
      var classContent = (0, _classnames["default"])((_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-item-content"), true), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-item-content-last-border-bottom"), isLast && !!visible), _classNames2));
      return /*#__PURE__*/_react["default"].createElement("li", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-item"), className),
        style: style
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classLabel,
        onClick: this.handleVisible
      }, label, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        name: "caret-".concat(visible ? "up" : "down"),
        type: visible ? "dark" : "light",
        size: 20
      })), /*#__PURE__*/_react["default"].createElement(_CollapseTransition["default"], {
        visible: visible
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classContent
      }, children)));
    }
  }]);
  return CollapseItem;
}(_react.Component);

exports["default"] = CollapseItem;
(0, _defineProperty2["default"])(CollapseItem, "propTypes", {
  label: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].node.isRequired,
  visible: _propTypes["default"].bool,
  specKey: _propTypes["default"].string,
  isLast: _propTypes["default"].bool,
  handleVisible: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object
});
(0, _defineProperty2["default"])(CollapseItem, "defaultProps", {
  visible: false
});