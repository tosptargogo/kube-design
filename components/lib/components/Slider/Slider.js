"use strict";

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

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = require("lodash");

var _Tooltip = _interopRequireDefault(require("../Tooltip"));

var _Input = require("../Input");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Slider = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Slider, _React$Component);

  var _super = _createSuper(Slider);

  function Slider(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Slider);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "triggerChange", function (_ref) {
      var left = _ref.left,
          right = _ref.right;
      var _this$props = _this.props,
          range = _this$props.range,
          onChange = _this$props.onChange;
      var value = [_this.getValueFromPercent(left), _this.getValueFromPercent(right)];

      if (value[0] !== _this.state.value[0] || value[1] !== _this.state.value[1]) {
        _this.setState({
          left: _this.getValuePercent(value[0]) * 100,
          right: _this.getValuePercent(value[1]) * 100,
          value: value
        }, function () {
          onChange(range ? value : value[1]);
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleResize", function () {
      _this.rect = _this.ref.current.getBoundingClientRect();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMouseDown", function (e) {
      document.removeEventListener("mouseup", _this.handleMouseUp);
      document.addEventListener("mouseup", _this.handleMouseUp);

      if (_this.ref.current.contains(e.target)) {
        _this.rect = _this.ref.current.getBoundingClientRect();

        if (e.target.getAttribute("role") === "slider") {
          document.addEventListener("mousemove", _this.handleMouseMove);
          _this.type = e.target.dataset.type;
          return;
        }

        var _this$state = _this.state,
            left = _this$state.left,
            right = _this$state.right;
        var range = _this.props.range;
        var dx = (e.x - _this.rect.x) / _this.rect.width * 100;

        if (dx > _this.endPercent) {
          dx = 100;
        }

        var middle = range ? left + right / 2 : 0;

        _this.triggerChange(dx < middle ? {
          left: dx,
          right: right
        } : {
          left: left,
          right: dx
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMouseMove", (0, _lodash.throttle)(function (e) {
      var range = _this.props.range;
      var _this$state2 = _this.state,
          left = _this$state2.left,
          right = _this$state2.right;
      var percent = (e.x - _this.rect.x) * 100 / _this.rect.width;

      if (percent > _this.endPercent) {
        percent = 100;
      }

      if (percent < 0) {
        percent = 0;
      }

      if (_this.type === "left" && range) {
        if (percent >= right) {
          _this.type = "right";
          return _this.triggerChange({
            left: right,
            right: percent
          });
        }

        return _this.triggerChange({
          left: percent,
          right: right
        });
      }

      if (percent <= left) {
        _this.type = "left";
        return _this.triggerChange({
          left: percent,
          right: left
        });
      }

      return _this.triggerChange({
        left: left,
        right: percent
      });
    }, 80));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMouseUp", function () {
      document.removeEventListener("mousemove", _this.handleMouseMove);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleInputChange", function (e) {
      var _this$props2 = _this.props,
          min = _this$props2.min,
          unit = _this$props2.unit,
          onChange = _this$props2.onChange;
      var value = e.target.value;

      _this.setState({
        value: [min, Number(value)],
        left: 0,
        right: _this.getValuePercent(Number(value)) * 100
      }, function () {
        onChange("".concat(value).concat(unit));
      });
    });
    _this.state = _this.getStateFromProps();
    var index = String(props.step).indexOf(".");
    _this.precision = index === -1 ? 0 : String(props.step).slice(index).length - 1;
    _this.ref = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(Slider, [{
    key: "getValueFromPercent",
    value: function getValueFromPercent(percent) {
      var _this$props3 = this.props,
          min = _this$props3.min,
          max = _this$props3.max,
          step = _this$props3.step;
      var value = (max - min) * percent / 100 + min;
      return Math.min((value - (value - min) % step).toFixed(this.precision), max);
    }
  }, {
    key: "getValuePercent",
    value: function getValuePercent(value) {
      var _this$props4 = this.props,
          min = _this$props4.min,
          max = _this$props4.max;
      return Math.min((value - min) / (max - min), 1);
    }
  }, {
    key: "getStateFromProps",
    value: function getStateFromProps() {
      var _this$props5 = this.props,
          unit = _this$props5.unit,
          range = _this$props5.range,
          min = _this$props5.min,
          _value = _this$props5.value,
          defaultValue = _this$props5.defaultValue;
      var value = (0, _lodash.clone)(!(0, _lodash.isUndefined)(_value) ? _value : defaultValue);
      var left;
      var right;
      var stateValue;

      if (range) {
        if (!value) {
          value = [min, min];
        } else {
          value[0] = Number(String(value[0]).replace(unit, ""));
          value[1] = Number(String(value[1]).replace(unit, ""));
        }

        left = this.getValuePercent(value[0]) * 100;
        right = this.getValuePercent(value[1]) * 100;
        stateValue = value;
      } else {
        if (!value) {
          value = min;
        } else {
          value = Number(String(value).replace(unit, ""));
        }

        left = 0;
        right = this.getValuePercent(value) * 100;
        stateValue = [min, value];
      }

      return {
        left: left,
        right: right,
        value: stateValue,
        originValue: _value
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.ref && this.ref.current) {
        this.ref.current.addEventListener("mousedown", this.handleMouseDown);
      }

      window.addEventListener("resize", this.handleResize);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.value !== prevState.originValue) {
        this.setState(this.getStateFromProps());
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleMouseDown);
      document.removeEventListener("mousemove", this.handleMouseMove);
      document.removeEventListener("mouseup", this.handleMouseUp);
      window.removeEventListener("resize", this.handleResize);
    }
  }, {
    key: "renderSlider",
    value: function renderSlider(type) {
      var _this$props6 = this.props,
          hasTooltip = _this$props6.hasTooltip,
          handlerStyle = _this$props6.handlerStyle,
          unit = _this$props6.unit;
      var value = this.state.value;
      var percent = this.state[type];

      var slider = /*#__PURE__*/_react["default"].createElement("div", {
        className: "slider-handler",
        role: "slider",
        "data-type": type,
        style: _objectSpread(_objectSpread({}, handlerStyle), {}, {
          left: "calc(".concat(percent, "% - 10px)")
        })
      });

      if (!hasTooltip) {
        return slider;
      }

      var tip = "".concat(type === "left" ? value[0] : value[1], " ").concat(unit);
      return /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
        content: tip
      }, slider);
    }
  }, {
    key: "renderMarks",
    value: function renderMarks() {
      var _this$props7 = this.props,
          marks = _this$props7.marks,
          max = _this$props7.max,
          min = _this$props7.min;

      if ((0, _lodash.isEmpty)(marks)) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "slider-marks"
      }, Object.keys(marks).map(function (key) {
        return /*#__PURE__*/_react["default"].createElement("span", {
          key: key,
          style: {
            left: "".concat(100 * Math.min((key - min) / (max - min), 1), "%")
          }
        }, marks[key]);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          left = _this$state3.left,
          right = _this$state3.right,
          value = _this$state3.value;
      var _this$props8 = this.props,
          className = _this$props8.className,
          style = _this$props8.style,
          railStyle = _this$props8.railStyle,
          trackStyle = _this$props8.trackStyle,
          range = _this$props8.range,
          unit = _this$props8.unit,
          withInput = _this$props8.withInput,
          min = _this$props8.min,
          max = _this$props8.max;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "slider-wrapper"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("slider", className),
        ref: this.ref,
        style: style
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "slider-rail",
        style: railStyle
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "slider-track",
        role: "track",
        style: _objectSpread(_objectSpread({}, trackStyle), {}, {
          left: "".concat(left, "%"),
          width: "".concat(right - left, "%")
        })
      }), range && this.renderSlider("left"), this.renderSlider("right"), this.renderMarks()), withInput && /*#__PURE__*/_react["default"].createElement("div", {
        className: "has-icons-right"
      }, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
        type: "number",
        value: value[1],
        onChange: this.handleInputChange,
        max: max,
        min: min
      }), unit && /*#__PURE__*/_react["default"].createElement("span", {
        className: "is-right"
      }, unit)));
    }
  }]);
  return Slider;
}(_react["default"].Component);

exports["default"] = Slider;
(0, _defineProperty2["default"])(Slider, "propTypes", {
  value: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]))]),
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]))]),
  min: _propTypes["default"].number,
  max: _propTypes["default"].number,
  step: _propTypes["default"].number,
  marks: _propTypes["default"].object,
  unit: _propTypes["default"].string,
  range: _propTypes["default"].bool,
  hasTooltip: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  railStyle: _propTypes["default"].object,
  handlerStyle: _propTypes["default"].object,
  trackStyle: _propTypes["default"].object,
  onChange: _propTypes["default"].func
});
(0, _defineProperty2["default"])(Slider, "defaultProps", {
  min: 0,
  unit: "",
  step: 1,
  marks: {},
  range: false,
  hasTooltip: false,
  className: "",
  style: {},
  railStyle: {},
  handlerStyle: {},
  trackStyle: {},
  onChange: function onChange() {}
});