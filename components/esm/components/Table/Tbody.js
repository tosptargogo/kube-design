import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from "react";
import { isEmpty } from "lodash";
import Tr from "./Tr";
import Td from "./Td";
import TableContext from "./context";

var Tbody = /*#__PURE__*/function (_Component) {
  _inherits(Tbody, _Component);

  var _super = _createSuper(Tbody);

  function Tbody() {
    _classCallCheck(this, Tbody);

    return _super.apply(this, arguments);
  }

  _createClass(Tbody, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(TableContext.Consumer, null, function (_ref) {
        var dataSource = _ref.dataSource,
            columns = _ref.columns,
            rowKey = _ref.rowKey,
            rowSelection = _ref.rowSelection,
            expandedRowRender = _ref.expandedRowRender,
            defaultExpandAllRows = _ref.defaultExpandAllRows;
        return /*#__PURE__*/React.createElement("tbody", null, dataSource.map(function (item) {
          return /*#__PURE__*/React.createElement(Tr, {
            key: item[rowKey],
            record: item,
            rowKey: rowKey,
            columns: columns,
            rowKeyData: item[rowKey],
            rowSelection: rowSelection,
            expandedRowRender: expandedRowRender,
            defaultExpandAllRows: defaultExpandAllRows
          }, function (column) {
            return /*#__PURE__*/React.createElement(Td, {
              key: column.key || column.dataIndex,
              column: column,
              record: item
            });
          });
        }));
      });
    }
  }]);

  return Tbody;
}(Component);

export { Tbody as default };