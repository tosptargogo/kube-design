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

var _spirits = _interopRequireDefault(require("./spirits"));

var _domReady = _interopRequireDefault(require("../../utils/domReady"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var idPrefix = "icon-";

var prepend = function prepend(el, target) {
  if (target.firstChild) {
    target.insertBefore(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
};

var appendSvg = function appendSvg() {
  var svgContainer = document.createElement("div");
  svgContainer.innerHTML = _spirits["default"];
  var svg = svgContainer.getElementsByTagName("svg")[0];

  if (svg) {
    svg.setAttribute("aria-hidden", "true");
    svg.style.position = "absolute";
    svg.style.width = 0;
    svg.style.height = 0;
    svg.style.overflow = "hidden";
    prepend(svg, document.body);
  }
};

if (typeof window !== "undefined" && !window.iconfont__svg__inject) {
  window.iconfont__svg__inject = true;
  (0, _domReady["default"])(appendSvg);
}

var Icon = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(Icon, _PureComponent);

  var _super = _createSuper(Icon);

  function Icon() {
    (0, _classCallCheck2["default"])(this, Icon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Icon, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          prefix = _this$props.prefix,
          name = _this$props.name,
          type = _this$props.type,
          size = _this$props.size,
          className = _this$props.className,
          onClick = _this$props.onClick,
          style = _this$props.style,
          clickable = _this$props.clickable,
          changeable = _this$props.changeable,
          disabled = _this$props.disabled,
          color = _this$props.color;
      var styles = style;
      var colorStyles = {};
      var isNumberSize = !isNaN(Number(size));

      if (isNumberSize) {
        styles = Object.assign({}, style, {
          width: "".concat(size, "px"),
          height: "".concat(size, "px")
        });
      }

      if (color) {
        colorStyles = {
          color: color.primary,
          fill: color.secondary
        };
      }

      return /*#__PURE__*/_react["default"].createElement("span", {
        style: styles,
        className: (0, _classnames["default"])("icon", (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "is-".concat(size), !isNumberSize), (0, _defineProperty2["default"])(_classNames, "icon-clickable", clickable), (0, _defineProperty2["default"])(_classNames, "icon-changeable", changeable && !disabled), (0, _defineProperty2["default"])(_classNames, "icon-disabled", disabled), _classNames), className),
        onClick: disabled ? null : onClick
      }, /*#__PURE__*/_react["default"].createElement("svg", {
        className: "".concat(prefix, " ").concat(prefix, "-").concat(name, " ").concat(prefix, "-").concat(type),
        style: colorStyles
      }, /*#__PURE__*/_react["default"].createElement("use", {
        xlinkHref: "#".concat(idPrefix + name)
      })));
    }
  }]);
  return Icon;
}(_react.PureComponent);

exports["default"] = Icon;
(0, _defineProperty2["default"])(Icon, "propTypes", {
  prefix: _propTypes["default"].string,
  name: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].string,
  size: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  changeable: _propTypes["default"].bool,
  clickable: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  disabled: _propTypes["default"].bool,
  color: _propTypes["default"].object
});
(0, _defineProperty2["default"])(Icon, "defaultProps", {
  type: "dark",
  size: "small",
  prefix: "kubed-icon",
  style: {},
  changeable: false,
  clickable: false,
  disabled: false,
  onClick: function onClick() {}
});