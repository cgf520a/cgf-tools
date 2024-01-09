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
      d: "M685 472.2v-328c0-6.6-5.4-12-12-12H352.1c-6.6 0-12 5.4-12 12v189.6c0 3.3-2.7 6-6 6H76.2c-6.6 0-12 5.4-12 12v596.5c0 6.6 5.4 12 12 12H949c6.6 0 12-5.4 12-12V490.2c0-6.6-5.4-12-12-12H691c-3.3 0-6-2.7-6-6z m-556.8 418V409.8c0-3.3 2.7-6 6-6h199.9c3.3 0 6 2.7 6 6v480.5c0 3.3-2.7 6-6 6H134.2c-3.3-0.1-6-2.8-6-6.1z m282.4 6c-3.3 0-6-2.7-6-6V339.8h-0.5V202.1c0-3.3 2.7-6 6-6H615c3.3 0 6 2.7 6 6v688.1c0 3.3-2.7 6-6 6H410.6z m480.4 0H691c-3.3 0-6-2.7-6-6v-342c0-3.3 2.7-6 6-6h200c3.3 0 6 2.7 6 6v342.1c0 3.2-2.7 5.9-6 5.9z",
      "p-id": "75315"
    }), _jsx("path", {
      d: "M472.9 259.8v37.7l32.8-28.5v115.8H541V231.3h-35.3zM264.4 521c12.3-12.9 19-21.6 19-37.7 0-28.9-20.7-46.3-49.1-46.3-26.7 0-49.6 16.6-49.6 46.8H220c0-11.9 7.8-14.9 14.2-14.9 9.1 0 13.8 5.8 13.8 14.2 0 6.5-2.2 10.3-7.8 16.4l-55.6 60.3v31.9h98.7v-31.9h-55.6l36.7-38.8zM791.8 607.8c7.3 0 14 5 14 14.7 0 6.9-4.1 14.4-14.7 14.4h-5v30.6h5c9.5 0 16.4 6.9 16.4 16.2 0 11-6.5 16.4-15.7 16.4-8.8 0-15.7-5.4-15.7-16.2h-35.3c0 34.5 25.6 48.1 51.1 48.1 26.9 0 51.1-15.1 51.1-47.2 0-18.3-9.3-27.6-17.7-33.4 7.8-5 15.9-13.1 15.9-30 0-26.5-20.9-45.5-49.4-45.5-27.4 0-49.4 17.5-49.4 46.3h35.3c0.1-9.2 6.7-14.4 14.1-14.4z",
      "p-id": "75316"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);