"use strict";

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

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = require("lodash");

var _Icon = _interopRequireDefault(require("../Icon"));

var _Input = _interopRequireDefault(require("./Input"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var InputSearch = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(InputSearch, _React$Component);

  var _super = _createSuper(InputSearch);

  function InputSearch(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, InputSearch);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (e) {
      var value = e.target.value;

      _this.setState({
        value: value
      }, function () {
        if ((0, _lodash.isEmpty)(value)) {
          _this.props.onSearch();
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClear", function (e) {
      e.nativeEvent.stopImmediatePropagation();

      _this.setState({
        value: ""
      }, function () {
        _this.props.onSearch(_this.state.value);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyUp", function (e) {
      if (e.keyCode === 13) {
        var value = _this.state.value;

        if (!(0, _lodash.isEmpty)(value)) {
          _this.props.onSearch((0, _lodash.trim)(_this.state.value));
        }
      }
    });
    _this.state = {
      value: props.value,
      defaultValue: props.value
    };
    return _this;
  }

  (0, _createClass2["default"])(InputSearch, [{
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
          rest = (0, _objectWithoutProperties2["default"])(_this$props, ["name", "placeholder", "disabled", "className", "style", "onSearch"]);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("has-icons-left", "has-icons-right", "input-search", className),
        style: style
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        className: "is-left",
        name: "magnifier"
      }), /*#__PURE__*/_react["default"].createElement(_Input["default"], (0, _extends2["default"])({
        type: "text",
        placeholder: placeholder,
        onChange: this.handleChange,
        onKeyUp: this.handleKeyUp,
        name: name,
        disabled: disabled
      }, rest, {
        value: value || ""
      })), !(0, _lodash.isEmpty)(value) && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
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
}(_react["default"].Component);

exports["default"] = InputSearch;
(0, _defineProperty2["default"])(InputSearch, "propTypes", {
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  name: _propTypes["default"].string,
  value: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  onSearch: _propTypes["default"].func,
  disabled: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(InputSearch, "defaultProps", {
  style: {},
  onSearch: function onSearch() {},
  disabled: false
});