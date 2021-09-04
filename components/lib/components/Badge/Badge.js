"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Badge = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Badge, _Component);

  var _super = _createSuper(Badge);

  function Badge() {
    var _this;

    (0, _classCallCheck2["default"])(this, Badge);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderBadge", function () {
      var _this$props = _this.props,
          status = _this$props.status,
          text = _this$props.text,
          overflowCount = _this$props.overflowCount,
          count = _this$props.count;
      var number = "";

      if (text) {
        number = text;
      } else if (overflowCount && count > overflowCount) {
        number = "".concat(overflowCount, "+");
      } else {
        number = count;
      }

      return /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _classnames["default"])("is-".concat(status), "badge")
      }, number);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "render", function () {
      var _this$props2 = _this.props,
          style = _this$props2.style,
          className = _this$props2.className,
          children = _this$props2.children;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("badge-wrapper", className),
        style: style
      }, children, _this.renderBadge());
    });
    return _this;
  }

  return Badge;
}(_react.Component);

(0, _defineProperty2["default"])(Badge, "propTypes", {
  count: _propTypes["default"].number,
  children: _propTypes["default"].node,
  overflowCount: _propTypes["default"].number,
  status: _propTypes["default"].oneOf(["default", "success", "error", "warning"]),
  style: _propTypes["default"].object,
  text: _propTypes["default"].string,
  className: _propTypes["default"].string
});
(0, _defineProperty2["default"])(Badge, "defaultProps", {
  status: "success",
  overflowCount: 99,
  count: 0
});
var _default = Badge;
exports["default"] = _default;