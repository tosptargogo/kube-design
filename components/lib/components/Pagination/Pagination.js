"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../Button"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Pagination = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Pagination, _Component);

  var _super = _createSuper(Pagination);

  function Pagination() {
    var _this;

    (0, _classCallCheck2["default"])(this, Pagination);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handlePrev", function () {
      var _this$props = _this.props,
          page = _this$props.page,
          onChange = _this$props.onChange;
      onChange && onChange(Math.max(page - 1, 1));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleNext", function () {
      var _this$props2 = _this.props,
          page = _this$props2.page,
          onChange = _this$props2.onChange;
      onChange && onChange(Math.min(page + 1, _this.totalPage));
    });
    return _this;
  }

  (0, _createClass2["default"])(Pagination, [{
    key: "render",
    value: function render() {
      var page = this.props.page;
      var totalPage = this.totalPage;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "pagination"
      }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        type: "flat",
        icon: "previous",
        iconSize: 20,
        disabled: page <= 1,
        onClick: this.handlePrev
      }), /*#__PURE__*/_react["default"].createElement("span", null, page, " / ", totalPage), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        type: "flat",
        icon: "next",
        iconSize: 20,
        disabled: page >= totalPage,
        onClick: this.handleNext
      }));
    }
  }, {
    key: "totalPage",
    get: function get() {
      var _this$props3 = this.props,
          total = _this$props3.total,
          limit = _this$props3.limit;
      var left = total % limit;
      return left === 0 ? Math.max(total / limit, 1) : (total - left) / limit + 1;
    }
  }]);
  return Pagination;
}(_react.Component);

exports["default"] = Pagination;