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

var _server = _interopRequireDefault(require("react-dom/server"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _flatpickr = _interopRequireDefault(require("flatpickr"));

var _lodash = require("lodash");

var _locale = _interopRequireDefault(require("./locale"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _customUI = _interopRequireDefault(require("./plugins/customUI"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var propsKey = ["onChange", "onOpen", "onClose", "onMonthChange", "onYearChange", "onReady", "onValueUpdate", "onDayCreate", "defaultDate", "enableTime", "enableSeconds", "defaultHour", "defaultMinute", "dateFormat", "formatDate", "hourIncrement", "minuteIncrement", "enable", "disable", "maxDate", "minDate", "mode", "conjunction", "noCalendar", "enableSeconds", "weekNumbers", "appendTo", "locale"];
var defaultOptions = {
  locale: {},
  plugins: [new _customUI["default"]()],
  time_24hr: true,
  nextArrow: _server["default"].renderToString( /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: "next",
    size: 20
  })),
  prevArrow: _server["default"].renderToString( /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: "previous",
    size: 20
  }))
};

var DatePicker = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(DatePicker, _Component);

  var _super = _createSuper(DatePicker);

  function DatePicker(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, DatePicker);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "bindEvents", function () {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMouseEnter", function () {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMouseLeave", function () {
      var showClearBtn = _this.props.showClearBtn;
      var isHover = _this.state.isHover;

      if (showClearBtn && isHover) {
        _this.setState({
          isHover: false
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClear", function (e) {
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

  (0, _createClass2["default"])(DatePicker, [{
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
      options.locale = _objectSpread(_objectSpread({}, (0, _locale["default"])()), options.locale);
      this.instance = new _flatpickr["default"](this.node, this.bindEvents(options));
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
      optionsKeys = (0, _lodash.omit)(optionsKeys, ["onChange", "onOpen", "onClose", "onMonthChange", "onYearChange", "onReady", "onValueUpdate", "onDayCreate"]);

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
        return /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          className: "is-right",
          name: "close",
          clickable: true,
          onClick: this.handleClear
        });
      }

      return /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
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
          props = (0, _objectWithoutProperties2["default"])(_this$props4, ["options", "defaultValue", "value", "className", "showClearBtn"]);
      var _this$state3 = this.state,
          isHover = _this$state3.isHover,
          isOpen = _this$state3.isOpen;
      propsKey.forEach(function (key) {
        delete props[key];
      });
      delete props.onClear;
      props.className = (0, _classnames["default"])("datepicker-input input", {
        "is-hover": isHover
      }, {
        "is-active": isOpen
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("datepicker has-icons-right", className),
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      }, /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({}, props, {
        ref: function ref(n) {
          _this3.node = n;
        }
      })), this.renderIcon());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if ("value" in nextProps && !(0, _lodash.isEqual)(nextProps.value, prevState.value)) {
        return {
          value: nextProps.value
        };
      }

      return null;
    }
  }]);
  return DatePicker;
}(_react.Component);

(0, _defineProperty2["default"])(DatePicker, "propTypes", {
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array, _propTypes["default"].object, _propTypes["default"].number]),
  options: _propTypes["default"].object,
  onChange: _propTypes["default"].func,
  onOpen: _propTypes["default"].func,
  onClose: _propTypes["default"].func,
  onClear: _propTypes["default"].func,
  onMonthChange: _propTypes["default"].func,
  onYearChange: _propTypes["default"].func,
  onReady: _propTypes["default"].func,
  onValueUpdate: _propTypes["default"].func,
  onDayCreate: _propTypes["default"].func,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array, _propTypes["default"].object, _propTypes["default"].number]),
  className: _propTypes["default"].string,
  showClearBtn: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  enableTime: _propTypes["default"].bool,
  mode: _propTypes["default"].string
});
(0, _defineProperty2["default"])(DatePicker, "defaultProps", {
  options: {},
  onChange: _lodash.noop,
  onOpen: _lodash.noop,
  onClose: _lodash.noop,
  onClear: _lodash.noop,
  showClearBtn: true,
  mode: "single"
});
var _default = DatePicker;
exports["default"] = _default;