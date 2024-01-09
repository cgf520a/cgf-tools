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
      d: "M490.5 48.4c-229.3 0-461.1 56.7-461.1 164.3v611c0 6.7 2.1 13.4 6.2 18.6 4.1 5.1 100.5 128.3 454.9 128.3 349.3 0 450.3-125.2 454.4-130.3 4.1-5.7 6.7-11.8 6.7-19.1V212.8c0-107.7-232.4-164.4-461.1-164.4z m0 61.8c258.1 0 399.3 68 399.3 102.5S748.6 315.3 490.5 315.3 91.2 247.8 91.2 212.8s140.6-102.6 399.3-102.6z m323 744.5c-56.7 24.7-158.2 54.1-323.5 54.1-272 0-374.6-75.2-399.3-97.4V696c28.9 17 72.6 35 136.5 49.5 2.1 0.5 4.6 0.5 6.7 0.5 14.4 0 26.8-9.8 30.4-24.2 3.6-16.5-6.7-33-23.7-36.6C133 661.5 97.4 627 90.7 619.2V498.7c29.9 16.5 73.7 34.5 136.5 48.4 2.1 0.5 4.6 0.5 6.7 0.5 13.9 0 26.8-9.8 30.4-24.2 3.6-16.5-6.7-33-23.2-37.1-91.7-20.6-135-49.5-149.9-61.8V299.3c84 51.5 242.1 77.8 399.3 77.8 157.1 0 315.3-26.3 399.3-77.8V426c-13.9 12.4-57.2 42.8-159.2 63.9-16.5 3.6-27.3 19.6-24.2 36.6 3.1 14.4 16 24.7 30.4 24.7 2.1 0 4.1 0 6.2-0.5 69-13.9 115.4-33 146.8-50v116.9c-0.5 1-1.5 2.1-2.1 3.1 0 0.5-30.9 41.7-157.1 67-16.5 3.6-27.3 19.6-24.2 36.6 3.1 14.4 16 24.7 30.4 24.7 2.1 0 4.1 0 6.2-0.5 70.6-14.4 117-33.5 146.8-51.5v112.3c-10.9 8.8-34 27.3-76.3 45.4z",
      "p-id": "49045"
    }), _jsx("path", {
      d: "M653.3 438.4c0-13.4-8.2-25.3-20.1-30.4-12.4-5.1-26.3-2.1-35.5 7.2L490 523.4 381.8 415.2c-12.9-12.4-33.5-12.4-45.8 0.5-12.4 12.9-12.9 33-0.5 45.8l75.2 75.7h-52c-18 0.5-31.9 15-31.9 33s14.4 32.5 31.9 33H457v64.4h-98.4c-18 0-33 15-33 33s15 33 33 33H457V833c0 18 14.4 32.5 32.5 32.5S522 851.1 522 833v-99.4h98.4c18 0 33-15 33-33s-15-33-33-33H522v-64.4h98.4c18-0.5 31.9-15 31.9-33s-14.4-32.5-31.9-33h-52l75.2-75.7c6.1-6.1 9.7-14.3 9.7-23.1z",
      "p-id": "49046"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);