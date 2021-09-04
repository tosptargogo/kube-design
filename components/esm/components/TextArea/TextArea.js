import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
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
import classNames from "classnames";

var TextArea = /*#__PURE__*/function (_Component) {
  _inherits(TextArea, _Component);

  var _super = _createSuper(TextArea);

  function TextArea() {
    var _this;

    _classCallCheck(this, TextArea);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "ref", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.autoResize();

      var onChange = _this.props.onChange;
      onChange && onChange(e.target.value);
    });

    return _this;
  }

  _createClass(TextArea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.autoResize();
    }
  }, {
    key: "autoResize",
    value: function autoResize() {
      var _this$props = this.props,
          maxHeight = _this$props.maxHeight,
          autoResize = _this$props.autoResize;

      if (!autoResize) {
        return false;
      }

      var node = this.ref.current;
      node.style.height = "";

      if (node.scrollHeight > maxHeight) {
        node.style.height = "".concat(maxHeight, "px");
        node.style.overflow = "auto";
      } else {
        node.style.height = "".concat(node.scrollHeight, "px");
        node.style.overflow = "hidden";
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          autoResize = _this$props2.autoResize,
          maxHeight = _this$props2.maxHeight,
          resize = _this$props2.resize,
          rest = _objectWithoutProperties(_this$props2, ["className", "autoResize", "maxHeight", "resize"]);

      var props = _objectSpread(_objectSpread({}, rest), {}, {
        onChange: this.handleChange
      });

      if (resize) {
        props.resize = "true";
      }

      var style = autoResize ? classNames("textarea", "textareaAuto", className) : classNames("textarea", className);
      return /*#__PURE__*/React.createElement("textarea", _extends({
        ref: this.ref
      }, props, {
        className: style
      }));
    }
  }]);

  return TextArea;
}(Component);

_defineProperty(TextArea, "propTypes", {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autoResize: PropTypes.bool,
  maxHeight: PropTypes.number,
  onChange: PropTypes.func
});

_defineProperty(TextArea, "defaultProps", {
  rows: "2",
  autoResize: false,
  maxHeight: 800,
  onChange: function onChange() {}
});

export { TextArea as default };