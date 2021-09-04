"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _utils = require("./utils");

var _Notice = _interopRequireDefault(require("./Notice"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var NotifyManager = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(NotifyManager, _Component);

  var _super = _createSuper(NotifyManager);

  function NotifyManager() {
    var _this;

    (0, _classCallCheck2["default"])(this, NotifyManager);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      notices: []
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "add", function (notice) {
      var key = notice.key || (0, _utils.generateUUID)("notice");

      _this.setState(function (previousState) {
        var notices = previousState.notices;

        if (!notices.filter(function (v) {
          return v.key === key;
        }).length) {
          if (notices.length >= 3) {
            notices.shift();
          }

          return {
            notices: notices.concat(_objectSpread({
              key: key
            }, notice))
          };
        }

        return {};
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "remove", function (key) {
      _this.setState(function (previousState) {
        return {
          notices: previousState.notices.filter(function (notice) {
            return notice.key !== key;
          })
        };
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(NotifyManager, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          prefixCls = _this$props.prefixCls;
      var notices = this.state.notices;
      var noticeNodes = notices.map(function (notice) {
        var onClose = (0, _utils.createChainedFunction)(_this2.remove.bind(_this2, notice.key), notice.onClose);
        return /*#__PURE__*/_react["default"].createElement(_Notice["default"], (0, _extends2["default"])({}, notice, {
          onClose: onClose,
          ref: function ref(n) {
            _this2.notice = n;
          }
        }), notice.content);
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames2["default"])(prefixCls, (0, _defineProperty2["default"])({}, className, !!className)),
        style: style
      }, noticeNodes);
    }
  }]);
  return NotifyManager;
}(_react.Component);

(0, _defineProperty2["default"])(NotifyManager, "propTypes", {
  style: _propTypes["default"].object,
  className: _propTypes["default"].string,
  prefixCls: _propTypes["default"].string
});
(0, _defineProperty2["default"])(NotifyManager, "defaultProps", {
  style: {
    top: 65,
    left: "50%"
  },
  prefixCls: "notify"
});
(0, _defineProperty2["default"])(NotifyManager, "newInstance", function (properties, callback) {
  var _ref = properties || {},
      props = (0, _extends2["default"])({}, _ref);

  var wrapper = document.createElement("div");
  wrapper.setAttribute("class", "".concat(props.wrapperCls || "notify", "-wrapper"));
  document.body.appendChild(wrapper);
  var called = false;

  var ref = function ref(notify) {
    if (called) {
      return;
    }

    called = true;
    callback({
      createNotice: function createNotice(noticeProps) {
        notify.add(noticeProps);
      },
      removeNotice: function removeNotice(key) {
        notify.remove(key);
      },
      component: notify,
      destroy: function destroy() {
        _reactDom["default"].unmountComponentAtNode(wrapper);

        wrapper.parentNode.removeChild(wrapper);
      }
    });
  };

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(NotifyManager, (0, _extends2["default"])({
    key: (0, _utils.generateUUID)("notify-manager")
  }, props, {
    ref: ref
  })), wrapper);
});
var _default = NotifyManager;
exports["default"] = _default;