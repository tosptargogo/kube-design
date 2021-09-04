import _extends from "@babel/runtime/helpers/esm/extends";
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
import { get } from "lodash";
import Icon from "../Icon";
import Dropdown from "../Dropdown";
import Menu from "../Menu";
import LocaleProvider from "../LocaleProvider";
var MenuItem = Menu.MenuItem;
var locale = LocaleProvider.locale;

var Th = /*#__PURE__*/function (_Component) {
  _inherits(Th, _Component);

  var _super = _createSuper(Th);

  function Th() {
    var _this;

    _classCallCheck(this, Th);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleSorterChange", function (e, key) {
      var _this$props = _this.props,
          column = _this$props.column,
          onChange = _this$props.onChange;
      onChange({}, {
        field: column.dataIndex,
        order: key
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFiltersChange", function (e, key) {
      var _this$props2 = _this.props,
          column = _this$props2.column,
          onChange = _this$props2.onChange;
      onChange(_defineProperty({}, column.dataIndex, key), {});
    });

    return _this;
  }

  _createClass(Th, [{
    key: "renderFilters",
    value: function renderFilters() {
      var _this$props3 = this.props,
          column = _this$props3.column,
          filters = _this$props3.filters,
          sorter = _this$props3.sorter;

      if (column.sorter) {
        return /*#__PURE__*/React.createElement(Menu, {
          label: locale.get("KUBE_OPERATE"),
          selectedKey: sorter.field === column.dataIndex ? sorter.order : "",
          onClick: this.handleSorterChange
        }, /*#__PURE__*/React.createElement(MenuItem, {
          key: "ascend"
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "sort-ascending"
        }), /*#__PURE__*/React.createElement("span", null, locale.get("KUBE_ASCENDING_ORDER"))), /*#__PURE__*/React.createElement(MenuItem, {
          key: "descend"
        }, /*#__PURE__*/React.createElement(Icon, {
          name: "sort-descending"
        }), /*#__PURE__*/React.createElement("span", null, locale.get("KUBE_DESCENDING_ORDER"))));
      }

      if (column.filters) {
        return /*#__PURE__*/React.createElement(Menu, {
          label: locale.get("KUBE_FILTER"),
          selectedKey: get(filters, column.dataIndex, ""),
          onClick: this.handleFiltersChange
        }, column.filters.map(function (filter) {
          return /*#__PURE__*/React.createElement(MenuItem, {
            key: filter.value
          }, filter.text);
        }));
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var column = this.props.column;
      var props = {
        colSpan: column.colspan < 2 ? undefined : column.colspan,
        rowSpan: column.rowspan < 2 ? undefined : column.rowspan
      };

      if (this.hasFilter) {
        return /*#__PURE__*/React.createElement("th", _extends({}, props, {
          className: "table-column-has-filters"
        }), /*#__PURE__*/React.createElement(Dropdown, {
          content: this.renderFilters()
        }, /*#__PURE__*/React.createElement("a", null, /*#__PURE__*/React.createElement("span", null, column.title), /*#__PURE__*/React.createElement(Icon, {
          name: "caret-down"
        }))));
      }

      return /*#__PURE__*/React.createElement("th", props, column.title);
    }
  }, {
    key: "hasFilter",
    get: function get() {
      var column = this.props.column;
      return column.sorter || column.filters;
    }
  }]);

  return Th;
}(Component);

export { Th as default };