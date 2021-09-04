import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from "react";
import { pick } from "lodash";
import TableContext from "./context";

var ColGroup = /*#__PURE__*/function (_Component) {
  _inherits(ColGroup, _Component);

  var _super = _createSuper(ColGroup);

  function ColGroup() {
    _classCallCheck(this, ColGroup);

    return _super.apply(this, arguments);
  }

  _createClass(ColGroup, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(TableContext.Consumer, null, function (_ref) {
        var columns = _ref.columns,
            rowSelection = _ref.rowSelection,
            expandedRowRender = _ref.expandedRowRender;
        return /*#__PURE__*/React.createElement("colgroup", null, rowSelection && /*#__PURE__*/React.createElement("col", {
          width: "12"
        }), columns.map(function (column) {
          return /*#__PURE__*/React.createElement("col", _extends({
            key: column.key || column.dataIndex
          }, pick(column, ["width"])));
        }), expandedRowRender && /*#__PURE__*/React.createElement("col", {
          width: "12"
        }));
      });
    }
  }]);

  return ColGroup;
}(Component);

export { ColGroup as default };