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

import React from "react";
import PropTypes, {number} from "prop-types";
import Schema from "async-validator";
import { set, get, debounce, isFunction, isEmpty, isObject, isUndefined } from "lodash";
import classnames from "classnames";

var FormItem = /*#__PURE__*/function (_React$Component) {
  _inherits(FormItem, _React$Component);

  var _super = _createSuper(FormItem);

  function FormItem() {
    var _this;

    _classCallCheck(this, FormItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      error: null,
      componentError: null
    });

    _defineProperty(_assertThisInitialized(_this), "handleValueChange", function (name, onChange, value) {
      value = get(value, "currentTarget.value", value);

      if (this.props.children.props.type == "number"){
         value = parseInt(value)
      }
      if (name) {
        var _this$context = _this.context,
            formData = _this$context.formData,
            onFormChange = _this$context.onFormChange;
        set(formData, name, value);
        onFormChange && onFormChange(name, value);
      }

      if (isFunction(onChange)) {
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
        _this.validate(_defineProperty({}, name, value));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleError", function (name, onError, error) {
      if (error !== _this.state.componentError) {
        _this.setState({
          componentError: error
        });
      }

      if (isFunction(onError)) {
        for (var _len3 = arguments.length, rest = new Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
          rest[_key3 - 3] = arguments[_key3];
        }

        onError(error, rest);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "validate", debounce(function (data) {
      _this.schema.validate(data, {
        firstFields: true
      }, function (errors) {
        _this.setState({
          error: errors ? errors[0] : null
        });
      });
    }, 200));

    _defineProperty(_assertThisInitialized(_this), "getValue", function (name, _ref) {
      var propsValue = _ref.value,
          defaultValue = _ref.defaultValue;
      var formData = _this.context.formData;
      var value;

      if (isUndefined(formData) || isEmpty(name)) {
        value = propsValue;
      } else {
        value = get(formData, name);
      }

      if (!isUndefined(value)) {
        return value;
      }

      if (!isUndefined(defaultValue) && defaultValue !== "") {
        set(formData, name, defaultValue);
      }

      return defaultValue;
    });

    return _this;
  }

  _createClass(FormItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          children = _this$props.children,
          rules = _this$props.rules;

      if (rules) {
        this.context.registerValidate(children.props.name, rules);
        this.schema = new Schema(_defineProperty({}, children.props.name, rules.filter(function (rule) {
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
          descdynamicvalue = this.props.descdynamicvalue,
          children = _this$props3.children,
          error = _this$props3.error,
          className = _this$props3.className,
          desc = _this$props3.desc,
          label = _this$props3.label,
          _this$props3$rules = _this$props3.rules,
          rules = _this$props3$rules === void 0 ? [] : _this$props3$rules;
      if (descdynamicvalue && this.context.formData.NodeNum){
        desc = _this$props3.desc+this.context.formData.NodeNum
      }
      var validateResults = this.context.validateResults;
      var name = children.props.name;
      var childNode = /*#__PURE__*/React.cloneElement(children, _objectSpread(_objectSpread({}, children.props), {}, {
        id: name,
        onChange: this.handleValueChange.bind(this, name, children.props.onChange),
        onError: this.handleError.bind(this, name, children.props.onError),
        value: this.getValue(name, children.props)
      }));
      var lastError = error || this.state.componentError || this.state.error || validateResults && validateResults.find(function (item) {
        return item.field === name;
      });
      var classNames = classnames("form-item", {
        "error-item": !isEmpty(lastError)
      }, className);
      var isRequired = rules.some(function (rule) {
        return rule.required;
      });
      return /*#__PURE__*/React.createElement("div", {
        className: classNames
      }, label && /*#__PURE__*/React.createElement("label", {
        className: "form-item-label",
        htmlFor: name
      }, label, isRequired ? /*#__PURE__*/React.createElement("span", {
        className: "form-item-required"
      }, "*") : null), /*#__PURE__*/React.createElement("div", {
        className: "form-item-control"
      }, childNode, !isEmpty(lastError) && /*#__PURE__*/React.createElement("div", {
        className: "form-item-error"
      }, isObject(lastError.message) ? lastError.message.message : lastError.message), isEmpty(lastError) && desc && /*#__PURE__*/React.createElement("div", {
        className: "form-item-desc"
      }, desc)));
    }
  }]);

  return FormItem;
}(React.Component);

_defineProperty(FormItem, "propTypes", {
  className: PropTypes.string,
  error: PropTypes.object
});

_defineProperty(FormItem, "contextTypes", {
  formData: PropTypes.object,
  onFormChange: PropTypes.func,
  registerValidate: PropTypes.func,
  resetValidate: PropTypes.func,
  validateResults: PropTypes.array,
  resetValidateResults: PropTypes.func,
  registerGroup: PropTypes.func,
  unRegisterGroup: PropTypes.func
});

export { FormItem as default };