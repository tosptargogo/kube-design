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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MenuItem = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(MenuItem, _Component);

  var _super = _createSuper(MenuItem);

  function MenuItem() {
    var _this;

    (0, _classCallCheck2["default"])(this, MenuItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (e) {
      var _this$props = _this.props,
          specKey = _this$props.specKey,
          value = _this$props.value,
          onClick = _this$props.onClick,
          disabled = _this$props.disabled;
      if (disabled) return;
      onClick(e, specKey, value);
    });
    return _this;
  }

  (0, _createClass2["default"])(MenuItem, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          children = _this$props2.children,
          disabled = _this$props2.disabled,
          selected = _this$props2.selected;
      return /*#__PURE__*/_react["default"].createElement("li", {
        className: (0, _classnames["default"])("menu-item", className, {
          "menu-item-disabled": disabled,
          "menu-item-selected": selected
        }),
        onClick: this.handleClick
      }, children);
    }
  }]);
  return MenuItem;
}(_react.Component);

(0, _defineProperty2["default"])(MenuItem, "menuType", "MenuItem");
(0, _defineProperty2["default"])(MenuItem, "propTypes", {
  disabled: _propTypes["default"].bool,
  selected: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  value: _propTypes["default"].any,
  specKey: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  children: _propTypes["default"].any.isRequired
});
var _default = MenuItem;
exports["default"] = _default;