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

var _asyncValidator = _interopRequireDefault(require("async-validator"));

var _lodash = require("lodash");

var _classnames = _interopRequireDefault(require("classnames"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var FormItem = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(FormItem, _React$Component);

  var _super = _createSuper(FormItem);

  function FormItem() {
    var _this;

    (0, _classCallCheck2["default"])(this, FormItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      error: null,
      componentError: null
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleValueChange", function (name, onChange, value) {
      value = (0, _lodash.get)(value, "currentTarget.value", value);

      if (name) {
        var _this$context = _this.context,
            formData = _this$context.formData,
            onFormChange = _this$context.onFormChange;
        (0, _lodash.set)(formData, name, value);
        onFormChange && onFormChange(name, value);
      }

      if ((0, _lodash.isFunction)(onChange)) {
        for (var _len2 = arguments.length, rest = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
          rest[_key2 - 3] = arguments[_key2];
        }

        onChange(value, rest);
      }

      var _this$context2 = _this.context,
          validateResults = _this$context2.validateResults,
          resetValidateResults = _this$context2.resetValidateResults;

      if (validateResults && validateResults.find(function (item) {
        return item.field === name;
      })) {
        resetValidateResults && resetValidateResults(name);
      }

      _this.setState({
        value: value
      });

      if (_this.schema && !_this.state.componentError) {
        _this.validate((0, _defineProperty2["default"])({}, name, value));
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleError", function (name, onError, error) {
      if (error !== _this.state.componentError) {
        _this.setState({
          componentError: error
        });
      }

      if ((0, _lodash.isFunction)(onError)) {
        for (var _len3 = arguments.length, rest = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
          rest[_key3 - 3] = arguments[_key3];
        }

        onError(error, rest);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "validate", (0, _lodash.debounce)(function (data) {
      _this.schema.validate(data, {
        firstFields: true
      }, function (errors) {
        _this.setState({
          error: errors ? errors[0] : null
        });
      });
    }, 200));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getValue", function (name, _ref) {
      var propsValue = _ref.value,
          defaultValue = _ref.defaultValue;
      var formData = _this.context.formData;
      var value;

      if ((0, _lodash.isUndefined)(formData) || (0, _lodash.isEmpty)(name)) {
        value = propsValue;
      } else {
        value = (0, _lodash.get)(formData, name);
      }

      if (!(0, _lodash.isUndefined)(value)) {
        return value;
      }

      if (!(0, _lodash.isUndefined)(defaultValue) && defaultValue !== "") {
        (0, _lodash.set)(formData, name, defaultValue);
      }

      return defaultValue;
    });
    return _this;
  }

  (0, _createClass2["default"])(FormItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          children = _this$props.children,
          rules = _this$props.rules;

      if (rules) {
        this.context.registerValidate(children.props.name, rules);
        this.schema = new _asyncValidator["default"]((0, _defineProperty2["default"])({}, children.props.name, rules.filter(function (rule) {
          return !rule.checkOnSubmit;
        })));
      }

      if (this.context.registerGroup) {
        this.context.registerGroup(children.props.name);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          rules = _this$props2.rules;

      if (rules) {
        this.context.resetValidate(children.props.name);
        this.schema = null;
      }

      if (this.context.unRegisterGroup) {
        this.context.unRegisterGroup(children.props.name);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          error = _this$props3.error,
          className = _this$props3.className,
          desc = _this$props3.desc,
          label = _this$props3.label,
          _this$props3$rules = _this$props3.rules,
          rules = _this$props3$rules === void 0 ? [] : _this$props3$rules;
      var validateResults = this.context.validateResults;
      var name = children.props.name;

      var childNode = /*#__PURE__*/_react["default"].cloneElement(children, _objectSpread(_objectSpread({}, children.props), {}, {
        id: name,
        onChange: this.handleValueChange.bind(this, name, children.props.onChange),
        onError: this.handleError.bind(this, name, children.props.onError),
        value: this.getValue(name, children.props)
      }));

      var lastError = error || this.state.componentError || this.state.error || validateResults && validateResults.find(function (item) {
        return item.field === name;
      });
      var classNames = (0, _classnames["default"])("form-item", {
        "error-item": !(0, _lodash.isEmpty)(lastError)
      }, className);
      var isRequired = rules.some(function (rule) {
        return rule.required;
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classNames
      }, label && /*#__PURE__*/_react["default"].createElement("label", {
        className: "form-item-label",
        htmlFor: name
      }, label, isRequired ? /*#__PURE__*/_react["default"].createElement("span", {
        className: "form-item-required"
      }, "*") : null), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-item-control"
      }, childNode, !(0, _lodash.isEmpty)(lastError) && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-item-error"
      }, (0, _lodash.isObject)(lastError.message) ? lastError.message.message : lastError.message), (0, _lodash.isEmpty)(lastError) && desc && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-item-desc"
      }, desc)));
    }
  }]);
  return FormItem;
}(_react["default"].Component);

exports["default"] = FormItem;
(0, _defineProperty2["default"])(FormItem, "propTypes", {
  className: _propTypes["default"].string,
  error: _propTypes["default"].object
});
(0, _defineProperty2["default"])(FormItem, "contextTypes", {
  formData: _propTypes["default"].object,
  onFormChange: _propTypes["default"].func,
  registerValidate: _propTypes["default"].func,
  resetValidate: _propTypes["default"].func,
  validateResults: _propTypes["default"].array,
  resetValidateResults: _propTypes["default"].func,
  registerGroup: _propTypes["default"].func,
  unRegisterGroup: _propTypes["default"].func
});