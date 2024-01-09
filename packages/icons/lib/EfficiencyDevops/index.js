function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import Icon from '@ant-design/icons';
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { jsxs as _jsxs } from "@emotion/react/jsx-runtime";
var CustomSvg = function CustomSvg() {
  return _jsxs("svg", {
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    children: [_jsx("path", {
      d: "M765.305263 172.463158l-91.621052-7.185965c-5.389474 0-8.982456 7.185965-5.389474 10.778947l19.761403 23.354386-116.771929 100.603509-104.196492-116.77193-197.614035 172.463158c-14.37193 12.575439-16.168421 35.929825-3.592982 52.098246 12.575439 14.37193 35.929825 16.168421 52.098245 3.592982l141.922807-123.957895 100.603509 113.178948 172.463158-149.108772 19.761404 23.354386c3.592982 3.592982 10.778947 1.796491 10.778947-3.592983l7.185965-91.621052c1.796491-1.796491-1.796491-7.185965-5.389474-7.185965z",
      fill: "currentColor",
      "p-id": "35843"
    }), _jsx("path", {
      d: "M512 558.708772C265.880702 558.708772 3.592982 463.494737 3.592982 289.235088s262.287719-269.473684 508.407018-269.473684c246.119298 0 508.407018 95.214035 508.407018 269.473684s-262.287719 269.473684-508.407018 269.473684z m0-440.140351C249.712281 118.568421 89.824561 217.375439 89.824561 289.235088s161.684211 172.463158 422.175439 172.463158c262.287719 0 422.175439-100.603509 422.175439-172.463158 1.796491-71.859649-159.887719-170.666667-422.175439-170.666667z",
      fill: "currentColor",
      "p-id": "35844"
    }), _jsx("path", {
      d: "M512 779.677193C265.880702 779.677193 3.592982 684.463158 3.592982 510.203509c0-26.947368 19.761404-48.505263 43.11579-48.505263 23.354386 0 43.115789 21.557895 43.115789 48.505263 0 71.859649 161.684211 172.463158 422.175439 172.463158C774.287719 682.666667 934.175439 582.063158 934.175439 510.203509c0-26.947368 19.761404-48.505263 43.115789-48.505263s43.115789 21.557895 43.11579 48.505263c0 174.259649-262.287719 269.473684-508.407018 269.473684z",
      fill: "currentColor",
      "p-id": "35845"
    }), _jsx("path", {
      d: "M512 1004.238596C265.880702 1004.238596 3.592982 909.024561 3.592982 734.764912c0-26.947368 19.761404-48.505263 43.11579-48.505263 23.354386 0 43.115789 21.557895 43.115789 48.505263 0 71.859649 161.684211 172.463158 422.175439 172.463158 262.287719 0 422.175439-100.603509 422.175439-172.463158 0-26.947368 19.761404-48.505263 43.115789-48.505263s43.115789 21.557895 43.11579 48.505263c0 174.259649-262.287719 269.473684-508.407018 269.473684z",
      fill: "currentColor",
      "p-id": "35846"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);