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
import { isFunction, isBoolean } from "lodash";
import classNames from "classnames";

var Toggle = /*#__PURE__*/function (_Component) {
  _inherits(Toggle, _Component);

  var _super = _createSuper(Toggle);

  function Toggle(props) {
    var _this;

    _classCallCheck(this, Toggle);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "toggleSwitch", function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          propsChecked = _this$props.checked;
      var checked = _this.state.checked;
      if (disabled) return;

      if (!isBoolean(propsChecked)) {
        if (_this.timer) clearTimeout(_this.timer);

        _this.setState({
          switching: true,
          checked: !checked
        }, function () {
          _this.handleChange(checked);

          _this.timer = setTimeout(function () {
            _this.setState({
              switching: false
            });
          }, 360);
        });
      } else {
        _this.handleChange(propsChecked);
      }
    });

    var _checked = props.checked,
        defaultChecked = props.defaultChecked;
    _this.state = {
      checked: _checked || defaultChecked,
      switching: false
    };
    return _this;
  }

  _createClass(Toggle, [{
    key: "handleChange",
    value: function handleChange(currentChecked) {
      var onChange = this.props.onChange;

      if (isFunction(onChange)) {
        onChange(!currentChecked);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          disabled = _this$props2.disabled,
          onText = _this$props2.onText,
          offText = _this$props2.offText;
      var _this$state = this.state,
          checked = _this$state.checked,
          switching = _this$state.switching;
      var showText = checked ? onText : offText;
      return /*#__PURE__*/React.createElement("label", {
        className: classNames("toggle", {
          disabled: disabled
        }, {
          checked: checked
        }),
        onClick: this.toggleSwitch
      }, showText ? /*#__PURE__*/React.createElement("span", {
        className: classNames("text", {
          checked: checked
        }),
        style: {
          opacity: switching ? 0 : 1
        }
      }, showText) : null);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var checked = prevState.checked;

      if ("checked" in nextProps && nextProps.checked !== checked) {
        return {
          checked: nextProps.checked
        };
      }

      return null;
    }
  }]);

  return Toggle;
}(Component);

_defineProperty(Toggle, "propTypes", {
  onText: PropTypes.string,
  offText: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool
});

_defineProperty(Toggle, "defaultProps", {
  disabled: false,
  defaultChecked: false
});

export default Toggle;