import React from 'react';
import { Divider, theme } from 'antd';
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { jsxs as _jsxs } from "@emotion/react/jsx-runtime";
var useToken = theme.useToken;
var DividerGroup = function DividerGroup(_ref) {
  var children = _ref.children,
    title = _ref.title;
  var _useToken = useToken(),
    token = _useToken.token;
  return _jsxs("div", {
    css: {
      border: "1px solid ".concat(token.colorSplit),
      position: 'relative',
      borderTop: 'none',
      padding: '26px 20px'
    },
    children: [_jsx(Divider, {
      orientation: "left",
      plain: true,
      css: {
        position: 'absolute',
        top: '-26px',
        left: 0
      },
      children: title
    }), children]
  });
};
export default /*#__PURE__*/React.memo(DividerGroup);