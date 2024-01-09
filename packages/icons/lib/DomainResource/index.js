function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import Icon from '@ant-design/icons';
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var CustomSvg = function CustomSvg() {
  return _jsx("svg", {
    viewBox: "0 0 1024 1024",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    children: _jsx("path", {
      d: "M797.866667 768H226.133333c-10.666667 0-17.066667 12.8-8.533333 21.333333 74.666667 78.933333 179.2 128 294.4 128s221.866667-49.066667 294.4-128c8.533333-8.533333 2.133333-21.333333-8.533333-21.333333zM192 298.666667h640c10.666667 0 17.066667-12.8 10.666667-21.333334-72.533333-102.4-194.133333-170.666667-330.666667-170.666666S253.866667 174.933333 181.333333 277.333333c-6.4 8.533333 0 21.333333 10.666667 21.333334z m640 64H192c-46.933333 0-85.333333 38.4-85.333333 85.333333v170.666667c0 46.933333 38.4 85.333333 85.333333 85.333333h640c46.933333 0 85.333333-38.4 85.333333-85.333333v-170.666667c0-46.933333-38.4-85.333333-85.333333-85.333333z m-437.333333 115.2L362.666667 618.666667c-4.266667 12.8-12.8 17.066667-25.6 17.066666s-21.333333-6.4-25.6-17.066666l-29.866667-98.133334-29.866667 98.133334c-4.266667 10.666667-12.8 17.066667-25.6 17.066666s-21.333333-6.4-25.6-17.066666l-32-140.8V469.333333c2.133333-10.666667 6.4-17.066667 17.066667-17.066666s19.2 6.4 21.333333 19.2l21.333334 108.8 32-110.933334c4.266667-8.533333 10.666667-14.933333 19.2-14.933333 10.666667 0 17.066667 4.266667 19.2 14.933333l32 110.933334 21.333333-108.8c2.133333-12.8 8.533333-19.2 19.2-19.2s17.066667 6.4 17.066667 17.066666c6.4 2.133333 6.4 6.4 6.4 8.533334z m230.4 0L593.066667 618.666667c-4.266667 12.8-12.8 17.066667-25.6 17.066666s-21.333333-6.4-25.6-17.066666L512 520.533333 482.133333 618.666667c-4.266667 10.666667-12.8 17.066667-25.6 17.066666s-21.333333-6.4-25.6-17.066666l-32-140.8V469.333333c2.133333-10.666667 6.4-17.066667 17.066667-17.066666s19.2 6.4 21.333333 19.2l21.333334 108.8L490.666667 469.333333c4.266667-8.533333 10.666667-14.933333 19.2-14.933333 10.666667 0 17.066667 4.266667 19.2 14.933333l32 110.933334 21.333333-108.8c2.133333-12.8 8.533333-19.2 19.2-19.2s17.066667 6.4 17.066667 17.066666c8.533333 2.133333 8.533333 6.4 6.4 8.533334z m232.533333 0L825.6 618.666667c-4.266667 12.8-12.8 17.066667-25.6 17.066666s-21.333333-6.4-25.6-17.066666l-29.866667-98.133334-29.866666 98.133334c-4.266667 10.666667-12.8 17.066667-25.6 17.066666s-21.333333-6.4-25.6-17.066666l-32-140.8V469.333333c2.133333-10.666667 6.4-17.066667 17.066666-17.066666s19.2 6.4 21.333334 19.2l21.333333 108.8 32-110.933334c4.266667-8.533333 10.666667-14.933333 19.2-14.933333 10.666667 0 17.066667 4.266667 19.2 14.933333l32 110.933334 21.333333-108.8c2.133333-12.8 8.533333-19.2 19.2-19.2s17.066667 6.4 17.066667 17.066666c8.533333 2.133333 6.4 6.4 6.4 8.533334z",
      "p-id": "14049"
    })
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);