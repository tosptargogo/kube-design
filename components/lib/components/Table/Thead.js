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

var _Tr = _interopRequireDefault(require("./Tr"));

var _Th = _interopRequireDefault(require("./Th"));

var _context = _interopRequireDefault(require("./context"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Thead = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Thead, _Component);

  var _super = _createSuper(Thead);

  function Thead() {
    (0, _classCallCheck2["default"])(this, Thead);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Thead, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_context["default"].Consumer, null, function (_ref) {
        var heads = _ref.heads,
            filters = _ref.filters,
            sorter = _ref.sorter,
            dataSource = _ref.dataSource,
            onChange = _ref.onChange,
            rowKey = _ref.rowKey,
            rowSelection = _ref.rowSelection;
        return /*#__PURE__*/_react["default"].createElement("thead", null, heads.map(function (head, index) {
          return /*#__PURE__*/_react["default"].createElement(_Tr["default"], {
            key: index,
            index: index,
            columns: head,
            rowKey: rowKey,
            rowSelection: rowSelection,
            records: dataSource,
            checkboxRowSpan: heads.length,
            isSelectAll: true
          }, function (column) {
            return /*#__PURE__*/_react["default"].createElement(_Th["default"], {
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
}(_react.Component);

exports["default"] = Thead;