import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

var Generator = function Generator(props) {
  return function (BasicComponent) {
    return /*#__PURE__*/function (_Component) {
      _inherits(Adapter, _Component);

      var _super = _createSuper(Adapter);

      function Adapter() {
        _classCallCheck(this, Adapter);

        return _super.apply(this, arguments);
      }

      _createClass(Adapter, [{
        key: "render",
        value: function render() {
          return /*#__PURE__*/React.createElement(BasicComponent, _extends({}, props, this.props));
        }
      }]);

      return Adapter;
    }(Component);
  };
};

export default Generator;