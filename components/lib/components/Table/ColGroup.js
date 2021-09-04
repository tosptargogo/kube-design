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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

var _context = _interopRequireDefault(require("./context"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ColGroup = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ColGroup, _Component);

  var _super = _createSuper(ColGroup);

  function ColGroup() {
    (0, _classCallCheck2["default"])(this, ColGroup);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ColGroup, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_context["default"].Consumer, null, function (_ref) {
        var columns = _ref.columns,
            rowSelection = _ref.rowSelection,
            expandedRowRender = _ref.expandedRowRender;
        return /*#__PURE__*/_react["default"].createElement("colgroup", null, rowSelection && /*#__PURE__*/_react["default"].createElement("col", {
          width: "12"
        }), columns.map(function (column) {
          return /*#__PURE__*/_react["default"].createElement("col", (0, _extends2["default"])({
            key: column.key || column.dataIndex
          }, (0, _lodash.pick)(column, ["width"])));
        }), expandedRowRender && /*#__PURE__*/_react["default"].createElement("col", {
          width: "12"
        }));
      });
    }
  }]);
  return ColGroup;
}(_react.Component);

exports["default"] = ColGroup;