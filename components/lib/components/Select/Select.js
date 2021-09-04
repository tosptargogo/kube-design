"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = require("lodash");

var _Tag = _interopRequireDefault(require("../Tag"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _Loading = _interopRequireDefault(require("../Loading"));

var _Option = _interopRequireDefault(require("./Option"));

var _LocaleProvider = _interopRequireDefault(require("../LocaleProvider"));

var _utils = require("../../utils");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var locale = _LocaleProvider["default"].locale;

var Select = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Select, _React$Component);

  var _super = _createSuper(Select);

  function Select() {
    var _this;

    (0, _classCallCheck2["default"])(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      visible: false,
      value: _this.props.multi ? [] : "",
      inputValue: "",
      inputVisible: true
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "optionsRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputValueRef", /*#__PURE__*/_react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "reachBottom", false);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "addScrollEvents", function () {
      _this.scrollParents = (0, _utils.getScrollParents)(_this.selectRef.current);

      if (_this.scrollParents.length > 0) {
        _this.scrollParents.forEach(function (parent) {
          parent.addEventListener("scroll", _this.handleParentScroll);
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "removeScrollEvents", function () {
      if (_this.scrollParents.length > 0) {
        _this.scrollParents.forEach(function (parent) {
          parent.removeEventListener("scroll", _this.handleParentScroll);
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleInitValue", function () {
      var _this$props = _this.props,
          value = _this$props.value,
          defaultValue = _this$props.defaultValue;

      if (!(0, _lodash.isUndefined)(value)) {
        return _this.setState({
          value: value,
          inputValue: value,
          inputVisible: false
        });
      }

      if (!(0, _lodash.isUndefined)(defaultValue)) {
        return _this.setState({
          value: defaultValue,
          inputValue: defaultValue,
          inputVisible: false
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleParentScroll", function (e) {
      var visible = _this.state.visible;

      if (_this.optionsRef && _this.optionsRef.current && _this.scrollParents.length > 0) {
        var scrollParent = e ? e.target : _this.scrollParents[0];

        var controlRect = _this.selectRef.current.getBoundingClientRect();

        var optionsRect = _this.optionsRef.current.getBoundingClientRect();

        var top = controlRect.top + controlRect.height;
        var optionsMargin = 4;
        _this.optionsRef.current.style.left = "".concat(controlRect.left, "px");

        if (scrollParent === window || scrollParent === document) {
          var hasRoomBelow = top + optionsRect.height + optionsMargin < window.innerHeight;
          var hasRoomAbove = controlRect.top - optionsRect.height - optionsMargin * 2 > 0;

          if (!hasRoomBelow && !hasRoomAbove || hasRoomBelow) {
            _this.optionsRef.current.style.top = "".concat(top, "px");
          }

          if (!hasRoomBelow && hasRoomAbove) {
            _this.optionsRef.current.style.top = "".concat(controlRect.top - optionsRect.height - optionsMargin * 2, "px");
          }
        } else {
          var scrollRect = scrollParent.getBoundingClientRect();
          var scrollerBottom = scrollRect.top + scrollRect.height;

          var _hasRoomBelow = top + optionsRect.height + optionsMargin < scrollerBottom;

          var _hasRoomAbove = controlRect.top - optionsRect.height - optionsMargin * 2 > scrollRect.top;

          if (!_hasRoomBelow && !_hasRoomAbove || _hasRoomBelow) {
            _this.optionsRef.current.style.top = "".concat(top, "px");

            if (scrollRect.top > top && visible) {
              _this.handleOptionsClose();
            }
          }

          if (!_hasRoomBelow && _hasRoomAbove) {
            _this.optionsRef.current.style.top = "".concat(controlRect.top - optionsRect.height - optionsMargin * 2, "px");

            if (scrollerBottom < controlRect.top && visible) {
              _this.handleOptionsClose();
            }
          }
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateInputDOM", function (_ref) {
      var width = _ref.width,
          focus = _ref.focus;

      if (_this.inputRef && _this.inputRef.current) {
        _this.inputRef.current.style.width = width;

        if (focus) {
          _this.inputRef.current.focus();
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOptionClick", function (option) {
      if (option.disabled) {
        return;
      }

      var _this$props2 = _this.props,
          multi = _this$props2.multi,
          searchable = _this$props2.searchable;
      var _this$state = _this.state,
          visible = _this$state.visible,
          value = _this$state.value;
      var selectValue = option.value;

      if (multi) {
        var chooseValue = (0, _toConsumableArray2["default"])(value);

        if (value.includes(selectValue)) {
          chooseValue = chooseValue.filter(function (v) {
            return v !== selectValue;
          });
        } else {
          chooseValue = [].concat((0, _toConsumableArray2["default"])(chooseValue), [selectValue]);
        }

        if ((0, _lodash.isEmpty)(chooseValue)) {
          _this.setState({
            inputVisible: true
          });
        }

        _this.setState({
          value: chooseValue,
          inputValue: "",
          inputVisible: false
        }, function () {
          if (searchable) {
            _this.updateInputDOM({
              width: (0, _lodash.isEmpty)(_this.state.value) ? "100%" : "2px",
              focus: true
            });
          }

          _this.props.onChange(_this.state.value);
        });
      } else {
        _this.setState({
          visible: !visible,
          value: selectValue,
          inputValue: selectValue,
          inputVisible: false
        }, function () {
          _this.props.onChange(_this.state.value);
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOptionsOpen", function (e) {
      var visible = _this.state.visible;
      var searchable = _this.props.searchable;

      _this.setState({
        visible: searchable ? true : !visible
      });

      searchable && _this.handleInputStatus(true);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOptionsClose", function () {
      var visible = _this.state.visible;

      _this.setState({
        visible: !visible
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOptionsScroll", function (e) {
      if (_this.reachBottom) {
        return;
      }

      var _this$props3 = _this.props,
          onFetch = _this$props3.onFetch,
          _this$props3$paginati = _this$props3.pagination,
          pagination = _this$props3$paginati === void 0 ? {} : _this$props3$paginati;
      var _pagination$page = pagination.page,
          page = _pagination$page === void 0 ? 1 : _pagination$page;
      var _e$target = e.target,
          scrollTop = _e$target.scrollTop,
          scrollHeight = _e$target.scrollHeight,
          clientHeight = _e$target.clientHeight;

      if (scrollTop + clientHeight - scrollHeight >= 0) {
        _this.reachBottom = true;
        onFetch({
          page: page + 1,
          more: true
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDocumentClick", function (e) {
      var visible = _this.state.visible;

      if (visible && _this.selectRef && _this.selectRef.current) {
        if (!_this.selectRef.current.contains(e.target)) {
          _this.handleOptionsClose();
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleInputStatus", function (visible) {
      var _this$state2 = _this.state,
          value = _this$state2.value,
          inputValue = _this$state2.inputValue;
      var _this$props4 = _this.props,
          multi = _this$props4.multi,
          searchable = _this$props4.searchable,
          options = _this$props4.options;
      var option = options.find(function (item) {
        return item.value === value;
      }) || {};
      var currentInputValue = multi ? "" : option.value || inputValue || "";

      _this.setState({
        inputVisible: visible,
        inputValue: currentInputValue
      }, function () {
        if (multi && searchable) {
          _this.updateInputDOM({
            width: (0, _lodash.isEmpty)(value) ? "100%" : "2px",
            focus: visible
          });
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleInputChange", function (e) {
      var value = e.target.value;
      var _this$props5 = _this.props,
          multi = _this$props5.multi,
          searchable = _this$props5.searchable,
          onFetch = _this$props5.onFetch,
          onChange = _this$props5.onChange;
      var newState = {
        inputValue: value
      };

      if (!multi) {
        newState.value = value;
      }

      _this.setState(newState, function () {
        if (multi && searchable) {
          var width = (0, _lodash.isEmpty)(_this.state.value) ? "100%" : "".concat((0, _lodash.get)(_this.inputValueRef, "current.clientWidth", 0) + 5, "px");

          _this.updateInputDOM({
            width: width
          });
        }

        onChange(_this.state.value);
      });

      if ((0, _lodash.isFunction)(onFetch)) {
        onFetch({
          name: value
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMultiValueDelete", function (e, i) {
      e.nativeEvent.stopImmediatePropagation();
      e.stopPropagation();
      var value = _this.state.value;
      value.splice(i, 1);

      _this.setState({
        value: value
      });

      if ((0, _lodash.isEmpty)(value)) {
        if (_this.props.searchable) {
          _this.updateInputDOM({
            width: "100%"
          });
        }

        _this.setState({
          inputVisible: true
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClearValue", function (e) {
      e.nativeEvent.stopImmediatePropagation();
      e.stopPropagation();
      var _this$props6 = _this.props,
          multi = _this$props6.multi,
          searchable = _this$props6.searchable,
          onChange = _this$props6.onChange,
          onFetch = _this$props6.onFetch;

      _this.setState({
        value: multi ? [] : "",
        inputValue: "",
        inputVisible: true
      }, function () {
        onChange();

        if (searchable && (0, _lodash.isFunction)(onFetch)) {
          onFetch();
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderIcon", function () {
      var _this$props7 = _this.props,
          clearable = _this$props7.clearable,
          disabled = _this$props7.disabled;
      var _this$state3 = _this.state,
          visible = _this$state3.visible,
          inputValue = _this$state3.inputValue;
      return /*#__PURE__*/_react["default"].createElement("span", {
        className: "select-icon",
        onClick: disabled ? null : _this.handleOptionsOpen
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "select-icon-item"
      }, clearable && !(0, _lodash.isEmpty)(inputValue) ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        name: "close",
        onClick: _this.handleClearValue,
        clickable: true
      }) : visible ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        name: "chevron-up"
      }) : /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        name: "chevron-down"
      })));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderPrefixIcon", function (icon) {
      var nodeType = (0, _typeof2["default"])(icon);
      return icon ? /*#__PURE__*/_react["default"].createElement("span", {
        className: "select-icon select-icon-prefixIcon"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: "select-icon-item"
      }, nodeType === "function" ? prefixIcon() : icon)) : null;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderOptions", function () {
      var visible = _this.state.visible;
      var _this$props8 = _this.props,
          options = _this$props8.options,
          isLoading = _this$props8.isLoading,
          _this$props8$paginati = _this$props8.pagination,
          pagination = _this$props8$paginati === void 0 ? {} : _this$props8$paginati,
          onFetch = _this$props8.onFetch;
      var _pagination$page2 = pagination.page,
          page = _pagination$page2 === void 0 ? 1 : _pagination$page2,
          _pagination$total = pagination.total,
          total = _pagination$total === void 0 ? 0 : _pagination$total,
          _pagination$limit = pagination.limit,
          limit = _pagination$limit === void 0 ? 10 : _pagination$limit;

      if (!visible || !(0, _lodash.get)(_this.selectRef, "current")) {
        return null;
      }

      var dimensions = _this.selectRef.current.getBoundingClientRect();

      var optionsTop = dimensions.top + dimensions.height;
      var optionsLeft = dimensions.left;
      var canFetch = (0, _lodash.isFunction)(onFetch) && page * limit < total;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "select-options",
        style: {
          top: optionsTop,
          left: optionsLeft,
          width: dimensions.width
        },
        ref: _this.optionsRef,
        onScrollCapture: canFetch ? _this.handleOptionsScroll : null
      }, options.length === 0 && !isLoading ? _this.renderEmpty() : _this.renderOption(options), isLoading && /*#__PURE__*/_react["default"].createElement("div", {
        className: "select-options-loading"
      }, /*#__PURE__*/_react["default"].createElement(_Loading["default"], {
        size: 20
      })));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderEmpty", function () {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "select-options-empty"
      }, locale.get("KUBE_NO_AVAILABLE_DATA"));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderOption", function (options) {
      var value = _this.state.value;
      var _this$props9 = _this.props,
          multi = _this$props9.multi,
          optionRenderer = _this$props9.optionRenderer;

      var isActive = function isActive(v) {
        return multi ? value.includes(v.value) : v.value === value;
      };

      return options.map(function (item, i) {
        if (item.options) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "select-group-option",
            key: i
          }, /*#__PURE__*/_react["default"].createElement("p", {
            className: "select-group-title"
          }, item.label), _this.renderOption(item.options));
        } else {
          return /*#__PURE__*/_react["default"].createElement(_Option["default"], {
            key: i,
            multi: multi,
            disabled: item.disabled,
            onClick: _this.handleOptionClick,
            isActive: isActive(item),
            option: item
          }, optionRenderer ? optionRenderer(item) : item.label);
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderInput", function () {
      var _this$props10 = _this.props,
          searchable = _this$props10.searchable,
          name = _this$props10.name,
          placeholder = _this$props10.placeholder,
          multi = _this$props10.multi;
      var _this$state4 = _this.state,
          inputVisible = _this$state4.inputVisible,
          inputValue = _this$state4.inputValue,
          value = _this$state4.value;
      var multiClassName = multi && searchable ? (0, _classnames["default"])("select-input", {
        "select-input-multi": !(0, _lodash.isEmpty)(value) && multi
      }) : (0, _classnames["default"])("select-input", {
        "select-input-opacity": !inputVisible,
        "select-input-multi": !(0, _lodash.isEmpty)(value) && multi
      });
      var localePlaceholder = locale.get(placeholder);
      var multiPlaceholder = multi && searchable ? (0, _lodash.isEmpty)(value) ? localePlaceholder : "" : localePlaceholder;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: multiClassName
      }, /*#__PURE__*/_react["default"].createElement("input", {
        name: name,
        ref: _this.inputRef,
        placeholder: multiPlaceholder,
        value: inputValue || "",
        onChange: _this.handleInputChange,
        readOnly: !searchable,
        autoComplete: "off"
      }), /*#__PURE__*/_react["default"].createElement("span", {
        className: "select-input-search",
        ref: _this.inputValueRef
      }, inputValue));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderMultiValue", function (value, i) {
      var _this$props11 = _this.props,
          valueRenderer = _this$props11.valueRenderer,
          options = _this$props11.options;
      var option = options.find(function (item) {
        return item.value === value;
      }) || {
        label: value,
        value: value
      };
      return /*#__PURE__*/_react["default"].createElement(_Tag["default"], {
        className: "select-multi-value-item",
        key: i
      }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("span", {
        className: "select-multi-value-item-label"
      }, valueRenderer ? valueRenderer(option) : option.label), /*#__PURE__*/_react["default"].createElement("span", {
        className: "select-multi-value-item-icon",
        onClick: function onClick(e) {
          return _this.handleMultiValueDelete(e, i);
        }
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        name: "close",
        type: "light"
      }))));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderBaseValues", function () {
      var _this$state5 = _this.state,
          value = _this$state5.value,
          inputVisible = _this$state5.inputVisible;
      var _this$props12 = _this.props,
          multi = _this$props12.multi,
          valueRenderer = _this$props12.valueRenderer,
          options = _this$props12.options;

      if (multi) {
        if ((0, _lodash.isEmpty)(value)) {
          return null;
        }

        return value.map(_this.renderMultiValue);
      }

      var option = {
        label: value,
        value: value
      };
      options.forEach(function (item) {
        if (item.value === value) {
          option = item;
        } else if (item.options) {
          item.options.forEach(function (op) {
            if (op.value === value) {
              option = op;
            }
          });
        }
      });
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])({
          "select-value": !multi,
          "select-value-opacity": inputVisible,
          "select-multi-value": multi
        })
      }, valueRenderer ? valueRenderer(option) : option.label);
    });
    return _this;
  }

  (0, _createClass2["default"])(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleInitValue();

      if (this.selectRef && this.selectRef.current) {
        this.addScrollEvents();
      }

      document.body.addEventListener("click", this.handleDocumentClick);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props13 = this.props,
          value = _this$props13.value,
          options = _this$props13.options;

      if (prevProps.options.length !== options.length) {
        this.reachBottom = false;
      }

      if (!(0, _lodash.isUndefined)(value) && value !== prevState.value) {
        this.setState({
          value: value,
          inputValue: value,
          inputVisible: false
        });
      }

      if (this.state.visible && !prevState.visible) {
        this.handleParentScroll();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeEventListener("click", this.handleDocumentClick);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props14 = this.props,
          style = _this$props14.style,
          className = _this$props14.className,
          multi = _this$props14.multi,
          prefixIcon = _this$props14.prefixIcon,
          disabled = _this$props14.disabled;
      var visible = this.state.visible;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])("select", {
          "select-multi": multi
        }, {
          "select-disabled": disabled
        }, {
          "is-open": visible
        }, className),
        style: style,
        ref: this.selectRef
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "select-control",
        onClick: disabled ? null : this.handleOptionsOpen
      }, this.renderPrefixIcon(prefixIcon), /*#__PURE__*/_react["default"].createElement("div", {
        className: "select-value-wrapper"
      }, this.renderBaseValues(), this.renderInput()), this.renderIcon()), this.renderOptions());
    }
  }]);
  return Select;
}(_react["default"].Component);

exports["default"] = Select;
(0, _defineProperty2["default"])(Select, "propTypes", {
  name: _propTypes["default"].string,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].array]),
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].array]),
  options: _propTypes["default"].array,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  searchable: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  clearable: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  multi: _propTypes["default"].bool,
  prefixIcon: _propTypes["default"].node,
  isLoading: _propTypes["default"].bool,
  pagination: _propTypes["default"].shape({
    page: _propTypes["default"].number,
    limit: _propTypes["default"].number,
    total: _propTypes["default"].number
  }),
  onFetch: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  optionRenderer: _propTypes["default"].func,
  valueRenderer: _propTypes["default"].func
});
(0, _defineProperty2["default"])(Select, "defaultProps", {
  className: "",
  style: {},
  searchable: false,
  disabled: false,
  clearable: false,
  placeholder: "KUBE_PLEASE_SELECT",
  name: null,
  multi: false,
  prefixIcon: null,
  isLoading: false,
  options: [],
  onChange: function onChange() {},
  onPaging: function onPaging() {}
});