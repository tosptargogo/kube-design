import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

var Progress = /*#__PURE__*/function (_React$Component) {
  _inherits(Progress, _React$Component);

  var _super = _createSuper(Progress);

  function Progress() {
    _classCallCheck(this, Progress);

    return _super.apply(this, arguments);
  }

  _createClass(Progress, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          percent = _this$props.percent,
          status = _this$props.status,
          range = _this$props.range,
          className = _this$props.className;
      var style = {
        width: "".concat(percent, "%")
      };
      var type = status;

      if (status === "auto") {
        if (percent < range[0]) {
          type = "primary";
        } else if (percent >= range[0] && percent < range[1]) {
          type = "warning";
        } else if (percent >= range[1]) {
          type = "danger";
        }
      }

      return /*#__PURE__*/React.createElement("div", {
        className: classnames("progress", className)
      }, /*#__PURE__*/React.createElement("div", {
        className: classnames("progress-bar", "progress-bar-".concat(type)),
        style: style
      }));
    }
  }]);

  return Progress;
}(React.Component);

_defineProperty(Progress, "propTypes", {
  className: PropTypes.string,
  percent: PropTypes.number.isRequired,
  status: PropTypes.oneOf(["primary", "warning", "danger", "auto"]),
  range: PropTypes.arrayOf(PropTypes.number)
});

_defineProperty(Progress, "defaultProps", {
  percent: 0,
  status: "auto",
  range: [80, 95]
});

export { Progress as default };