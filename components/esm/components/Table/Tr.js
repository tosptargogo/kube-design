import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
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
import classNames from "classnames";
import { Checkbox } from "../Checkbox";
import Icon from "../Icon";
import { isFunction } from "lodash";

var Tr = /*#__PURE__*/function (_Component) {
  _inherits(Tr, _Component);

  var _super = _createSuper(Tr);

  function Tr() {
    var _this;

    _classCallCheck(this, Tr);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showExpand: _this.props.defaultExpandAllRows
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (checked) {
      var _this$props = _this.props,
          rowKey = _this$props.rowKey,
          _this$props$rowSelect = _this$props.rowSelection,
          rowSelection = _this$props$rowSelect === void 0 ? {} : _this$props$rowSelect,
          record = _this$props.record;
      var _rowSelection$selecte = rowSelection.selectedRowKeys,
          selectedRowKeys = _rowSelection$selecte === void 0 ? [] : _rowSelection$selecte,
          onSelect = rowSelection.onSelect;

      if (onSelect) {
        if (checked) {
          onSelect(record, checked, [].concat(_toConsumableArray(selectedRowKeys), [record[rowKey]]));
        } else {
          onSelect(record, checked, selectedRowKeys.filter(function (key) {
            return key !== record[rowKey];
          }));
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleAllChange", function (checked) {
      var _this$props2 = _this.props,
          rowKey = _this$props2.rowKey,
          _this$props2$rowSelec = _this$props2.rowSelection,
          rowSelection = _this$props2$rowSelec === void 0 ? {} : _this$props2$rowSelec,
          records = _this$props2.records;
      var onSelectAll = rowSelection.onSelectAll,
          getCheckboxProps = rowSelection.getCheckboxProps;

      if (onSelectAll) {
        if (checked) {
          onSelectAll(checked, records.filter(function (item) {
            if (getCheckboxProps) {
              var result = getCheckboxProps(item);

              if (result && result.disabled) {
                return false;
              }
            }

            return true;
          }).map(function (item) {
            return item[rowKey];
          }));
        } else {
          onSelectAll(checked, []);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleExpand", function () {
      _this.setState(function (_ref) {
        var showExpand = _ref.showExpand;
        return {
          showExpand: !showExpand
        };
      });
    });

    return _this;
  }

  _createClass(Tr, [{
    key: "renderSelection",
    value: function renderSelection() {
      var _this$props3 = this.props,
          index = _this$props3.index,
          checkboxRowSpan = _this$props3.checkboxRowSpan,
          rowSelection = _this$props3.rowSelection,
          isSelectAll = _this$props3.isSelectAll,
          record = _this$props3.record,
          records = _this$props3.records;

      if (!rowSelection) {
        return null;
      }

      var _rowSelection$selecte2 = rowSelection.selectedRowKeys,
          selectedRowKeys = _rowSelection$selecte2 === void 0 ? [] : _rowSelection$selecte2,
          getCheckboxProps = rowSelection.getCheckboxProps;

      if (isSelectAll) {
        if (index > 0) {
          return null;
        }

        return /*#__PURE__*/React.createElement("th", {
          rowSpan: checkboxRowSpan
        }, /*#__PURE__*/React.createElement(Checkbox, {
          checked: selectedRowKeys.length === records.length && selectedRowKeys.length > 0,
          indeterminate: selectedRowKeys.length < records.length && selectedRowKeys.length > 0,
          onChange: this.handleAllChange,
          disabled: records.length <= 0
        }));
      }

      var props = {};

      if (isFunction(getCheckboxProps)) {
        props = getCheckboxProps(record);
      }

      return /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Checkbox, _extends({}, props, {
        checked: this.isChecked,
        onChange: this.handleChange
      })));
    }
  }, {
    key: "renderExpandToggle",
    value: function renderExpandToggle() {
      var expandedRowRender = this.props.expandedRowRender;
      var showExpand = this.state.showExpand;

      if (!expandedRowRender) {
        return null;
      }

      return /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Icon, {
        name: showExpand ? "minus-square" : "plus-square",
        onClick: this.toggleExpand,
        clickable: true
      }));
    }
  }, {
    key: "renderExpand",
    value: function renderExpand() {
      var _this$props4 = this.props,
          record = _this$props4.record,
          rowSelection = _this$props4.rowSelection,
          columns = _this$props4.columns,
          expandedRowRender = _this$props4.expandedRowRender;
      var showExpand = this.state.showExpand;

      if (!expandedRowRender || !showExpand) {
        return null;
      }

      return /*#__PURE__*/React.createElement("tr", {
        className: classNames("table-row table-row-expand", {
          "table-row-selected": this.isChecked
        })
      }, rowSelection && /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", {
        colSpan: columns.length
      }, expandedRowRender(record)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          columns = _this$props5.columns,
          children = _this$props5.children,
          rowKeyData = _this$props5.rowKeyData;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("tr", {
        className: classNames("table-row", {
          "table-row-selected": this.isChecked
        }),
        "data-row-key": rowKeyData
      }, this.renderSelection(), columns.map(function (column) {
        return children(column);
      }), this.renderExpandToggle()), this.renderExpand());
    }
  }, {
    key: "isChecked",
    get: function get() {
      var _this$props6 = this.props,
          rowKey = _this$props6.rowKey,
          _this$props6$rowSelec = _this$props6.rowSelection,
          rowSelection = _this$props6$rowSelec === void 0 ? {} : _this$props6$rowSelec,
          record = _this$props6.record,
          isSelectAll = _this$props6.isSelectAll;
      var _rowSelection$selecte3 = rowSelection.selectedRowKeys,
          selectedRowKeys = _rowSelection$selecte3 === void 0 ? [] : _rowSelection$selecte3;
      return !isSelectAll && selectedRowKeys.includes(record[rowKey]);
    }
  }]);

  return Tr;
}(Component);

export { Tr as default };