"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var CollapseTransition = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(CollapseTransition, _Component);

  var _super = _createSuper(CollapseTransition);

  function CollapseTransition() {
    (0, _classCallCheck2["default"])(this, CollapseTransition);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(CollapseTransition, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var visible = this.props.visible;
      this.beforeEnter();

      if (visible) {
        this.enter();
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this$props = this.props,
          visible = _this$props.visible,
          children = _this$props.children;

      if (visible !== nextProps.visible) {
        this.triggerChange(nextProps.visible);
      }

      if (children !== nextProps.children) {
        return true;
      }

      return false;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.beforeLeave();
      this.leave();
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
    }
  }, {
    key: "triggerChange",
    value: function triggerChange(visible) {
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);

      if (visible) {
        this.beforeEnter();
        this.enter();
      } else {
        this.beforeLeave();
        this.leave();
      }
    }
  }, {
    key: "beforeEnter",
    value: function beforeEnter() {
      var el = this.selfRef;
      el.dataset.oldOverflow = el.style.overflow;
      el.style.height = 0;
    }
  }, {
    key: "enter",
    value: function enter() {
      var _this = this;

      var el = this.selfRef;
      el.style.display = "block";

      if (el.scrollHeight !== 0) {
        el.style.height = "".concat(el.scrollHeight, "px");
      } else {
        el.style.height = "";
      }

      el.style.overflow = "hidden";
      this.enterTimer = setTimeout(function () {
        return _this.afterEnter();
      }, 300);
    }
  }, {
    key: "afterEnter",
    value: function afterEnter() {
      var el = this.selfRef;
      el.style.display = "block";
      el.style.height = "";
      el.style.overflow = el.dataset.oldOverflow;
    }
  }, {
    key: "beforeLeave",
    value: function beforeLeave() {
      var el = this.selfRef;
      el.dataset.oldOverflow = el.style.overflow;
      el.style.display = "block";

      if (el.scrollHeight !== 0) {
        el.style.height = "".concat(el.scrollHeight, "px");
      }

      el.style.overflow = "hidden";
    }
  }, {
    key: "leave",
    value: function leave() {
      var _this2 = this;

      var el = this.selfRef;

      if (el.scrollHeight !== 0) {
        el.style.height = 0;
      }

      this.leaveTimer = setTimeout(function () {
        return _this2.afterLeave();
      }, 300);
    }
  }, {
    key: "afterLeave",
    value: function afterLeave() {
      var el = this.selfRef;
      if (!el) return;
      el.style.display = "none";
      el.style.height = "";
      el.style.overflow = el.dataset.oldOverflow;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "collapse-transition",
        ref: function ref(e) {
          _this3.selfRef = e;
        }
      }, children);
    }
  }]);
  return CollapseTransition;
}(_react.Component);

exports["default"] = CollapseTransition;
(0, _defineProperty2["default"])(CollapseTransition, "propTypes", {
  visible: _propTypes["default"].bool,
  children: _propTypes["default"].node
});