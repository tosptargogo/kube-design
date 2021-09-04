import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from "react";
import Tr from "./Tr";
import Th from "./Th";
import TableContext from "./context";

var Thead = /*#__PURE__*/function (_Component) {
  _inherits(Thead, _Component);

  var _super = _createSuper(Thead);

  function Thead() {
    _classCallCheck(this, Thead);

    return _super.apply(this, arguments);
  }

  _createClass(Thead, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(TableContext.Consumer, null, function (_ref) {
        var heads = _ref.heads,
            filters = _ref.filters,
            sorter = _ref.sorter,
            dataSource = _ref.dataSource,
            onChange = _ref.onChange,
            rowKey = _ref.rowKey,
            rowSelection = _ref.rowSelection;
        return /*#__PURE__*/React.createElement("thead", null, heads.map(function (head, index) {
          return /*#__PURE__*/React.createElement(Tr, {
            key: index,
            index: index,
            columns: head,
            rowKey: rowKey,
            rowSelection: rowSelection,
            records: dataSource,
            checkboxRowSpan: heads.length,
            isSelectAll: true
          }, function (column) {
            return /*#__PURE__*/React.createElement(Th, {
              key: column.key || column.dataIndex,
              column: column,
              onChange: onChange,
              filters: filters,
              sorter: sorter
            });
          });
        }));
      });
    }
  }]);

  return Thead;
}(Component);

export { Thead as default };