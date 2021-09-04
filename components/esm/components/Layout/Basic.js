import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
var propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  componentCls: PropTypes.string,
  as: PropTypes.string
};

var Basic = function Basic(_ref) {
  var children = _ref.children,
      _ref$as = _ref.as,
      ElementType = _ref$as === void 0 ? "div" : _ref$as,
      componentCls = _ref.componentCls,
      className = _ref.className,
      restProps = _objectWithoutProperties(_ref, ["children", "as", "componentCls", "className"]);

  return /*#__PURE__*/React.createElement(ElementType, _extends({
    className: classNames(componentCls, className)
  }, restProps), children);
};

Basic.propTypes = propTypes;
export default Basic;