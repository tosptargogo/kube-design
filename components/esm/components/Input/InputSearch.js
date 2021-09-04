import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { isEmpty, trim } from "lodash";
import Icon from "../Icon";
import Input from "./Input";

var InputSearch = /*#__PURE__*/function (_React$Component) {
  _inherits(InputSearch, _React$Component);

  var _super = _createSuper(InputSearch);

  function InputSearch(props) {
    var _this;

    _classCallCheck(this, InputSearch);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var value = e.target.value;

      _this.setState({
        value: value
      }, function () {
        if (isEmpty(value)) {
          _this.props.onSearch();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClear", function (e) {
      e.nativeEvent.stopImmediatePropagation();

      _this.setState({
        value: ""
      }, function () {
        _this.props.onSearch(_this.state.value);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyUp", function (e) {
      if (e.keyCode === 13) {
        var value = _this.state.value;

        if (!isEmpty(value)) {
          _this.props.onSearch(trim(_this.state.value));
        }
      }
    });

    _this.state = {
      value: props.value,
      defaultValue: props.value
    };
    return _this;
  }

  _createClass(InputSearch, [{
    key: "render",
    value: function render() {
      var value = this.state.value;

      var _this$props = this.props,
          name = _this$props.name,
          placeholder = _this$props.placeholder,
          disabled = _this$props.disabled,
          className = _this$props.className,
          style = _this$props.style,
          onSearch = _this$props.onSearch,
          rest = _objectWithoutProperties(_this$props, ["name", "placeholder", "disabled", "className", "style", "onSearch"]);

      return /*#__PURE__*/React.createElement("div", {
        className: classNames("has-icons-left", "has-icons-right", "input-search", className),
        style: style
      }, /*#__PURE__*/React.createElement(Icon, {
        className: "is-left",
        name: "magnifier"
      }), /*#__PURE__*/React.createElement(Input, _extends({
        type: "text",
        placeholder: placeholder,
        onChange: this.handleChange,
        onKeyUp: this.handleKeyUp,
        name: name,
        disabled: disabled
      }, rest, {
        value: value || ""
      })), !isEmpty(value) && /*#__PURE__*/React.createElement(Icon, {
        className: "is-right",
        name: "close",
        clickable: true,
        onClick: this.handleClear
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.value !== state.defaultValue) {
        return {
          value: props.value,
          defaultValue: props.value
        };
      }

      return null;
    }
  }]);

  return InputSearch;
}(React.Component);

_defineProperty(InputSearch, "propTypes", {
  className: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
  disabled: PropTypes.bool
});

_defineProperty(InputSearch, "defaultProps", {
  style: {},
  onSearch: function onSearch() {},
  disabled: false
});

export { InputSearch as default };