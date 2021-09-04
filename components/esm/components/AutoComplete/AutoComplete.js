import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
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

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { get, isEqual } from "lodash";
import Fuse from "fuse.js/dist/fuse.min.js";
import Dropdown from "../Dropdown";
import Menu from "../Menu";
import { Input } from "../Input";

var AutoComplete = /*#__PURE__*/function (_PureComponent) {
  _inherits(AutoComplete, _PureComponent);

  var _super = _createSuper(AutoComplete);

  function AutoComplete() {
    var _this;

    _classCallCheck(this, AutoComplete);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: "value" in _this.props ? _this.props.value : _this.props.defaultValue,
      options: _toConsumableArray(_this.props.options),
      searchResult: [],
      showOptions: false
    });

    _defineProperty(_assertThisInitialized(_this), "fuseOptions", {
      includeScore: true,
      includeMatches: true,
      minMatchCharLength: 1
    });

    _defineProperty(_assertThisInitialized(_this), "modifiers", {
      hide: {
        enabled: false
      },
      preventOverflow: {
        enabled: false
      }
    });

    _defineProperty(_assertThisInitialized(_this), "fuse", new Fuse(_this.props.options, _this.fuseOptions));

    _defineProperty(_assertThisInitialized(_this), "showOptions", function () {
      _this.setState({
        showOptions: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hideOptions", function () {
      _this.setState({
        showOptions: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "triggerChange", function () {
      var onChange = _this.props.onChange;
      var value = _this.state.value;
      onChange(value);
    });

    _defineProperty(_assertThisInitialized(_this), "handleOptionsClick", function (e, key) {
      _this.handleInputChange({
        target: {
          value: key
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (e) {
      var value = e.target.value;
      var options = _this.props.options;

      var newOptions = _toConsumableArray(options);

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

  _createClass(AutoComplete, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!isEqual(prevProps.options, this.props.options)) {
        this.setState({
          options: _toConsumableArray(this.props.options),
          searchResult: []
        });
        this.fuse = new Fuse(this.props.options, this.fuseOptions);
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
        var _get = get(result, "matches[0]", {}),
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
          return /*#__PURE__*/React.createElement("span", {
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

      return /*#__PURE__*/React.createElement(Menu, {
        className: "auto-complete-content",
        onClick: this.handleOptionsClick
      }, options.map(function (option) {
        return /*#__PURE__*/React.createElement(Menu.MenuItem, {
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
          rest = _objectWithoutProperties(_this$props, ["options", "optionRenderer", "className"]);

      var value = this.state.value;
      return /*#__PURE__*/React.createElement("div", {
        className: classNames("auto-complete", className)
      }, /*#__PURE__*/React.createElement(Dropdown, {
        visible: this.state.showOptions,
        content: this.renderOptions(),
        always: this.state.showOptions,
        onOpen: this.showOptions,
        onClose: this.hideOptions,
        modifiers: this.modifiers
      }, /*#__PURE__*/React.createElement(Input, _extends({
        className: "auto-complete-input"
      }, rest, {
        value: value,
        onChange: this.handleInputChange
      }))));
    }
  }]);

  return AutoComplete;
}(PureComponent);

_defineProperty(AutoComplete, "propTypes", {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  options: PropTypes.array,
  optionsRenderer: PropTypes.func
});

_defineProperty(AutoComplete, "defaultProps", {
  className: "",
  defaultValue: "",
  onChange: function onChange() {},
  options: []
});

export { AutoComplete as default };