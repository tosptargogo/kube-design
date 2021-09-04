"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

var _Icon = _interopRequireDefault(require("../Icon"));

var _Dropdown = _interopRequireDefault(require("../Dropdown"));

var _Menu = _interopRequireDefault(require("../Menu"));

var _LocaleProvider = _interopRequireDefault(require("../LocaleProvider"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var MenuItem = _Menu["default"].MenuItem;
var locale = _LocaleProvider["default"].locale;

var Th = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Th, _Component);

  var _super = _createSuper(Th);

  function Th() {
    var _this;

    (0, _classCallCheck2["default"])(this, Th);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleSorterChange", function (e, key) {
      var _this$props = _this.props,
          column = _this$props.column,
          onChange = _this$props.onChange;
      onChange({}, {
        field: column.dataIndex,
        order: key
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFiltersChange", function (e, key) {
      var _this$props2 = _this.props,
          column = _this$props2.column,
          onChange = _this$props2.onChange;
      onChange((0, _defineProperty2["default"])({}, column.dataIndex, key), {});
    });
    return _this;
  }

  (0, _createClass2["default"])(Th, [{
    key: "renderFilters",
    value: function renderFilters() {
      var _this$props3 = this.props,
          column = _this$props3.column,
          filters = _this$props3.filters,
          sorter = _this$props3.sorter;

      if (column.sorter) {
        return /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
          label: locale.get("KUBE_OPERATE"),
          selectedKey: sorter.field === column.dataIndex ? sorter.order : "",
          onClick: this.handleSorterChange
        }, /*#__PURE__*/_react["default"].createElement(MenuItem, {
          key: "ascend"
        }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          name: "sort-ascending"
        }), /*#__PURE__*/_react["default"].createElement("span", null, locale.get("KUBE_ASCENDING_ORDER"))), /*#__PURE__*/_react["default"].createElement(MenuItem, {
          key: "descend"
        }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          name: "sort-descending"
        }), /*#__PURE__*/_react["default"].createElement("span", null, locale.get("KUBE_DESCENDING_ORDER"))));
      }

      if (column.filters) {
        return /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
          label: locale.get("KUBE_FILTER"),
          selectedKey: (0, _lodash.get)(filters, column.dataIndex, ""),
          onClick: this.handleFiltersChange
        }, column.filters.map(function (filter) {
          return /*#__PURE__*/_react["default"].createElement(MenuItem, {
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
        return /*#__PURE__*/_react["default"].createElement("th", (0, _extends2["default"])({}, props, {
          className: "table-column-has-filters"
        }), /*#__PURE__*/_react["default"].createElement(_Dropdown["default"], {
          content: this.renderFilters()
        }, /*#__PURE__*/_react["default"].createElement("a", null, /*#__PURE__*/_react["default"].createElement("span", null, column.title), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          name: "caret-down"
        }))));
      }

      return /*#__PURE__*/_react["default"].createElement("th", props, column.title);
    }
  }, {
    key: "hasFilter",
    get: function get() {
      var column = this.props.column;
      return column.sorter || column.filters;
    }
  }]);
  return Th;
}(_react.Component);

exports["default"] = Th;