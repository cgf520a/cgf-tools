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
      d: "M522.666667 554.666667c-17.706667 0-32-14.293333-32-32v-64c0-17.706667 14.293333-32 32-32s32 14.293333 32 32v64c0 17.706667-14.293333 32-32 32zM245.333333 597.333333c-17.706667 0-32-14.293333-32-32v-42.666666c0-17.706667 14.293333-32 32-32s32 14.293333 32 32v42.666666c0 17.706667-14.293333 32-32 32zM778.666667 597.333333c-17.706667 0-32-14.293333-32-32v-42.666666c0-17.706667 14.293333-32 32-32s32 14.293333 32 32v42.666666c0 17.706667-14.293333 32-32 32z",
      "p-id": "51203"
    }), _jsx("path", {
      d: "M778.666667 554.666667h-533.333334c-17.706667 0-32-14.293333-32-32s14.293333-32 32-32h533.333334c17.706667 0 32 14.293333 32 32s-14.293333 32-32 32zM640 42.666667H384c-46.933333 0-85.333333 38.4-85.333333 85.333333v149.333333c0 46.933333 38.4 85.333333 85.333333 85.333334h256c46.933333 0 85.333333-38.4 85.333333-85.333334V128c0-46.933333-38.4-85.333333-85.333333-85.333333z m-10.666667 128h-64c-17.706667 0-32-14.293333-32-32S547.626667 106.666667 565.333333 106.666667h64c17.706667 0 32 14.293333 32 32S647.04 170.666667 629.333333 170.666667zM384 661.333333H128c-46.933333 0-85.333333 38.4-85.333333 85.333334v149.333333c0 46.933333 38.4 85.333333 85.333333 85.333333h256c46.933333 0 85.333333-38.4 85.333333-85.333333v-149.333333c0-46.933333-38.4-85.333333-85.333333-85.333334z m-10.666667 128h-64c-17.706667 0-32-14.293333-32-32s14.293333-32 32-32h64c17.706667 0 32 14.293333 32 32s-14.293333 32-32 32zM896 661.333333H640c-46.933333 0-85.333333 38.4-85.333333 85.333334v149.333333c0 46.933333 38.4 85.333333 85.333333 85.333333h256c46.933333 0 85.333333-38.4 85.333333-85.333333v-149.333333c0-46.933333-38.4-85.333333-85.333333-85.333334z m-10.666667 128h-64c-17.706667 0-32-14.293333-32-32s14.293333-32 32-32h64c17.706667 0 32 14.293333 32 32s-14.293333 32-32 32z",
      "p-id": "51204"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);