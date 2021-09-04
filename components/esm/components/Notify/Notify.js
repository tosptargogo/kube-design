import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from "react";
import { includes, omit, isString } from "lodash";
import Icon from "../Icon";
import NotifyManager from "./NotifyManager";
import { generateUUID } from "./utils";
var PLACEMENT = ["topLeft", "bottomLeft", "bottomRight", "topRight"];
var prefixCls = "notify";
var IconMap = {
  success: "check",
  warning: "exclamation",
  error: "exclamation"
};
var defaultTop = 24;
var defaultBottom = 24;
var notifyInstance = {};

var getPlacementStyle = function getPlacementStyle(placement) {
  var style;

  switch (placement) {
    case "topLeft":
      style = {
        left: 20,
        top: defaultTop,
        bottom: "auto"
      };
      break;

    case "bottomLeft":
      style = {
        left: 20,
        top: "auto",
        bottom: defaultBottom
      };
      break;

    case "bottomRight":
      style = {
        right: 20,
        top: "auto",
        bottom: defaultBottom
      };
      break;

    default:
      style = {
        right: 20,
        top: defaultTop,
        bottom: "auto"
      };
      break;
  }

  return style;
};

var _open = function open(args) {
  var defaultOptions = {
    duration: 4500,
    closable: true,
    placement: "topRight",
    type: "info"
  };

  var options = _objectSpread(_objectSpread({}, defaultOptions), args);

  var position;

  if (!includes(PLACEMENT, options.placement)) {
    position = defaultOptions.placement;
  } else {
    position = options.placement;
  }

  var title = options.title,
      content = options.content,
      type = options.type,
      btns = options.btns,
      key = options.key;
  var cacheKey = "".concat(prefixCls, "-").concat(position);
  var newOptions = omit(options, ["title", "content", "placement", "icon", "btns"]);
  var target = key || generateUUID("notify");

  var createNotice = function createNotice(notify) {
    notify.createNotice(_objectSpread({
      key: target,
      content: /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-with-icon")
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-icon")
      }, /*#__PURE__*/React.createElement(Icon, {
        name: IconMap[type] || "check",
        type: "light",
        size: 20
      })), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-text")
      }, title && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-title")
      }, title), content && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-content")
      }, content)), btns ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-btns")
      }, btns) : null)
    }, newOptions));
  };

  if (notifyInstance[cacheKey]) {
    createNotice(notifyInstance[cacheKey]);
  } else {
    NotifyManager.newInstance({
      prefixCls: prefixCls,
      animation: "drop",
      className: cacheKey,
      style: getPlacementStyle(position)
    }, function (notify) {
      notifyInstance[cacheKey] = notify;
      createNotice(notify);
    });
  }

  return _objectSpread(_objectSpread({}, notifyInstance[cacheKey]), {}, {
    key: target
  });
};

var convert = function convert(args1, args2, type) {
  if (isString(args1)) {
    return _open({
      title: args1,
      content: args2,
      type: type
    });
  }

  return _open(_objectSpread(_objectSpread({}, args1), {}, {
    type: type
  }));
};

export default {
  open: function open(args) {
    return _open(args);
  },
  info: function info(args1, args2) {
    return convert(args1, args2, "info");
  },
  success: function success(args1, args2) {
    return convert(args1, args2, "success");
  },
  warning: function warning(args1, args2) {
    return convert(args1, args2, "warning");
  },
  error: function error(args1, args2) {
    return convert(args1, args2, "error");
  },
  close: function close(key) {
    Object.keys(notifyInstance).forEach(function (cacheKey) {
      return notifyInstance[cacheKey].removeNotice(key);
    });
  }
};