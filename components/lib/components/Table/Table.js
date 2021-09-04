"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = require("lodash");

var _ColGroup = _interopRequireDefault(require("./ColGroup"));

var _Thead = _interopRequireDefault(require("./Thead"));

var _Tbody = _interopRequireDefault(require("./Tbody"));

var _context = _interopRequireDefault(require("./context"));

var _Loading = _interopRequireDefault(require("../Loading"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Table = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Table, _Component);

  var _super = _createSuper(Table);

  function Table(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Table);
    _this = _super.call(this, props);

    var _this$getColumns = _this.getColumns(props),
        _this$getColumns2 = (0, _slicedToArray2["default"])(_this$getColumns, 2),
        heads = _this$getColumns2[0],
        columns = _this$getColumns2[1];

    _this.state = {
      heads: heads,
      columns: columns
    };
    return _this;
  }

  (0, _createClass2["default"])(Table, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.columns.length !== prevProps.columns.length) {
        var _this$getColumns3 = this.getColumns(this.props),
            _this$getColumns4 = (0, _slicedToArray2["default"])(_this$getColumns3, 2),
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
            children.push.apply(children, (0, _toConsumableArray2["default"])(clm.children));
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
          rest = (0, _objectWithoutProperties2["default"])(_this$props, ["title", "footer", "loading", "className", "emptyText"]);
      return /*#__PURE__*/_react["default"].createElement(_context["default"].Provider, {
        value: _objectSpread(_objectSpread({}, rest), this.state)
      }, /*#__PURE__*/_react["default"].createElement(_Loading["default"], {
        spinning: loading
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("table", {
          "table-has-selected": this.hasSelected,
          "table-multi-heads": this.state.heads.length > 1
        }, className)
      }, title && /*#__PURE__*/_react["default"].createElement("div", {
        className: "table-title"
      }, title), /*#__PURE__*/_react["default"].createElement("div", {
        className: "table-body"
      }, /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement(_ColGroup["default"], null), /*#__PURE__*/_react["default"].createElement(_Thead["default"], null), /*#__PURE__*/_react["default"].createElement(_Tbody["default"], null))), (0, _lodash.isEmpty)(rest.dataSource) && /*#__PURE__*/_react["default"].createElement("div", {
        className: "table-placeholder"
      }, emptyText), footer && /*#__PURE__*/_react["default"].createElement("div", {
        className: "table-footer"
      }, footer))));
    }
  }, {
    key: "hasSelected",
    get: function get() {
      return (0, _lodash.get)(this.props, "rowSelection.selectedRowKeys.length") > 0;
    }
  }]);
  return Table;
}(_react.Component);

exports["default"] = Table;
(0, _defineProperty2["default"])(Table, "propTypes", {
  columns: _propTypes["default"].array,
  dataSource: _propTypes["default"].array,
  rowKey: _propTypes["default"].string,
  rowSelection: _propTypes["default"].object,
  filters: _propTypes["default"].object,
  sorter: _propTypes["default"].object,
  title: _propTypes["default"].node,
  footer: _propTypes["default"].node,
  onChange: _propTypes["default"].func,
  expandedRowRender: _propTypes["default"].func
});
(0, _defineProperty2["default"])(Table, "defaultProps", {
  rowKey: "name",
  columns: [],
  dataSource: [],
  filters: {},
  sorter: {},
  loading: false,
  defaultExpandAllRows: false,
  onChange: function onChange() {}
});