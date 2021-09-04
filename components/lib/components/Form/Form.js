"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _asyncValidator = _interopRequireDefault(require("async-validator"));

var _lodash = require("lodash");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Form = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Form, _React$Component);

  var _super = _createSuper(Form);

  (0, _createClass2["default"])(Form, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        formData: this.state.formData,
        onFormChange: this.triggerFormChange,
        registerValidate: this.registerValidate,
        resetValidate: this.resetValidate,
        validateResults: this.state.errors,
        resetValidateResults: this.resetValidateResults
      };
    }
  }]);

  function Form(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Form);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleSubmit", function (e) {
      var onSubmit = _this.props.onSubmit;
      e.preventDefault();

      _this.validate(function () {
        onSubmit && onSubmit(_this.state.formData);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "validate", function (callback) {
      if ((0, _lodash.isFunction)(_this.customValidator)) {
        _this.customValidator(function () {
          _this.validator(callback);
        });
      } else {
        _this.validator(callback);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "validator", function (callback) {
      var schema = new _asyncValidator["default"](_this.descriptor);
      var data = Object.keys(_this.descriptor).reduce(function (prev, cur) {
        return _objectSpread(_objectSpread({}, prev), {}, (0, _defineProperty2["default"])({}, cur, (0, _lodash.get)(_this.state.formData, cur)));
      }, {});
      schema.validate(data, {
        firstFields: true
      }, function (errors) {
        if (errors) {
          return _this.setState({
            errors: errors
          });
        }

        callback && callback();
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "registerValidate", function (name, rules) {
      _this.descriptor[name] = rules;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "resetValidate", function (name) {
      delete _this.descriptor[name];
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "resetValidateResults", function (name) {
      _this.setState(function (_ref) {
        var errors = _ref.errors;
        return {
          errors: errors.filter(function (error) {
            return error.field !== name;
          })
        };
      });
    });
    _this.descriptor = {};
    _this.state = {
      errors: [],
      formData: props.data || {}
    };
    _this.triggerFormChange = props.onChange ? (0, _lodash.debounce)(props.onChange, 500) : null;
    _this.customValidator = null;
    return _this;
  }

  (0, _createClass2["default"])(Form, [{
    key: "getData",
    value: function getData() {
      return this.state.formData;
    }
  }, {
    key: "setData",
    value: function setData(name, value) {
      (0, _lodash.set)(this.state.formData, name, value);
    }
  }, {
    key: "resetData",
    value: function resetData() {
      this.setState({
        formData: this.props.defaultData
      });
    }
  }, {
    key: "setCustomValidator",
    value: function setCustomValidator(validator) {
      this.customValidator = validator;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          type = _this$props.type;
      var classNames = (0, _classnames["default"])("form", className);

      if (type === "inner") {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: classNames
        }, children);
      }

      return /*#__PURE__*/_react["default"].createElement("form", {
        className: classNames,
        onSubmit: this.handleSubmit,
        autoComplete: "off"
      }, children);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.data !== state.formData) {
        return {
          formData: props.data || {}
        };
      }

      return null;
    }
  }]);
  return Form;
}(_react["default"].Component);

exports["default"] = Form;
(0, _defineProperty2["default"])(Form, "propTypes", {
  className: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onSubmit: _propTypes["default"].func,
  defaultData: _propTypes["default"].object,
  data: _propTypes["default"].object,
  type: _propTypes["default"].string
});
(0, _defineProperty2["default"])(Form, "defaultProps", {
  defaultData: {},
  className: "",
  type: ""
});
(0, _defineProperty2["default"])(Form, "childContextTypes", {
  formData: _propTypes["default"].object,
  onFormChange: _propTypes["default"].func,
  registerValidate: _propTypes["default"].func,
  resetValidate: _propTypes["default"].func,
  validateResults: _propTypes["default"].array,
  resetValidateResults: _propTypes["default"].func
});