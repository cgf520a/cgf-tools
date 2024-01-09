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
      d: "M502.2 393.6m-163 0a163 163 0 1 0 326 0 163 163 0 1 0-326 0Z",
      fill: "currentColor",
      "p-id": "13625"
    }), _jsx("path", {
      d: "M197.5 363.4c0.1-1.4 0.2-2.7 0.3-4.1 12-147.5 137.4-263.1 285.6-263.1 151.5 0 275.8 118.2 285.9 267.2h20c-10-160-143.3-287.2-305.9-287.2-158.5 0-292.7 123.6-305.5 281.4-0.2 1.9-0.3 3.8-0.4 5.7h20zM768.1 414.9c-16 142.9-137.6 254.4-284.7 254.4s-268.6-109-284.7-254.4h-20.1c16.3 156.6 146.7 274.4 304.8 274.4 158.2 0 288.7-120.4 304.8-274.4h-20.1z",
      fill: "currentColor",
      "p-id": "13626"
    }), _jsx("path", {
      d: "M483.4 160.3c-122.7 0-222.5 99.8-222.5 222.5s99.8 222.5 222.5 222.5 222.5-99.8 222.5-222.5c-0.1-122.7-99.9-222.5-222.5-222.5z m0 407.4c-102.1 0-184.9-82.8-184.9-184.9 0-102.1 82.8-184.9 184.9-184.9s184.9 82.8 184.9 184.9c0 102.1-82.8 184.9-184.9 184.9z",
      fill: "currentColor",
      "p-id": "13627"
    }), _jsx("path", {
      d: "M483.4 510.7c-70.5 0-127.9-57.4-127.9-127.9s57.4-127.9 127.9-127.9 127.9 57.4 127.9 127.9-57.4 127.9-127.9 127.9z m0-209.3c-44.9 0-81.4 36.5-81.4 81.4s36.5 81.4 81.4 81.4c44.9 0 81.4-36.5 81.4-81.4s-36.6-81.4-81.4-81.4z",
      fill: "currentColor",
      "p-id": "13628"
    }), _jsx("path", {
      d: "M433.2 563.8c0-51.5-0.2-103.1 0.1-154.6 0.2-36.1 18-57 48.2-57.2 32.1-0.2 54 22.6 54.2 57.8 0.4 57.4 0 114.8 0.2 172.2 0.1 30.5 7 38 39.5 40.9 65.3 5.7 130.6 11.1 195.9 16 41.3 3.1 57.7 20.5 49.6 58.2-16.4 76.4-34.4 152.6-51.1 228.9-4.5 20.8-18.2 30.5-39.7 31.4-29.5 1.3-59.1 2-88.7 2.1-83.2 0.3-166.4 0.2-249.6 0-32.3 0-42.7-6.7-52.8-34.7-27.9-77.3-55.5-154.7-83.2-232-8.1-22.5 4-47.3 27.4-56 22.2-8.2 52.7 2.8 62.4 24.2 11 24.4 21 49.3 30.1 74.3 5.4 14.8 13.6 26.7 31.6 24 19.2-3 26.3-16.8 26.2-34.4-0.5-53.7-0.4-107.4-0.3-161.1z",
      fill: "currentColor",
      "p-id": "13629"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);