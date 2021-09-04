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

var _legoLocale = _interopRequireDefault(require("@pitrix/lego-locale"));

var _lodash = require("lodash");

var _locales = _interopRequireDefault(require("./locales"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var LocaleProvider = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(LocaleProvider, _Component);

  var _super = _createSuper(LocaleProvider);

  function LocaleProvider() {
    var _this;

    (0, _classCallCheck2["default"])(this, LocaleProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      initDone: false
    });
    return _this;
  }

  (0, _createClass2["default"])(LocaleProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          locales = _this$props.locales,
          ignoreWarnings = _this$props.ignoreWarnings;
      var curLocale = this.state.curLocale;

      _legoLocale["default"].init({
        currentLocale: curLocale,
        locales: (0, _lodash.merge)(_locales["default"], locales),
        ignoreWarnings: ignoreWarnings
      }).then(this.setState({
        initDone: true
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var initDone = this.state.initDone;
      return initDone ? _react["default"].Children.only(children) : null;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var stateCurLocale = state.currentLocale,
          initDone = state.initDone;
      var nextCurLocale = props.currentLocale,
          locales = props.locales,
          localeKey = props.localeKey,
          localeFallback = props.localeFallback;
      var curLocale = null;

      if (!(nextCurLocale in locales)) {
        curLocale = _legoLocale["default"].determineLocale({
          cookieLocaleKey: localeKey,
          urlLocaleKey: localeKey
        });
        curLocale = localeFallback[curLocale] || curLocale;
      }

      if (nextCurLocale && nextCurLocale !== stateCurLocale) {
        curLocale = nextCurLocale;
      }

      if (initDone) {
        _legoLocale["default"].setCurrentLocale(curLocale);
      }

      return {
        curLocale: curLocale
      };
    }
  }]);
  return LocaleProvider;
}(_react.Component);

(0, _defineProperty2["default"])(LocaleProvider, "locale", _legoLocale["default"]);
(0, _defineProperty2["default"])(LocaleProvider, "propTypes", {
  currentLocale: _propTypes["default"].string,
  locales: _propTypes["default"].object,
  localeKey: _propTypes["default"].string,
  localeFallback: _propTypes["default"].object,
  children: _propTypes["default"].node,
  ignoreWarnings: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(LocaleProvider, "defaultProps", {
  locales: {},
  localeFallback: {
    "zh-CN": "zh",
    "en-US": "en"
  },
  ignoreWarnings: false
});
var _default = LocaleProvider;
exports["default"] = _default;