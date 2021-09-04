"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = require("lodash");

var _fuseMin = _interopRequireDefault(require("fuse.js/dist/fuse.min.js"));

var _Dropdown = _interopRequireDefault(require("../Dropdown"));

var _Menu = _interopRequireDefault(require("../Menu"));

var _Input = require("../Input");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var AutoComplete = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(AutoComplete, _PureComponent);

  var _super = _createSuper(AutoComplete);

  function AutoComplete() {
    var _this;

    (0, _classCallCheck2["default"])(this, AutoComplete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      value: "value" in _this.props ? _this.props.value : _this.props.defaultValue,
      options: (0, _toConsumableArray2["default"])(_this.props.options),
      searchResult: [],
      showOptions: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fuseOptions", {
      includeScore: true,
      includeMatches: true,
      minMatchCharLength: 1
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "modifiers", {
      hide: {
        enabled: false
      },
      preventOverflow: {
        enabled: false
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fuse", new _fuseMin["default"](_this.props.options, _this.fuseOptions));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showOptions", function () {
      _this.setState({
        showOptions: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "hideOptions", function () {
      _this.setState({
        showOptions: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "triggerChange", function () {
      var onChange = _this.props.onChange;
      var value = _this.state.value;
      onChange(value);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOptionsClick", function (e, key) {
      _this.handleInputChange({
        target: {
          value: key
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleInputChange", function (e) {
      var value = e.target.value;
      var options = _this.props.options;
      var newOptions = (0, _toConsumableArray2["default"])(options);
      var searchResult = [];

      if (value) {
        searchResult = _this.fuse.search(value);

        if (searchResult.some(function (item) {
          return item.score === 0;
        })) {
          searchResult = searchResult.filter(function (item) {
            return item.score === 0;
          });
        }

        newOptions = searchResult.map(function (item) {
          return item.item;
        });
      }

      _this.setState({
        value: value,
        options: newOptions,
        showOptions: true,
        searchResult: searchResult
      }, _this.triggerChange);
    });
    return _this;
  }

  (0, _createClass2["default"])(AutoComplete, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!(0, _lodash.isEqual)(prevProps.options, this.props.options)) {
        this.setState({
          options: (0, _toConsumableArray2["default"])(this.props.options),
          searchResult: []
        });
        this.fuse = new _fuseMin["default"](this.props.options, this.fuseOptions);
      }

      if ("value" in this.props && this.props.value !== prevState.value) {
        this.setState({
          value: this.props.value
        });
      }
    }
  }, {
    key: "renderHighlight",
    value: function renderHighlight(value) {
      var searchResult = this.state.searchResult;
      var result = searchResult.find(function (item) {
        return item.item === value;
      });

      if (result) {
        var _get = (0, _lodash.get)(result, "matches[0]", {}),
            _value = _get.value,
            indices = _get.indices;

        if (_value && indices) {
          var newValue = "";
          var start = 0;
          indices.forEach(function (ind) {
            newValue += _value.slice(start, ind[0]);
            newValue += "<mark>".concat(_value.slice(ind[0], ind[1] + 1), "</mark>");
            start = ind[1] + 1;
          });
          newValue += _value.slice(start);
          return /*#__PURE__*/_react["default"].createElement("span", {
            dangerouslySetInnerHTML: {
              __html: newValue
            }
          });
        }
      }

      return value;
    }
  }, {
    key: "renderOptions",
    value: function renderOptions() {
      var _this2 = this;

      var optionRenderer = this.props.optionRenderer;
      var options = this.state.options;

      if (options.length <= 0) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
        className: "auto-complete-content",
        onClick: this.handleOptionsClick
      }, options.map(function (option) {
        return /*#__PURE__*/_react["default"].createElement(_Menu["default"].MenuItem, {
          key: option
        }, optionRenderer ? optionRenderer(option) : _this2.renderHighlight(option));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          options = _this$props.options,
          optionRenderer = _this$props.optionRenderer,
          className = _this$props.className,
          rest = (0, _objectWithoutProperties2["default"])(_this$props, ["options", "optionRenderer", "className"]);
      var value = this.state.value;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("auto-complete", className)
      }, /*#__PURE__*/_react["default"].createElement(_Dropdown["default"], {
        visible: this.state.showOptions,
        content: this.renderOptions(),
        always: this.state.showOptions,
        onOpen: this.showOptions,
        onClose: this.hideOptions,
        modifiers: this.modifiers
      }, /*#__PURE__*/_react["default"].createElement(_Input.Input, (0, _extends2["default"])({
        className: "auto-complete-input"
      }, rest, {
        value: value,
        onChange: this.handleInputChange
      }))));
    }
  }]);
  return AutoComplete;
}(_react.PureComponent);

exports["default"] = AutoComplete;
(0, _defineProperty2["default"])(AutoComplete, "propTypes", {
  value: _propTypes["default"].string,
  defaultValue: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  className: _propTypes["default"].string,
  options: _propTypes["default"].array,
  optionsRenderer: _propTypes["default"].func
});
(0, _defineProperty2["default"])(AutoComplete, "defaultProps", {
  className: "",
  defaultValue: "",
  onChange: function onChange() {},
  options: []
});