import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { omit, isNumber } from "lodash";
import Icon from "./LoadingIcon";
var sizeObj = {
  small: 20,
  medium: 32,
  large: 48
};

var Loading = /*#__PURE__*/function (_Component) {
  _inherits(Loading, _Component);

  var _super = _createSuper(Loading);

  function Loading(props) {
    var _this;

    _classCallCheck(this, Loading);

    _this = _super.call(this, props);
    _this.state = {
      spinning: props.spinning
    };
    return _this;
  }

  _createClass(Loading, [{
    key: "isNestedPattern",
    value: function isNestedPattern() {
      var children = this.props.children;
      return children;
    }
  }, {
    key: "renderIndicator",
    value: function renderIndicator() {
      var size = this.props.size;
      return /*#__PURE__*/React.createElement("span", {
        className: "spin-dot spin-dot-spin"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "loading",
        type: "dark",
        size: isNumber(size) ? size : sizeObj[size],
        style: {
          display: "block",
          margin: "auto"
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          size = _this$props.size,
          children = _this$props.children,
          wrapperClassName = _this$props.wrapperClassName,
          restProps = _objectWithoutProperties(_this$props, ["className", "size", "children", "wrapperClassName"]);

      var spinning = this.state.spinning;
      var spinClassName = classNames("spin", {
        "spin-sm": size === "small",
        "spin-lg": size === "large",
        "spin-spinning": spinning
      }, className);
      var divProps = omit(restProps, ["spinning"]);
      var spinElement = /*#__PURE__*/React.createElement("div", _extends({}, divProps, {
        className: spinClassName
      }), this.renderIndicator());

      if (this.isNestedPattern()) {
        var animateClassName = "spin-nested-loading";

        if (wrapperClassName) {
          animateClassName += " ".concat(wrapperClassName);
        }

        var containerClassName = classNames({
          "spin-container": true,
          "spin-blur": spinning
        });
        return /*#__PURE__*/React.createElement("div", _extends({}, divProps, {
          className: animateClassName
        }), spinning && /*#__PURE__*/React.createElement("div", {
          key: "loading"
        }, spinElement), /*#__PURE__*/React.createElement("div", {
          className: containerClassName,
          key: "container"
        }, children));
      }

      return spinning && spinElement;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var prevSpinning = prevState.spinning;
      var spinning = nextProps.spinning;

      if (prevSpinning !== spinning) {
        return {
          spinning: spinning
        };
      }

      return null;
    }
  }]);

  return Loading;
}(Component);

_defineProperty(Loading, "propTypes", {
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  spinning: PropTypes.bool,
  children: PropTypes.element
});

_defineProperty(Loading, "defaultProps", {
  spinning: true,
  size: "medium"
});

export default Loading;