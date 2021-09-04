import _extends from "@babel/runtime/helpers/esm/extends";
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

import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import classnames from "classnames";
import { generateUUID, createChainedFunction } from "./utils";
import Notice from "./Notice";

var NotifyManager = /*#__PURE__*/function (_Component) {
  _inherits(NotifyManager, _Component);

  var _super = _createSuper(NotifyManager);

  function NotifyManager() {
    var _this;

    _classCallCheck(this, NotifyManager);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      notices: []
    });

    _defineProperty(_assertThisInitialized(_this), "add", function (notice) {
      var key = notice.key || generateUUID("notice");

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

    _defineProperty(_assertThisInitialized(_this), "remove", function (key) {
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

  _createClass(NotifyManager, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          prefixCls = _this$props.prefixCls;
      var notices = this.state.notices;
      var noticeNodes = notices.map(function (notice) {
        var onClose = createChainedFunction(_this2.remove.bind(_this2, notice.key), notice.onClose);
        return /*#__PURE__*/React.createElement(Notice, _extends({}, notice, {
          onClose: onClose,
          ref: function ref(n) {
            _this2.notice = n;
          }
        }), notice.content);
      });
      return /*#__PURE__*/React.createElement("div", {
        className: classnames(prefixCls, _defineProperty({}, className, !!className)),
        style: style
      }, noticeNodes);
    }
  }]);

  return NotifyManager;
}(Component);

_defineProperty(NotifyManager, "propTypes", {
  style: PropTypes.object,
  className: PropTypes.string,
  prefixCls: PropTypes.string
});

_defineProperty(NotifyManager, "defaultProps", {
  style: {
    top: 65,
    left: "50%"
  },
  prefixCls: "notify"
});

_defineProperty(NotifyManager, "newInstance", function (properties, callback) {
  var _ref = properties || {},
      props = _extends({}, _ref);

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
        ReactDOM.unmountComponentAtNode(wrapper);
        wrapper.parentNode.removeChild(wrapper);
      }
    });
  };

  ReactDOM.render( /*#__PURE__*/React.createElement(NotifyManager, _extends({
    key: generateUUID("notify-manager")
  }, props, {
    ref: ref
  })), wrapper);
});

export default NotifyManager;