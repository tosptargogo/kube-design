"use strict";

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

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Progress = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Progress, _React$Component);

  var _super = _createSuper(Progress);

  function Progress() {
    (0, _classCallCheck2["default"])(this, Progress);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Progress, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          percent = _this$props.percent,
          status = _this$props.status,
          range = _this$props.range,
          className = _this$props.className;
      var style = {
        width: "".concat(percent, "%")
      };
      var type = status;

      if (status === "auto") {
        if (percent < range[0]) {
          type = "primary";
        } else if (percent >= range[0] && percent < range[1]) {
          type = "warning";
        } else if (percent >= range[1]) {
          type = "danger";
        }
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("progress", className)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("progress-bar", "progress-bar-".concat(type)),
        style: style
      }));
    }
  }]);
  return Progress;
}(_react["default"].Component);

exports["default"] = Progress;
(0, _defineProperty2["default"])(Progress, "propTypes", {
  className: _propTypes["default"].string,
  percent: _propTypes["default"].number.isRequired,
  status: _propTypes["default"].oneOf(["primary", "warning", "danger", "auto"]),
  range: _propTypes["default"].arrayOf(_propTypes["default"].number)
});
(0, _defineProperty2["default"])(Progress, "defaultProps", {
  percent: 0,
  status: "auto",
  range: [80, 95]
});