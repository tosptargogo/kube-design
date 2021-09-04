"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

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

var _Checkbox = _interopRequireDefault(require("./Checkbox"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var CheckboxGroup = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(CheckboxGroup, _Component);

  var _super = _createSuper(CheckboxGroup);

  function CheckboxGroup() {
    var _this;

    (0, _classCallCheck2["default"])(this, CheckboxGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      values: _this.props.value || []
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOptionChange", function (checked, value) {
      var onChange = _this.props.onChange;
      var values = _this.state.values;
      var newValues = [];

      if (checked) {
        newValues = [].concat((0, _toConsumableArray2["default"])(values), [value]);
      } else {
        newValues = values.filter(function (item) {
          return item !== value;
        });
      }

      _this.setState({
        values: newValues
      }, function () {
        return onChange(newValues);
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(CheckboxGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          name = _this$props.name,
          direction = _this$props.direction,
          options = _this$props.options,
          children = _this$props.children;
      var values = this.state.values;

      if (children && children.length > 0) {
        var childContent = _react["default"].Children.map(children, function (child) {
          return /*#__PURE__*/_react["default"].cloneElement(child, _objectSpread(_objectSpread({}, child.props), {}, {
            name: name,
            checked: values.includes(child.props.value),
            onChange: _this2.handleOptionChange
          }));
        });

        return /*#__PURE__*/_react["default"].createElement("div", {
          "data-direction": direction,
          className: (0, _classnames["default"])("checkbox-group", className)
        }, childContent);
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        "data-direction": direction,
        className: (0, _classnames["default"])("checkbox-group", className)
      }, options.map(function (option) {
        return /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
          key: option.value,
          name: name,
          value: option.value,
          checked: values.includes(option.value),
          onChange: _this2.handleOptionChange
        }, option.label);
      }));
    }
  }]);
  return CheckboxGroup;
}(_react.Component);

exports["default"] = CheckboxGroup;
(0, _defineProperty2["default"])(CheckboxGroup, "propTypes", {
  options: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].shape({
    value: _propTypes["default"].any,
    label: _propTypes["default"].string,
    disabled: _propTypes["default"].bool
  })])),
  value: _propTypes["default"].array,
  onChange: _propTypes["default"].func,
  direction: _propTypes["default"].oneOf(["row", "column"]),
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  children: _propTypes["default"].node
});
(0, _defineProperty2["default"])(CheckboxGroup, "defaultProps", {
  direction: "row",
  options: [],
  value: [],
  onChange: function onChange() {}
});