import React from 'react';
import { Descriptions } from 'antd';
import { ProField } from '@ant-design/pro-components';
import { labelStyle } from '@/father-pages/common';
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var ExpandedRow = function ExpandedRow(_ref) {
  var record = _ref.record,
    _ref$columns = _ref.columns,
    columns = _ref$columns === void 0 ? [] : _ref$columns;
  return _jsx("div", {
    css: {
      paddingLeft: 30
    },
    children: _jsx(Descriptions, {
      column: 1,
      labelStyle: labelStyle,
      children: columns.filter(function (_) {
        return !_.hideInExpandable;
      }).map(function (item) {
        return _jsx(Descriptions.Item, {
          label: item.title,
          children: item !== null && item !== void 0 && item.renderExpandableItem ? item === null || item === void 0 ? void 0 : item.renderExpandableItem(record[item.dataIndex], record) : item !== null && item !== void 0 && item.render ? item === null || item === void 0 ? void 0 : item.render(record[item.dataIndex], record) : _jsx(ProField, {
            text: record[item.dataIndex],
            mode: "read",
            valueType: item === null || item === void 0 ? void 0 : item.valueType,
            valueEnum: item === null || item === void 0 ? void 0 : item.valueEnum
          })
        }, item.dataIndex);
      })
    })
  });
};
export default /*#__PURE__*/React.memo(ExpandedRow);