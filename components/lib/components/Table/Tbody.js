"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

var _Tr = _interopRequireDefault(require("./Tr"));

var _Td = _interopRequireDefault(require("./Td"));

var _context = _interopRequireDefault(require("./context"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Tbody = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Tbody, _Component);

  var _super = _createSuper(Tbody);

  function Tbody() {
    (0, _classCallCheck2["default"])(this, Tbody);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Tbody, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_context["default"].Consumer, null, function (_ref) {
        var dataSource = _ref.dataSource,
            columns = _ref.columns,
            rowKey = _ref.rowKey,
            rowSelection = _ref.rowSelection,
            expandedRowRender = _ref.expandedRowRender,
            defaultExpandAllRows = _ref.defaultExpandAllRows;
        return /*#__PURE__*/_react["default"].createElement("tbody", null, dataSource.map(function (item) {
          return /*#__PURE__*/_react["default"].createElement(_Tr["default"], {
            key: item[rowKey],
            record: item,
            rowKey: rowKey,
            columns: columns,
            rowKeyData: item[rowKey],
            rowSelection: rowSelection,
            expandedRowRender: expandedRowRender,
            defaultExpandAllRows: defaultExpandAllRows
          }, function (column) {
            return /*#__PURE__*/_react["default"].createElement(_Td["default"], {
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
}(_react.Component);

exports["default"] = Tbody;