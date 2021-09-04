import _typeof from "@babel/runtime/helpers/esm/typeof";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { get, isEmpty, isUndefined, isFunction } from "lodash";
import Tag from "../Tag";
import Icon from "../Icon";
import Loading from "../Loading";
import Option from "./Option";
import LocaleProvider from "../LocaleProvider";
import { getScrollParents } from "../../utils";
var locale = LocaleProvider.locale;

var Select = /*#__PURE__*/function (_React$Component) {
  _inherits(Select, _React$Component);

  var _super = _createSuper(Select);

  function Select() {
    var _this;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      visible: false,
      value: _this.props.multi ? [] : "",
      inputValue: "",
      inputVisible: true
    });

    _defineProperty(_assertThisInitialized(_this), "inputRef", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "selectRef", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "optionsRef", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "inputValueRef", /*#__PURE__*/React.createRef());

    _defineProperty(_assertThisInitialized(_this), "reachBottom", false);

    _defineProperty(_assertThisInitialized(_this), "addScrollEvents", function () {
      _this.scrollParents = getScrollParents(_this.selectRef.current);

      if (_this.scrollParents.length > 0) {
        _this.scrollParents.forEach(function (parent) {
          parent.addEventListener("scroll", _this.handleParentScroll);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "removeScrollEvents", function () {
      if (_this.scrollParents.length > 0) {
        _this.scrollParents.forEach(function (parent) {
          parent.removeEventListener("scroll", _this.handleParentScroll);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInitValue", function () {
      var _this$props = _this.props,
          value = _this$props.value,
          defaultValue = _this$props.defaultValue;

      if (!isUndefined(value)) {
        return _this.setState({
          value: value,
          inputValue: value,
          inputVisible: false
        });
      }

      if (!isUndefined(defaultValue)) {
        return _this.setState({
          value: defaultValue,
          inputValue: defaultValue,
          inputVisible: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleParentScroll", function (e) {
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

    _defineProperty(_assertThisInitialized(_this), "updateInputDOM", function (_ref) {
      var width = _ref.width,
          focus = _ref.focus;

      if (_this.inputRef && _this.inputRef.current) {
        _this.inputRef.current.style.width = width;

        if (focus) {
          _this.inputRef.current.focus();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOptionClick", function (option) {
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
        var chooseValue = _toConsumableArray(value);

        if (value.includes(selectValue)) {
          chooseValue = chooseValue.filter(function (v) {
            return v !== selectValue;
          });
        } else {
          chooseValue = [].concat(_toConsumableArray(chooseValue), [selectValue]);
        }

        if (isEmpty(chooseValue)) {
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
              width: isEmpty(_this.state.value) ? "100%" : "2px",
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

    _defineProperty(_assertThisInitialized(_this), "handleOptionsOpen", function (e) {
      var visible = _this.state.visible;
      var searchable = _this.props.searchable;

      _this.setState({
        visible: searchable ? true : !visible
      });

      searchable && _this.handleInputStatus(true);
    });

    _defineProperty(_assertThisInitialized(_this), "handleOptionsClose", function () {
      var visible = _this.state.visible;

      _this.setState({
        visible: !visible
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOptionsScroll", function (e) {
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

    _defineProperty(_assertThisInitialized(_this), "handleDocumentClick", function (e) {
      var visible = _this.state.visible;

      if (visible && _this.selectRef && _this.selectRef.current) {
        if (!_this.selectRef.current.contains(e.target)) {
          _this.handleOptionsClose();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputStatus", function (visible) {
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
            width: isEmpty(value) ? "100%" : "2px",
            focus: visible
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (e) {
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
          var width = isEmpty(_this.state.value) ? "100%" : "".concat(get(_this.inputValueRef, "current.clientWidth", 0) + 5, "px");

          _this.updateInputDOM({
            width: width
          });
        }

        onChange(_this.state.value);
      });

      if (isFunction(onFetch)) {
        onFetch({
          name: value
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMultiValueDelete", function (e, i) {
      e.nativeEvent.stopImmediatePropagation();
      e.stopPropagation();
      var value = _this.state.value;
      value.splice(i, 1);

      _this.setState({
        value: value
      });

      if (isEmpty(value)) {
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

    _defineProperty(_assertThisInitialized(_this), "handleClearValue", function (e) {
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

        if (searchable && isFunction(onFetch)) {
          onFetch();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderIcon", function () {
      var _this$props7 = _this.props,
          clearable = _this$props7.clearable,
          disabled = _this$props7.disabled;
      var _this$state3 = _this.state,
          visible = _this$state3.visible,
          inputValue = _this$state3.inputValue;
      return /*#__PURE__*/React.createElement("span", {
        className: "select-icon",
        onClick: disabled ? null : _this.handleOptionsOpen
      }, /*#__PURE__*/React.createElement("span", {
        className: "select-icon-item"
      }, clearable && !isEmpty(inputValue) ? /*#__PURE__*/React.createElement(Icon, {
        name: "close",
        onClick: _this.handleClearValue,
        clickable: true
      }) : visible ? /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-up"
      }) : /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-down"
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "renderPrefixIcon", function (icon) {
      var nodeType = _typeof(icon);

      return icon ? /*#__PURE__*/React.createElement("span", {
        className: "select-icon select-icon-prefixIcon"
      }, /*#__PURE__*/React.createElement("span", {
        className: "select-icon-item"
      }, nodeType === "function" ? prefixIcon() : icon)) : null;
    });

    _defineProperty(_assertThisInitialized(_this), "renderOptions", function () {
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

      if (!visible || !get(_this.selectRef, "current")) {
        return null;
      }

      var dimensions = _this.selectRef.current.getBoundingClientRect();

      var optionsTop = dimensions.top + dimensions.height;
      var optionsLeft = dimensions.left;
      var canFetch = isFunction(onFetch) && page * limit < total;
      return /*#__PURE__*/React.createElement("div", {
        className: "select-options",
        style: {
          top: optionsTop,
          left: optionsLeft,
          width: dimensions.width
        },
        ref: _this.optionsRef,
        onScrollCapture: canFetch ? _this.handleOptionsScroll : null
      }, options.length === 0 && !isLoading ? _this.renderEmpty() : _this.renderOption(options), isLoading && /*#__PURE__*/React.createElement("div", {
        className: "select-options-loading"
      }, /*#__PURE__*/React.createElement(Loading, {
        size: 20
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "renderEmpty", function () {
      return /*#__PURE__*/React.createElement("div", {
        className: "select-options-empty"
      }, locale.get("KUBE_NO_AVAILABLE_DATA"));
    });

    _defineProperty(_assertThisInitialized(_this), "renderOption", function (options) {
      var value = _this.state.value;
      var _this$props9 = _this.props,
          multi = _this$props9.multi,
          optionRenderer = _this$props9.optionRenderer;

      var isActive = function isActive(v) {
        return multi ? value.includes(v.value) : v.value === value;
      };

      return options.map(function (item, i) {
        if (item.options) {
          return /*#__PURE__*/React.createElement("div", {
            className: "select-group-option",
            key: i
          }, /*#__PURE__*/React.createElement("p", {
            className: "select-group-title"
          }, item.label), _this.renderOption(item.options));
        } else {
          return /*#__PURE__*/React.createElement(Option, {
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

    _defineProperty(_assertThisInitialized(_this), "renderInput", function () {
      var _this$props10 = _this.props,
          searchable = _this$props10.searchable,
          name = _this$props10.name,
          placeholder = _this$props10.placeholder,
          multi = _this$props10.multi;
      var _this$state4 = _this.state,
          inputVisible = _this$state4.inputVisible,
          inputValue = _this$state4.inputValue,
          value = _this$state4.value;
      var multiClassName = multi && searchable ? classNames("select-input", {
        "select-input-multi": !isEmpty(value) && multi
      }) : classNames("select-input", {
        "select-input-opacity": !inputVisible,
        "select-input-multi": !isEmpty(value) && multi
      });
      var localePlaceholder = locale.get(placeholder);
      var multiPlaceholder = multi && searchable ? isEmpty(value) ? localePlaceholder : "" : localePlaceholder;
      return /*#__PURE__*/React.createElement("div", {
        className: multiClassName
      }, /*#__PURE__*/React.createElement("input", {
        name: name,
        ref: _this.inputRef,
        placeholder: multiPlaceholder,
        value: inputValue || "",
        onChange: _this.handleInputChange,
        readOnly: !searchable,
        autoComplete: "off"
      }), /*#__PURE__*/React.createElement("span", {
        className: "select-input-search",
        ref: _this.inputValueRef
      }, inputValue));
    });

    _defineProperty(_assertThisInitialized(_this), "renderMultiValue", function (value, i) {
      var _this$props11 = _this.props,
          valueRenderer = _this$props11.valueRenderer,
          options = _this$props11.options;
      var option = options.find(function (item) {
        return item.value === value;
      }) || {
        label: value,
        value: value
      };
      return /*#__PURE__*/React.createElement(Tag, {
        className: "select-multi-value-item",
        key: i
      }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
        className: "select-multi-value-item-label"
      }, valueRenderer ? valueRenderer(option) : option.label), /*#__PURE__*/React.createElement("span", {
        className: "select-multi-value-item-icon",
        onClick: function onClick(e) {
          return _this.handleMultiValueDelete(e, i);
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "close",
        type: "light"
      }))));
    });

    _defineProperty(_assertThisInitialized(_this), "renderBaseValues", function () {
      var _this$state5 = _this.state,
          value = _this$state5.value,
          inputVisible = _this$state5.inputVisible;
      var _this$props12 = _this.props,
          multi = _this$props12.multi,
          valueRenderer = _this$props12.valueRenderer,
          options = _this$props12.options;

      if (multi) {
        if (isEmpty(value)) {
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
      return /*#__PURE__*/React.createElement("div", {
        className: classNames({
          "select-value": !multi,
          "select-value-opacity": inputVisible,
          "select-multi-value": multi
        })
      }, valueRenderer ? valueRenderer(option) : option.label);
    });

    return _this;
  }

  _createClass(Select, [{
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

      if (!isUndefined(value) && value !== prevState.value) {
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
      return /*#__PURE__*/React.createElement("div", {
        className: classNames("select", {
          "select-multi": multi
        }, {
          "select-disabled": disabled
        }, {
          "is-open": visible
        }, className),
        style: style,
        ref: this.selectRef
      }, /*#__PURE__*/React.createElement("div", {
        className: "select-control",
        onClick: disabled ? null : this.handleOptionsOpen
      }, this.renderPrefixIcon(prefixIcon), /*#__PURE__*/React.createElement("div", {
        className: "select-value-wrapper"
      }, this.renderBaseValues(), this.renderInput()), this.renderIcon()), this.renderOptions());
    }
  }]);

  return Select;
}(React.Component);

_defineProperty(Select, "propTypes", {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  options: PropTypes.array,
  className: PropTypes.string,
  style: PropTypes.object,
  searchable: PropTypes.bool,
  disabled: PropTypes.bool,
  clearable: PropTypes.bool,
  placeholder: PropTypes.string,
  multi: PropTypes.bool,
  prefixIcon: PropTypes.node,
  isLoading: PropTypes.bool,
  pagination: PropTypes.shape({
    page: PropTypes.number,
    limit: PropTypes.number,
    total: PropTypes.number
  }),
  onFetch: PropTypes.func,
  onChange: PropTypes.func,
  optionRenderer: PropTypes.func,
  valueRenderer: PropTypes.func
});

_defineProperty(Select, "defaultProps", {
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

export { Select as default };