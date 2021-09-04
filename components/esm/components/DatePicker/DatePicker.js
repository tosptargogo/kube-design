import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from "react";
import ReactDomServer from "react-dom/server";
import classNames from "classnames";
import PropTypes from "prop-types";
import Flatpickr from "flatpickr";
import { isEqual, noop, omit } from "lodash";
import getDefaultLocale from "./locale";
import Icon from "../Icon";
import CustomUI from "./plugins/customUI";
var propsKey = ["onChange", "onOpen", "onClose", "onMonthChange", "onYearChange", "onReady", "onValueUpdate", "onDayCreate", "defaultDate", "enableTime", "enableSeconds", "defaultHour", "defaultMinute", "dateFormat", "formatDate", "hourIncrement", "minuteIncrement", "enable", "disable", "maxDate", "minDate", "mode", "conjunction", "noCalendar", "enableSeconds", "weekNumbers", "appendTo", "locale"];
var defaultOptions = {
  locale: {},
  plugins: [new CustomUI()],
  time_24hr: true,
  nextArrow: ReactDomServer.renderToString( /*#__PURE__*/React.createElement(Icon, {
    name: "next",
    size: 20
  })),
  prevArrow: ReactDomServer.renderToString( /*#__PURE__*/React.createElement(Icon, {
    name: "previous",
    size: 20
  }))
};

