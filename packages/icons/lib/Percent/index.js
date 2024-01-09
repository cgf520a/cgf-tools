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
      d: "M911.392 80h-320c-35.2 0-64 28.8-64 64v415.424l96-96h288c35.2 0 64-28.8 64-64V144c0-35.2-28.8-64-64-64z",
      fill: "#EA7A26",
      "p-id": "5186"
    }), _jsx("path", {
      d: "M367.392 143.424h64v128h-64zM195.728 241.008l45.248-45.264 90.512 90.512-45.248 45.264zM143.392 367.424h128v64h-128z",
      fill: "#5785C4",
      "p-id": "5187"
    }), _jsx("path", {
      d: "M719.392 208c0-35.36-28.64-64-64-64s-64 28.64-64 64 28.64 64 64 64 64-28.64 64-64zM847.392 272c-35.36 0-64 28.64-64 64s28.64 64 64 64 64-28.64 64-64-28.64-64-64-64z m0 89.6c-14.112 0-25.6-11.488-25.6-25.6s11.488-25.6 25.6-25.6 25.6 11.488 25.6 25.6-11.488 25.6-25.6 25.6zM794.336 144c-9.056 17.28-120.704 221.696-138.944 256h53.088c7.104-13.632 129.472-238.24 138.912-256h-53.056z",
      fill: "#FFFFFF",
      "p-id": "5188"
    }), _jsx("path", {
      d: "M655.392 208m-25.6 0a25.6 25.6 0 1 0 51.2 0 25.6 25.6 0 1 0-51.2 0Z",
      fill: "#EA7A26",
      "p-id": "5189"
    }), _jsx("path", {
      d: "M577.024 643.84c-55.936 0-81.056 28.08-113.024 60.096V399.424c0-35.2-28.8-64-64-64s-64 28.8-64 64v140.832c-21.36-26.208-58.624-31.52-86.304-11.616l-137.824 79.776A63.728 63.728 0 0 0 80 663.552v105.248c0 114.432 92.736 207.168 207.168 207.168 55.424 0 105.632-21.888 142.784-57.344L649.184 699.68c30.096-30-29.12-55.84-72.16-55.84z",
      fill: "#F7DED0",
      "p-id": "5190"
    }), _jsx("path", {
      d: "M399.936 396.384v174.768c0 21.152 8.4 41.44 23.36 56.384l19.04 19.04a63.904 63.904 0 0 1 21.6 47.84V399.424c0-3.664-0.32-7.248-0.912-10.752-6.368-37.232-63.088-30.08-63.088 7.712zM613.136 649.328L382.272 880.16a215.84 215.84 0 0 1-152.608 63.216h-54.4a205.984 205.984 0 0 0 111.232 32.576c109.52 0 142.656-57.216 362.016-276.288 21.84-21.76-3.456-41.264-35.36-50.352z",
      fill: "#F6D2BF",
      "p-id": "5191"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);