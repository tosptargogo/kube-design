import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from "react";
import PropTypes from "prop-types";
import locale from "@pitrix/lego-locale";
import { merge } from "lodash";
import defaultLocales from "./locales";

var LocaleProvider = /*#__PURE__*/function (_Component) {
  _inherits(LocaleProvider, _Component);

  var _super = _createSuper(LocaleProvider);

  function LocaleProvider() {
    var _this;

    _classCallCheck(this, LocaleProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      initDone: false
    });

    return _this;
  }

  _createClass(LocaleProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          locales = _this$props.locales,
          ignoreWarnings = _this$props.ignoreWarnings;
      var curLocale = this.state.curLocale;
      locale.init({
        currentLocale: curLocale,
        locales: merge(defaultLocales, locales),
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
      return initDone ? React.Children.only(children) : null;
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
        curLocale = locale.determineLocale({
          cookieLocaleKey: localeKey,
          urlLocaleKey: localeKey
        });
        curLocale = localeFallback[curLocale] || curLocale;
      }

      if (nextCurLocale && nextCurLocale !== stateCurLocale) {
        curLocale = nextCurLocale;
      }

      if (initDone) {
        locale.setCurrentLocale(curLocale);
      }

      return {
        curLocale: curLocale
      };
    }
  }]);

  return LocaleProvider;
}(Component);

_defineProperty(LocaleProvider, "locale", locale);

_defineProperty(LocaleProvider, "propTypes", {
  currentLocale: PropTypes.string,
  locales: PropTypes.object,
  localeKey: PropTypes.string,
  localeFallback: PropTypes.object,
  children: PropTypes.node,
  ignoreWarnings: PropTypes.bool
});

_defineProperty(LocaleProvider, "defaultProps", {
  locales: {},
  localeFallback: {
    "zh-CN": "zh",
    "en-US": "en"
  },
  ignoreWarnings: false
});

export default LocaleProvider;