import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component, Fragment, cloneElement } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { noop, isFunction, setWith } from "lodash";
import PopperJS from "popper.js";
import classNames from "classnames";
import { fireEvent } from "../../utils";
var placementMapper = {
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom",
  topLeft: "top-start",
  topRight: "top-end",
  leftTop: "left-start",
  leftBottom: "left-end",
  bottomLeft: "bottom-start",
  bottomRight: "bottom-end",
  rightTop: "right-start",
  rightBottom: "right-end"
};

var Popper = /*#__PURE__*/function (_Component) {
  _inherits(Popper, _Component);

  var _super = _createSuper(Popper);

  function Popper(props) {
    var _this;

    _classCallCheck(this, Popper);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "showPopper", function (e) {
      var onOpen = _this.props.onOpen;
      var visible = _this.state.visible;
      e && e.stopPropagation();
      _this.timer && clearTimeout(_this.timer);

      if (_this.isPopperMounted) {
        if (_this.popperInstance) {
          _this.popperInstance.update();

          _this.popperInstance.enableEventListeners();
        }

        if (!visible) {
          _this.setState({
            visible: true
          }, function () {
            if (onOpen && onOpen !== noop) onOpen();
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "hidePopper", function (e) {
      var hideInterval = _this.props.hideInterval;
      var visible = _this.state.visible;
      if (e) e.stopPropagation();

      if (_this.isPopperMounted && visible) {
        var _this$props = _this.props,
            trigger = _this$props.trigger,
            closeAfterMouseLeave = _this$props.closeAfterMouseLeave,
            onClose = _this$props.onClose;
        var isHoverTrigger = trigger === "hover" || closeAfterMouseLeave;

        if (!isHoverTrigger) {
          _this.setState({
            visible: false
          }, function () {
            if (onClose && onClose !== noop) onClose(e);
            if (_this.popperInstance) _this.popperInstance.disableEventListeners();
          });
        } else {
          _this.timer = setTimeout(function () {
            _this.setState({
              visible: false
            }, function () {
              if (onClose && onClose !== noop) onClose(e);
              if (_this.popperInstance) _this.popperInstance.disableEventListeners();
            });
          }, hideInterval);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "createPopper", function (placement) {
      if (_this.arrow) {
        _this.arrow.setAttribute("x-arrow", "");
      }

      var options = {
        placement: placementMapper[placement] ? placementMapper[placement] : "bottom",
        positionFixed: true,
        modifiers: _this.props.modifiers
      };
      _this.popperInstance = new PopperJS(_this.reference, _this.popper, options);
    });

    _defineProperty(_assertThisInitialized(_this), "runPopper", function (e) {
      var placement = _this.props.placement;
      e && e.stopPropagation();

      if (_this.popperInstance) {
        _this.showPopper();

        return;
      }

      _this.createPopper(placement);

      _this.showPopper();
    });

    _defineProperty(_assertThisInitialized(_this), "destroyPopper", function () {
      if (_this.popperInstance) {
        _this.popperInstance.destroy();

        _this.popperInstance = null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTogglePopper", function (e) {
      var onClick = _this.props.onClick;
      if (e && isFunction(onClick) && onClick !== noop) onClick(e);
      var visible = _this.state.visible;

      if (visible) {
        _this.hidePopper(e);
      } else {
        fireEvent(document, "click");

        _this.runPopper(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handlePopperClick", function (e) {
      var closeAfterClick = _this.props.closeAfterClick;
      var visible = _this.state.visible;
      if (!visible) return;

      if (e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
      }

      if (closeAfterClick) {
        _this.hidePopper(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDocumentClick", function (e) {
      var visible = _this.state.visible;
      var rootNode = ReactDOM.findDOMNode(_assertThisInitialized(_this));

      if (!rootNode || !_this.reference || !_this.popper || !visible) {
        return;
      }

      _this.hidePopper(e);
    });

    _defineProperty(_assertThisInitialized(_this), "bindEvent", function () {
      var _this$props2 = _this.props,
          trigger = _this$props2.trigger,
          closeAfterMouseLeave = _this$props2.closeAfterMouseLeave,
          closeAfterMouseUp = _this$props2.closeAfterMouseUp;
      if (!_this.reference || !_this.popper) return;

      if (trigger === "hover" || closeAfterMouseLeave) {
        _this.reference.addEventListener("mouseleave", _this.hidePopper);

        _this.popper.addEventListener("mouseenter", _this.showPopper);

        _this.popper.addEventListener("mouseleave", _this.hidePopper);
      }

      if (trigger === "hover") {
        _this.reference.addEventListener("mouseenter", _this.runPopper);

        if (closeAfterMouseUp) {
          document.addEventListener("mouseup", _this.hidePopper);
        }
      }

      if (trigger === "click") {
        _this.reference.addEventListener("click", _this.handleTogglePopper);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "removeEvent", function () {
      var _this$props3 = _this.props,
          trigger = _this$props3.trigger,
          closeAfterMouseLeave = _this$props3.closeAfterMouseLeave,
          closeAfterMouseUp = _this$props3.closeAfterMouseUp;

      if (trigger === "click") {
        document.removeEventListener("click", _this.handleDocumentClick);
      }

      if (trigger === "hover" && closeAfterMouseUp) {
        document.addEventListener("mouseup", _this.hidePopper);
      }

      if (!_this.reference) return;

      if (trigger === "hover" || closeAfterMouseLeave) {
        _this.reference.removeEventListener("mouseleave", _this.hidePopper);
      }

      if (trigger === "hover") {
        _this.reference.removeEventListener("mouseenter", _this.runPopper);
      }

      if (trigger === "click") {
        _this.reference.removeEventListener("click", _this.handleTogglePopper);
      }
    });

    _this.state = {
      visible: props.visible || false
    }; // timer: 悬停触发，延时关闭的计时器

    _this.timer = null; // popperInstance: Popper 对象

    _this.popperInstance = null; // reference & popper: Popper 对象的触发器和内容 DOM 节点

    _this.reference = null;
    _this.popper = null;
    return _this;
  }

  _createClass(Popper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props4 = this.props,
          always = _this$props4.always,
          visible = _this$props4.visible;
      this.reference = ReactDOM.findDOMNode(this.referenceNode);
      (always || visible) && this.runPopper();
      !always && this.bindEvent();
      this.isPopperMounted = true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var prevVisible = prevState.visible;
      var prevPlacement = prevProps.placement;
      var stateVisible = this.state.visible;
      var _this$props5 = this.props,
          visible = _this$props5.visible,
          placement = _this$props5.placement,
          trigger = _this$props5.trigger;

      if (prevPlacement !== placement) {
        this.destroyPopper();
        this.createPopper(placement);
      }

      if ("visible" in this.props && visible && !prevVisible) {
        this.runPopper();
      } else if (this.popperInstance) {
        this.popperInstance.update();
      }

      if ("visible" in this.props && !visible && prevVisible) {
        this.hidePopper();
      }

      if (stateVisible && trigger === "click") {
        document.addEventListener("click", this.handleDocumentClick);
      } else {
        document.removeEventListener("click", this.handleDocumentClick);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var always = this.props.always;
      this.timer && clearTimeout(this.timer);
      !always && this.removeEvent();
      this.destroyPopper();
      this.isPopperMounted = false;
    } // Show Popper

  }, {
    key: "renderContent",
    value: function renderContent() {
      var _this2 = this;

      var _this$props6 = this.props,
          propsClassName = _this$props6.className,
          type = _this$props6.type,
          always = _this$props6.always,
          style = _this$props6.style,
          content = _this$props6.content,
          showArrow = _this$props6.showArrow;
      var visible = this.state.visible;
      return /*#__PURE__*/React.createElement("div", {
        className: classNames("popper", propsClassName, {
          "is-active": visible || always
        }),
        ref: function ref(_ref2) {
          _this2.popper = _ref2;
        },
        style: style,
        onClick: this.handlePopperClick
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(type, "-content")
      }, isFunction(content) ? content() : content), showArrow ? /*#__PURE__*/React.createElement("div", {
        className: "popper-arrow",
        ref: function ref(_ref) {
          _this2.arrow = _ref;
        }
      }) : null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;
      var cloneChildren = /*#__PURE__*/cloneElement(React.Children.only(children), {
        ref: function ref(_ref3) {
          _this3.referenceNode = _ref3;
        }
      });
      return /*#__PURE__*/React.createElement(Fragment, null, cloneChildren, this.renderContent());
    }
  }]);

  return Popper;
}(Component);

_defineProperty(Popper, "propTypes", {
  type: PropTypes.string,
  always: PropTypes.bool,
  trigger: PropTypes.string,
  placement: PropTypes.string,
  visible: PropTypes.bool,
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func]),
  hideInterval: PropTypes.number,
  showArrow: PropTypes.bool,
  className: PropTypes.string,
  closeAfterClick: PropTypes.bool,
  closeAfterMouseLeave: PropTypes.bool,
  closeAfterMouseUp: PropTypes.bool,
  style: PropTypes.object,
  modifiers: PropTypes.object,
  children: PropTypes.node,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onClick: PropTypes.func
});

_defineProperty(Popper, "defaultProps", {
  type: "popper",
  always: false,
  hideInterval: 200,
  trigger: "hover",
  placement: "top",
  showArrow: true,
  closeAfterClick: true,
  closeAfterMouseLeave: false,
  closeAfterMouseUp: false,
  modifiers: {},
  onOpen: noop,
  onClose: noop,
  onClick: noop
});

export default Popper;