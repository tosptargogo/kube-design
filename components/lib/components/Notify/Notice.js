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

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Notice = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Notice, _Component);

  var _super = _createSuper(Notice);

  function Notice() {
    var _this;

    (0, _classCallCheck2["default"])(this, Notice);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "close", function () {
      _this.clearCloseTimer();

      _this.props.onClose();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "startCloseTimer", function () {
      var duration = _this.props.duration;
      if (duration === 0) return;
      _this.closeTimer = setTimeout(function () {
        _this.close();
      }, duration);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "clearCloseTimer", function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(Notice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCloseTimer();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          type = _this$props.type,
          closable = _this$props.closable,
          children = _this$props.children,
          prefixCls = _this$props.prefixCls;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-closable"), closable), (0, _defineProperty2["default"])(_classNames, className, !!className), _classNames), "notice-".concat(type)),
        style: style,
        onMouseEnter: this.clearCloseTimer,
        onMouseLeave: this.startCloseTimer
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, children), closable ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: "".concat(prefixCls, "-close"),
        name: "close",
        onClick: this.close
      }) : null);
    }
  }]);
  return Notice;
}(_react.Component);

(0, _defineProperty2["default"])(Notice, "propTypes", {
  duration: _propTypes["default"].number,
  onClose: _propTypes["default"].func,
  style: _propTypes["default"].object,
  className: _propTypes["default"].string,
  type: _propTypes["default"].string,
  closable: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  prefixCls: _propTypes["default"].string
});
(0, _defineProperty2["default"])(Notice, "defaultProps", {
  duration: 3000,
  closable: false,
  prefixCls: "notice"
});
var _default = Notice;
exports["default"] = _default;