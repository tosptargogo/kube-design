"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TextArea = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(TextArea, _Component);

  var _super = _createSuper(TextArea);

  function TextArea() {
    var _this;

    (0, _classCallCheck2["default"])(this, TextArea);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "ref", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (e) {
      _this.autoResize();

      var onChange = _this.props.onChange;
      onChange && onChange(e.target.value);
    });
    return _this;
  }

  (0, _createClass2["default"])(TextArea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.autoResize();
    }
  }, {
    key: "autoResize",
    value: function autoResize() {
      var _this$props = this.props,
          maxHeight = _this$props.maxHeight,
          autoResize = _this$props.autoResize;

      if (!autoResize) {
        return false;
      }

      var node = this.ref.current;
      node.style.height = "";

      if (node.scrollHeight > maxHeight) {
        node.style.height = "".concat(maxHeight, "px");
        node.style.overflow = "auto";
      } else {
        node.style.height = "".concat(node.scrollHeight, "px");
        node.style.overflow = "hidden";
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          autoResize = _this$props2.autoResize,
          maxHeight = _this$props2.maxHeight,
          resize = _this$props2.resize,
          rest = (0, _objectWithoutProperties2["default"])(_this$props2, ["className", "autoResize", "maxHeight", "resize"]);

      var props = _objectSpread(_objectSpread({}, rest), {}, {
        onChange: this.handleChange
      });

      if (resize) {
        props.resize = "true";
      }

      var style = autoResize ? (0, _classnames["default"])("textarea", "textareaAuto", className) : (0, _classnames["default"])("textarea", className);
      return /*#__PURE__*/_react["default"].createElement("textarea", (0, _extends2["default"])({
        ref: this.ref
      }, props, {
        className: style
      }));
    }
  }]);
  return TextArea;
}(_react.Component);

exports["default"] = TextArea;
(0, _defineProperty2["default"])(TextArea, "propTypes", {
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  rows: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  autoResize: _propTypes["default"].bool,
  maxHeight: _propTypes["default"].number,
  onChange: _propTypes["default"].func
});
(0, _defineProperty2["default"])(TextArea, "defaultProps", {
  rows: "2",
  autoResize: false,
  maxHeight: 800,
  onChange: function onChange() {}
});