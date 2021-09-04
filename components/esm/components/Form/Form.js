import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Schema from "async-validator";
import { debounce, set, get, isFunction } from "lodash";

var Form = /*#__PURE__*/function (_React$Component) {
  _inherits(Form, _React$Component);

  var _super = _createSuper(Form);

  _createClass(Form, [{
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

    _classCallCheck(this, Form);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
      var onSubmit = _this.props.onSubmit;
      e.preventDefault();

      _this.validate(function () {
        onSubmit && onSubmit(_this.state.formData);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "validate", function (callback) {
      if (isFunction(_this.customValidator)) {
        _this.customValidator(function () {
          _this.validator(callback);
        });
      } else {
        _this.validator(callback);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "validator", function (callback) {
      var schema = new Schema(_this.descriptor);
      var data = Object.keys(_this.descriptor).reduce(function (prev, cur) {
        return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, cur, get(_this.state.formData, cur)));
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

    _defineProperty(_assertThisInitialized(_this), "registerValidate", function (name, rules) {
      _this.descriptor[name] = rules;
    });

    _defineProperty(_assertThisInitialized(_this), "resetValidate", function (name) {
      delete _this.descriptor[name];
    });

    _defineProperty(_assertThisInitialized(_this), "resetValidateResults", function (name) {
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
    _this.triggerFormChange = props.onChange ? debounce(props.onChange, 500) : null;
    _this.customValidator = null;
    return _this;
  }

  _createClass(Form, [{
    key: "getData",
    value: function getData() {
      return this.state.formData;
    }
  }, {
    key: "setData",
    value: function setData(name, value) {
      set(this.state.formData, name, value);
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
      var classNames = classnames("form", className);

      if (type === "inner") {
        return /*#__PURE__*/React.createElement("div", {
          className: classNames
        }, children);
      }

      return /*#__PURE__*/React.createElement("form", {
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
}(React.Component);

_defineProperty(Form, "propTypes", {
  className: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  defaultData: PropTypes.object,
  data: PropTypes.object,
  type: PropTypes.string
});

_defineProperty(Form, "defaultProps", {
  defaultData: {},
  className: "",
  type: ""
});

_defineProperty(Form, "childContextTypes", {
  formData: PropTypes.object,
  onFormChange: PropTypes.func,
  registerValidate: PropTypes.func,
  resetValidate: PropTypes.func,
  validateResults: PropTypes.array,
  resetValidateResults: PropTypes.func
});

export { Form as default };