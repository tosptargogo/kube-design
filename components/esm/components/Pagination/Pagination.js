import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from "react";
import Button from "../Button";

var Pagination = /*#__PURE__*/function (_Component) {
  _inherits(Pagination, _Component);

  var _super = _createSuper(Pagination);

  function Pagination() {
    var _this;

    _classCallCheck(this, Pagination);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handlePrev", function () {
      var _this$props = _this.props,
          page = _this$props.page,
          onChange = _this$props.onChange;
      onChange && onChange(Math.max(page - 1, 1));
    });

    _defineProperty(_assertThisInitialized(_this), "handleNext", function () {
      var _this$props2 = _this.props,
          page = _this$props2.page,
          onChange = _this$props2.onChange;
      onChange && onChange(Math.min(page + 1, _this.totalPage));
    });

    return _this;
  }

  _createClass(Pagination, [{
    key: "render",
    value: function render() {
      var page = this.props.page;
      var totalPage = this.totalPage;
      return /*#__PURE__*/React.createElement("div", {
        className: "pagination"
      }, /*#__PURE__*/React.createElement(Button, {
        type: "flat",
        icon: "previous",
        iconSize: 20,
        disabled: page <= 1,
        onClick: this.handlePrev
      }), /*#__PURE__*/React.createElement("span", null, page, " / ", totalPage), /*#__PURE__*/React.createElement(Button, {
        type: "flat",
        icon: "next",
        iconSize: 20,
        disabled: page >= totalPage,
        onClick: this.handleNext
      }));
    }
  }, {
    key: "totalPage",
    get: function get() {
      var _this$props3 = this.props,
          total = _this$props3.total,
          limit = _this$props3.limit;
      var left = total % limit;
      return left === 0 ? Math.max(total / limit, 1) : (total - left) / limit + 1;
    }
  }]);

  return Pagination;
}(Component);

export { Pagination as default };