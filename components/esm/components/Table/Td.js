import React from "react";
import { get, isFunction } from "lodash";
export default function Td(_ref) {
  var column = _ref.column,
      record = _ref.record;
  var value = "dataIndex" in column ? get(record, column.dataIndex) : record;

  if (isFunction(column.render)) {
    return /*#__PURE__*/React.createElement("td", null, column.render(value, record));
  }

  if (!"dataIndex" in column) {
    return /*#__PURE__*/React.createElement("td", null);
  }

  return /*#__PURE__*/React.createElement("td", null, value);
}