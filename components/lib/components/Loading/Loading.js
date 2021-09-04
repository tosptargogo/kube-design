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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = require("lodash");

var _LoadingIcon = _interopRequireDefault(require("./LoadingIcon"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var sizeObj = {
  small: 20,
  medium: 32,
  large: 48
};

var Loading = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Loading, _Component);

  var _super = _createSuper(Loading);

  function Loading(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Loading);
    _this = _super.call(this, props);
    _this.state = {
      spinning: props.spinning
    };
    return _this;
  }

  (0, _createClass2["default"])(Loading, [{
    key: "isNestedPattern",
    value: function isNestedPattern() {
      var children = this.props.children;
      return children;
    }
  }, {
    key: "renderIndicator",
    value: function renderIndicator() {
      var size = this.props.size;
      return /*#__PURE__*/_react["default"].createElement("span", {
        className: "spin-dot spin-dot-spin"
      }, /*#__PURE__*/_react["default"].createElement(_LoadingIcon["default"], {
        name: "loading",
        type: "dark",
        size: (0, _lodash.isNumber)(size) ? size : sizeObj[size],
        style: {
          display: "block",
          margin: "auto"
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          size = _this$props.size,
          children = _this$props.children,
          wrapperClassName = _this$props.wrapperClassName,
          restProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "size", "children", "wrapperClassName"]);
      var spinning = this.state.spinning;
      var spinClassName = (0, _classnames["default"])("spin", {
        "spin-sm": size === "small",
        "spin-lg": size === "large",
        "spin-spinning": spinning
      }, className);
      var divProps = (0, _lodash.omit)(restProps, ["spinning"]);

      var spinElement = /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, divProps, {
        className: spinClassName
      }), this.renderIndicator());

      if (this.isNestedPattern()) {
        var animateClassName = "spin-nested-loading";

        if (wrapperClassName) {
          animateClassName += " ".concat(wrapperClassName);
        }

        var containerClassName = (0, _classnames["default"])({
          "spin-container": true,
          "spin-blur": spinning
        });
        return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, divProps, {
          className: animateClassName
        }), spinning && /*#__PURE__*/_react["default"].createElement("div", {
          key: "loading"
        }, spinElement), /*#__PURE__*/_react["default"].createElement("div", {
          className: containerClassName,
          key: "container"
        }, children));
      }

      return spinning && spinElement;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var prevSpinning = prevState.spinning;
      var spinning = nextProps.spinning;

      if (prevSpinning !== spinning) {
        return {
          spinning: spinning
        };
      }

      return null;
    }
  }]);
  return Loading;
}(_react.Component);

(0, _defineProperty2["default"])(Loading, "propTypes", {
  className: _propTypes["default"].string,
  size: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  spinning: _propTypes["default"].bool,
  children: _propTypes["default"].element
});
(0, _defineProperty2["default"])(Loading, "defaultProps", {
  spinning: true,
  size: "medium"
});
var _default = Loading;
exports["default"] = _default;