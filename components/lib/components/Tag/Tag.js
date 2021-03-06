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

var Tag = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Tag, _React$Component);

  var _super = _createSuper(Tag);

  function Tag() {
    (0, _classCallCheck2["default"])(this, Tag);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Tag, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          children = _this$props.children,
          className = _this$props.className,
          color = _this$props.color;
      var style = {};

      if (color) {
        style.backgroundColor = color;
      }

      return /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _classnames["default"])("tag", "tag-".concat(type), className),
        style: style
      }, children);
    }
  }]);
  return Tag;
}(_react["default"].Component);

exports["default"] = Tag;
(0, _defineProperty2["default"])(Tag, "propTypes", {
  color: _propTypes["default"].string,
  type: _propTypes["default"].oneOf(["default", "secondary", "info", "warning", "primary"]),
  className: _propTypes["default"].string
});
(0, _defineProperty2["default"])(Tag, "defaultProps", {
  type: "default"
});