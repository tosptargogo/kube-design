"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Checkbox = require("../Checkbox");

var _Icon = _interopRequireDefault(require("../Icon"));

var _lodash = require("lodash");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Tr = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Tr, _Component);

  var _super = _createSuper(Tr);

  function Tr() {
    var _this;

    (0, _classCallCheck2["default"])(this, Tr);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      showExpand: _this.props.defaultExpandAllRows
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (checked) {
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
          onSelect(record, checked, [].concat((0, _toConsumableArray2["default"])(selectedRowKeys), [record[rowKey]]));
        } else {
          onSelect(record, checked, selectedRowKeys.filter(function (key) {
            return key !== record[rowKey];
          }));
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleAllChange", function (checked) {
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
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleExpand", function () {
      _this.setState(function (_ref) {
        var showExpand = _ref.showExpand;
        return {
          showExpand: !showExpand
        };
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(Tr, [{
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

        return /*#__PURE__*/_react["default"].createElement("th", {
          rowSpan: checkboxRowSpan
        }, /*#__PURE__*/_react["default"].createElement(_Checkbox.Checkbox, {
          checked: selectedRowKeys.length === records.length && selectedRowKeys.length > 0,
          indeterminate: selectedRowKeys.length < records.length && selectedRowKeys.length > 0,
          onChange: this.handleAllChange,
          disabled: records.length <= 0
        }));
      }

      var props = {};

      if ((0, _lodash.isFunction)(getCheckboxProps)) {
        props = getCheckboxProps(record);
      }

      return /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_Checkbox.Checkbox, (0, _extends2["default"])({}, props, {
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

      return /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
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

      return /*#__PURE__*/_react["default"].createElement("tr", {
        className: (0, _classnames["default"])("table-row table-row-expand", {
          "table-row-selected": this.isChecked
        })
      }, rowSelection && /*#__PURE__*/_react["default"].createElement("td", null), /*#__PURE__*/_react["default"].createElement("td", {
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
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("tr", {
        className: (0, _classnames["default"])("table-row", {
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
}(_react.Component);

exports["default"] = Tr;