var DatePicker = /*#__PURE__*/function (_Component) {
  _inherits(DatePicker, _Component);

  var _super = _createSuper(DatePicker);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "bindEvents", function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _this$props = _this.props,
          _onOpen = _this$props.onOpen,
          _onClose = _this$props.onClose,
          _onChange = _this$props.onChange;

      var nextOptions = _objectSpread(_objectSpread({}, options), {}, {
        onOpen: function onOpen(dates, dateStr, instance) {
          _this.setState({
            isFocus: true,
            value: dates,
            isOpen: true
          }, function () {
            _onOpen(dates, dateStr, instance);
          });
        },
        onClose: function onClose(dates, dateStr, instance) {
          if (_this.node.blur) {
            _this.node.blur();
          }

          _this.setState({
            isFocus: false,
            value: dates,
            isOpen: false
          }, function () {
            _this.instance.setDate(dates, false);

            _onClose(dates, dateStr, instance);
          });
        },
        onChange: function onChange(dates, dateStr, instance) {
          _this.setState({
            value: dates
          }, function () {
            _onChange(dates, dateStr, instance);
          });
        }
      });

      return nextOptions;
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseEnter", function () {
      var showClearBtn = _this.props.showClearBtn;
      var _this$state = _this.state,
          isHover = _this$state.isHover,
          isOpen = _this$state.isOpen;

      if (showClearBtn && !isHover && !isOpen) {
        _this.setState({
          isHover: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function () {
      var showClearBtn = _this.props.showClearBtn;
      var isHover = _this.state.isHover;

      if (showClearBtn && isHover) {
        _this.setState({
          isHover: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClear", function (e) {
      e.stopPropagation();
      var _this$props2 = _this.props,
          onClear = _this$props2.onClear,
          onChange = _this$props2.onChange;

      if (_this.instance.isOpen) {
        _this.instance.close();
      }

      if (!("value" in _this.props)) {
        _this.setState({
          value: ""
        }, function () {
          _this.instance.setDate([], false);
        });
      }

      onClear();
      onChange([], "", _this.instance);
    });

    _this.instance = null;
    _this.state = {
      value: "value" in props || "defaultValue" in props ? props.value || props.defaultValue : undefined,
      isHover: false,
      isOpen: false,
      isFocus: false
    };
    return _this;
  }

  _createClass(DatePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var props = this.props;
      var propsOptions = this.props.options;
      var value = this.state.value;

      var options = _objectSpread(_objectSpread({}, defaultOptions), propsOptions);

      propsKey.forEach(function (key) {
        if (props[key]) {
          options[key] = props[key];
        }
      });
      options.locale = _objectSpread(_objectSpread({}, getDefaultLocale()), options.locale);
      this.instance = new Flatpickr(this.node, this.bindEvents(options));
      this.instance.setDate(value, false);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var props = this.props;
      var propsOptions = this.props.options;

      var prevOptions = _objectSpread({}, prevProps.options);

      var nextOptions = _objectSpread({}, propsOptions);

      propsKey.forEach(function (key) {
        if (key in _this2.props) {
          nextOptions[key] = props[key];
        }

        if (key in prevProps) {
          prevOptions[key] = prevProps[key];
        }
      });
      var optionsKeys = Object.getOwnPropertyNames(nextOptions);
      optionsKeys = omit(optionsKeys, ["onChange", "onOpen", "onClose", "onMonthChange", "onYearChange", "onReady", "onValueUpdate", "onDayCreate"]);

      for (var index = optionsKeys.length - 1; index >= 0; index -= 1) {
        var key = optionsKeys[index];
        var value = nextOptions[key];

        if (value !== prevOptions[key]) {
          this.instance.set(key, value);
        }
      }

      if ("value" in this.props && this.instance) {
        this.instance.setDate(props.value, false);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.destroy();
        this.instance = null;
      }
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var _this$props3 = this.props,
          showClearBtn = _this$props3.showClearBtn,
          disabled = _this$props3.disabled;
      var _this$state2 = this.state,
          value = _this$state2.value,
          isHover = _this$state2.isHover,
          isFocus = _this$state2.isFocus;
      var iconName = "noCalendar" in this.props && "enableTime" in this.props ? "clock" : "calendar";

      if (showClearBtn && (isFocus || isHover) && !disabled && value !== "") {
        return /*#__PURE__*/React.createElement(Icon, {
          className: "is-right",
          name: "close",
          clickable: true,
          onClick: this.handleClear
        });
      }

      return /*#__PURE__*/React.createElement(Icon, {
        className: "is-right",
        name: iconName
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props4 = this.props,
          options = _this$props4.options,
          defaultValue = _this$props4.defaultValue,
          value = _this$props4.value,
          className = _this$props4.className,
          showClearBtn = _this$props4.showClearBtn,
          props = _objectWithoutProperties(_this$props4, ["options", "defaultValue", "value", "className", "showClearBtn"]);

      var _this$state3 = this.state,
          isHover = _this$state3.isHover,
          isOpen = _this$state3.isOpen;
      propsKey.forEach(function (key) {
        delete props[key];
      });
      delete props.onClear;
      props.className = classNames("datepicker-input input", {
        "is-hover": isHover
      }, {
        "is-active": isOpen
      });
      return /*#__PURE__*/React.createElement("div", {
        className: classNames("datepicker has-icons-right", className),
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      }, /*#__PURE__*/React.createElement("input", _extends({}, props, {
        ref: function ref(n) {
          _this3.node = n;
        }
      })), this.renderIcon());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if ("value" in nextProps && !isEqual(nextProps.value, prevState.value)) {
        return {
          value: nextProps.value
        };
      }

      return null;
    }
  }]);

  return DatePicker;
}(Component);

_defineProperty(DatePicker, "propTypes", {
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object, PropTypes.number]),
  options: PropTypes.object,
  onChange: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onClear: PropTypes.func,
  onMonthChange: PropTypes.func,
  onYearChange: PropTypes.func,
  onReady: PropTypes.func,
  onValueUpdate: PropTypes.func,
  onDayCreate: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object, PropTypes.number]),
  className: PropTypes.string,
  showClearBtn: PropTypes.bool,
  disabled: PropTypes.bool,
  enableTime: PropTypes.bool,
  mode: PropTypes.string
});

_defineProperty(DatePicker, "defaultProps", {
  options: {},
  onChange: noop,
  onOpen: noop,
  onClose: noop,
  onClear: noop,
  showClearBtn: true,
  mode: "single"
});

export default DatePicker;