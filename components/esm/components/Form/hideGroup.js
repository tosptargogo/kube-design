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
import { Checkbox } from "../Checkbox";
import { get, unset, isUndefined } from "lodash";

var hideGroup = /*#__PURE__*/function (_React$Component) {
  _inherits(Hgroup, _React$Component);

  var _super = _createSuper(Hgroup);

  function Hgroup() {
    var _this;

    _classCallCheck(this, Hgroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isCheck: true
    });

    _defineProperty(_assertThisInitialized(_this), "items", new Set());

    _defineProperty(_assertThisInitialized(_this), "registerGroup", function (name) {
      _this.items.add(name);
    });

    _defineProperty(_assertThisInitialized(_this), "unRegisterGroup", function (name) {
      _this.items["delete"](name);
    });

    _defineProperty(_assertThisInitialized(_this), "handleCheck", function (check) {
      var keepDataWhenUnCheck = _this.props.keepDataWhenUnCheck;

      _this.setState({
        isCheck: check
      }, function () {
        if (!keepDataWhenUnCheck && !check) {
          var formData = _this.context.formData;
          if (formData) {
            _this.items.forEach(function (item) {
              return unset(formData, item);
            });
          }
        }
      });
    });

    return _this;
  }

  _createClass(Hgroup, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        registerGroup: this.registerGroup,
        unRegisterGroup: this.unRegisterGroup
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          checkable = _this$props.checkable,
          keepDataWhenUnCheck = _this$props.keepDataWhenUnCheck;
      var formData = this.context.formData;
      if (checkable && !keepDataWhenUnCheck && formData  && Array.from(this.items).some(function (item) {
        return !isUndefined(get(formData, item));
      })) {
        this.setState({
          isCheck: true
        });
      } else {
        this.setState({
          isCheck: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          checkable = _this$props2.checkable,
          label = _this$props2.label,
          desc = _this$props2.desc,
          type = this.items,
          formData = this.context.formData,
          groupname = _this$props2.name ,
      noWrapper = _this$props2.noWrapper;
      var isCheck = this.state.isCheck;
      if (!children) {
        return null;
      }
      var hideChildren = checkable && !isCheck;
      if (isCheck){
        children.props.formTemplate[groupname] = true
        return /*#__PURE__*/React.createElement("div", {
          className: classNames("form-group", {
            "form-group-checkable": checkable
          })
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          className: "form-group-title"
        }, checkable ? /*#__PURE__*/React.createElement(Checkbox, {
          checked: isCheck,
          onChange: this.handleCheck
        }, label) : label), desc && /*#__PURE__*/React.createElement("div", {
          className: "form-group-desc"
        }, desc)), noWrapper ? /*#__PURE__*/React.createElement("div", {
          className: classNames({
            "form-group-hide": hideChildren
          })
        }, children) :  /*#__PURE__*/React.createElement("div", {
          className: classNames("form-group-content", {
            "form-group-hide": hideChildren
          })
        },children ));
      } else {
        children.props.formTemplate[groupname] = false
        this.items.forEach(function (item) {
          unset(formData, item);
        });
        return /*#__PURE__*/React.createElement("div", {
          className: classNames("form-group", {
            "form-group-checkable": checkable
          })
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          className: "form-group-title"
        }, checkable ? /*#__PURE__*/React.createElement(Checkbox, {
          checked: isCheck,
          onChange: this.handleCheck
        }, label) : label), desc && /*#__PURE__*/React.createElement("div", {
          className: "form-group-desc"
        }, desc)));
      }


    }
  }]);

  return Hgroup;
}(React.Component);

_defineProperty(hideGroup, "propTypes", {
  keepDataWhenUnCheck: PropTypes.bool
});

_defineProperty(hideGroup, "defaultProps", {
  keepDataWhenUnCheck: false
});

_defineProperty(hideGroup, "contextTypes", {
  formData: PropTypes.object
});

_defineProperty(hideGroup, "childContextTypes", {
  registerGroup: PropTypes.func,
  unRegisterGroup: PropTypes.func
});

export { hideGroup as default };