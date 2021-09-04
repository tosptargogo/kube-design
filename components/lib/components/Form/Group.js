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

var _Checkbox = require("../Checkbox");

var _lodash = require("lodash");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Group = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Group, _React$Component);

  var _super = _createSuper(Group);

  function Group() {
    var _this;

    (0, _classCallCheck2["default"])(this, Group);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isCheck: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "items", new Set());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "registerGroup", function (name) {
      _this.items.add(name);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "unRegisterGroup", function (name) {
      _this.items["delete"](name);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleCheck", function (check) {
      var keepDataWhenUnCheck = _this.props.keepDataWhenUnCheck;

      _this.setState({
        isCheck: check
      }, function () {
        if (!keepDataWhenUnCheck && !check) {
          var formData = _this.context.formData;

          if (formData && _this.items.size > 0) {
            _this.items.forEach(function (item) {
              return (0, _lodash.unset)(formData, item);
            });
          }
        }
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(Group, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        registerGroup: this.registerGroup,
        unRegisterGroup: this.unRegisterGroup
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          checkable = _this$props.checkable,
          keepDataWhenUnCheck = _this$props.keepDataWhenUnCheck;
      var formData = this.context.formData;

      if (checkable && !keepDataWhenUnCheck && formData && this.items.size > 0 && Array.from(this.items).some(function (item) {
        return !(0, _lodash.isUndefined)((0, _lodash.get)(formData, item));
      })) {
        this.setState({
          isCheck: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          checkable = _this$props2.checkable,
          label = _this$props2.label,
          desc = _this$props2.desc,
          noWrapper = _this$props2.noWrapper;
      var isCheck = this.state.isCheck;

      if (!children) {
        return null;
      }

      var hideChildren = checkable && !isCheck;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("form-group", {
          "form-group-checkable": checkable
        })
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group-title"
      }, checkable ? /*#__PURE__*/_react["default"].createElement(_Checkbox.Checkbox, {
        checked: isCheck,
        onChange: this.handleCheck
      }, label) : label), desc && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group-desc"
      }, desc)), noWrapper ? /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])({
          "form-group-hide": hideChildren
        })
      }, children) : /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("form-group-content", {
          "form-group-hide": hideChildren
        })
      }, children));
    }
  }]);
  return Group;
}(_react["default"].Component);

exports["default"] = Group;
(0, _defineProperty2["default"])(Group, "propTypes", {
  keepDataWhenUnCheck: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(Group, "defaultProps", {
  keepDataWhenUnCheck: false
});
(0, _defineProperty2["default"])(Group, "contextTypes", {
  formData: _propTypes["default"].object
});
(0, _defineProperty2["default"])(Group, "childContextTypes", {
  registerGroup: _propTypes["default"].func,
  unRegisterGroup: _propTypes["default"].func
});