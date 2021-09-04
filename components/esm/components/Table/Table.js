import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
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
import { get as _get, isEmpty } from "lodash";
import ColGroup from "./ColGroup";
import Thead from "./Thead";
import Tbody from "./Tbody";
import TableContext from "./context";
import Loading from "../Loading";

var Table = /*#__PURE__*/function (_Component) {
  _inherits(Table, _Component);

  var _super = _createSuper(Table);

  function Table(props) {
    var _this;

    _classCallCheck(this, Table);

    _this = _super.call(this, props);

    var _this$getColumns = _this.getColumns(props),
        _this$getColumns2 = _slicedToArray(_this$getColumns, 2),
        heads = _this$getColumns2[0],
        columns = _this$getColumns2[1];

    _this.state = {
      heads: heads,
      columns: columns
    };
    return _this;
  }

  _createClass(Table, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.columns.length !== prevProps.columns.length) {
        var _this$getColumns3 = this.getColumns(this.props),
            _this$getColumns4 = _slicedToArray(_this$getColumns3, 2),
            heads = _this$getColumns4[0],
            columns = _this$getColumns4[1];

        this.setState({
          heads: heads,
          columns: columns
        });
      }
    }
  }, {
    key: "getColumns",
    value: function getColumns(props) {
      var columns = props.columns;
      var heads = [];
      var newColumns = [];

      var walk = function walk(data) {
        heads.push([]);
        var index = heads.length - 1;
        var children = [];
        data.forEach(function (clm) {
          if (clm.children) {
            children.push.apply(children, _toConsumableArray(clm.children));
            heads[index].push({
              title: clm.title,
              colspan: clm.children.length
            });
          } else {
            newColumns.push(clm);
            heads[index].push(clm);
          }
        });

        if (children.length > 0) {
          walk(children);
        }

        heads[index].forEach(function (head) {
          head.rowspan = heads.length - index;

          if (head.colspan) {
            head.rowspan -= 1;
          }
        });
      };

      walk(columns);
      return [heads, newColumns];
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          footer = _this$props.footer,
          loading = _this$props.loading,
          className = _this$props.className,
          emptyText = _this$props.emptyText,
          rest = _objectWithoutProperties(_this$props, ["title", "footer", "loading", "className", "emptyText"]);

      return /*#__PURE__*/React.createElement(TableContext.Provider, {
        value: _objectSpread(_objectSpread({}, rest), this.state)
      }, /*#__PURE__*/React.createElement(Loading, {
        spinning: loading
      }, /*#__PURE__*/React.createElement("div", {
        className: classNames("table", {
          "table-has-selected": this.hasSelected,
          "table-multi-heads": this.state.heads.length > 1
        }, className)
      }, title && /*#__PURE__*/React.createElement("div", {
        className: "table-title"
      }, title), /*#__PURE__*/React.createElement("div", {
        className: "table-body"
      }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement(ColGroup, null), /*#__PURE__*/React.createElement(Thead, null), /*#__PURE__*/React.createElement(Tbody, null))), isEmpty(rest.dataSource) && /*#__PURE__*/React.createElement("div", {
        className: "table-placeholder"
      }, emptyText), footer && /*#__PURE__*/React.createElement("div", {
        className: "table-footer"
      }, footer))));
    }
  }, {
    key: "hasSelected",
    get: function get() {
      return _get(this.props, "rowSelection.selectedRowKeys.length") > 0;
    }
  }]);

  return Table;
}(Component);

_defineProperty(Table, "propTypes", {
  columns: PropTypes.array,
  dataSource: PropTypes.array,
  rowKey: PropTypes.string,
  rowSelection: PropTypes.object,
  filters: PropTypes.object,
  sorter: PropTypes.object,
  title: PropTypes.node,
  footer: PropTypes.node,
  onChange: PropTypes.func,
  expandedRowRender: PropTypes.func
});

_defineProperty(Table, "defaultProps", {
  rowKey: "name",
  columns: [],
  dataSource: [],
  filters: {},
  sorter: {},
  loading: false,
  defaultExpandAllRows: false,
  onChange: function onChange() {}
});

export { Table as default };