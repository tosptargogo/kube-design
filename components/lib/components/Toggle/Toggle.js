"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = require("lodash");

var _classnames = _interopRequireDefault(require("classnames"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Toggle = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Toggle, _Component);

  var _super = _createSuper(Toggle);

  function Toggle(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Toggle);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleSwitch", function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          propsChecked = _this$props.checked;
      var checked = _this.state.checked;
      if (disabled) return;

      if (!(0, _lodash.isBoolean)(propsChecked)) {
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

  (0, _createClass2["default"])(Toggle, [{
    key: "handleChange",
    value: function handleChange(currentChecked) {
      var onChange = this.props.onChange;

      if ((0, _lodash.isFunction)(onChange)) {
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
      return /*#__PURE__*/_react["default"].createElement("label", {
        className: (0, _classnames["default"])("toggle", {
          disabled: disabled
        }, {
          checked: checked
        }),
        onClick: this.toggleSwitch
      }, showText ? /*#__PURE__*/_react["default"].createElement("span", {
        className: (0, _classnames["default"])("text", {
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
}(_react.Component);

(0, _defineProperty2["default"])(Toggle, "propTypes", {
  onText: _propTypes["default"].string,
  offText: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  checked: _propTypes["default"].bool,
  defaultChecked: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(Toggle, "defaultProps", {
  disabled: false,
  defaultChecked: false
});
var _default = Toggle;
exports["default"] = _default;