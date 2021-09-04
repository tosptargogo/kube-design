"use strict";

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

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Checkbox = _interopRequireDefault(require("../Checkbox/Checkbox"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Option = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Option, _React$Component);

  var _super = _createSuper(Option);

  function Option() {
    var _this;

    (0, _classCallCheck2["default"])(this, Option);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderIcon", function () {
      var isActive = _this.props.isActive;
      return isActive ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "select-option-icon"
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        name: "check",
        type: "coloured"
      })) : null;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderCheckbox", function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          isActive = _this$props.isActive;
      return /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
        size: "small",
        checked: isActive,
        disabled: disabled,
        onChange: _this.handleCancelBubble
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderContent", function () {
      var _this$props2 = _this.props,
          multi = _this$props2.multi,
          children = _this$props2.children;
      return multi ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, _this.renderCheckbox(), /*#__PURE__*/_react["default"].createElement("span", {
        className: "select-option-label"
      }, children)) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", {
        className: "select-option-label"
      }, children), _this.renderIcon());
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleCancelBubble", function (checked, value, e) {
      _this.props.onClick(_this.props.option);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleSelectedValue", function (e) {
      e.stopPropagation();
      e.preventDefault();

      _this.props.onClick(_this.props.option);
    });
    return _this;
  }

  (0, _createClass2["default"])(Option, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          disabled = _this$props3.disabled,
          isActive = _this$props3.isActive;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("select-option", {
          "select-option-disabled": disabled,
          "select-option-active": isActive
        }),
        onClick: this.handleSelectedValue
      }, this.renderContent());
    }
  }]);
  return Option;
}(_react["default"].Component);

exports["default"] = Option;
(0, _defineProperty2["default"])(Option, "propTypes", {
  isActive: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  multi: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(Option, "defaultProps", {
  onChange: function onChange() {},
  multi: false
});