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
      d: "M189.04576 205.55776c8.71936 0 16.1536-2.94912 22.30784-8.84736s9.23136-13.20448 9.23136-21.92384c0.51712-8.71936-2.432-16.2816-8.84224-22.69184-6.41024-6.40512-13.7216-9.87136-21.92384-10.38336-8.20736 0-15.3856 3.07712-21.53984 9.23136s-9.48736 13.33248-9.99936 21.53984v1.54112c0 8.20224 3.07712 15.38048 9.23136 21.53984 6.14912 6.14912 13.32736 9.48224 21.53472 9.99424zM280.58624 205.55776c8.20736 0 15.2576-2.94912 21.15584-8.84736 5.89824-5.89824 9.10336-12.94848 9.61536-21.15584 0.512-8.71936-2.176-16.41472-8.07424-23.08096s-13.2096-10.25536-21.92384-10.76736c-8.20736 0-15.5136 2.94912-21.92896 8.84736-6.41024 5.89824-9.87136 12.94848-10.38336 21.15584v2.30912c0 8.20736 2.94912 15.3856 8.84736 21.53984 5.89824 6.15424 13.2096 9.48736 21.92384 9.99936h0.768zM393.6768 151.7056c-6.15424-6.66624-13.5936-9.99936-22.31296-9.99936-8.20736 0.512-15.3856 3.72224-21.53984 9.61536-6.15424 5.89824-9.48736 12.94848-10.00448 21.15584v1.536c0 8.71936 3.07712 16.0256 9.23136 21.92384s13.58848 9.10336 22.30784 9.61536c8.20736 0 15.3856-3.07712 21.53984-9.23136s9.48736-13.33248 9.99936-21.54496c0.00512-8.70912-3.072-16.39936-9.22112-23.07072z",
      "p-id": "82231"
    }), _jsx("path", {
      d: "M901.12 39.17824H122.88c-45.24032 0-81.92 36.67968-81.92 81.92v778.24c0 45.24544 36.67968 81.92 81.92 81.92h778.24c45.24544 0 81.92-36.67456 81.92-81.92v-778.24c0-45.24032-36.67456-81.92-81.92-81.92z m30.72 860.16c0 16.94208-13.77792 30.72-30.72 30.72H122.88c-16.94208 0-30.72-13.77792-30.72-30.72v-778.24c0-16.94208 13.77792-30.72 30.72-30.72h778.24c16.94208 0 30.72 13.77792 30.72 30.72v778.24z",
      "p-id": "82232"
    }), _jsx("path", {
      d: "M71.68 252.93824h880.64v46.08H71.68zM303.616 455.3472c-3.01568 0-6.03136 3.2-7.04 8.00256l-49.26976 156.8 49.26976 156.8c1.00352 4.80256 4.0192 8.00256 7.04 8.00256h33.1776c6.03136 0 10.05056-11.20256 7.04-19.2l-46.24896-145.60256 46.24896-145.60256c3.01568-9.6-1.00352-19.2-7.04-19.2H303.616zM776.68864 618.5472l-57.79968-156.8c-1.15712-4.80256-4.62336-8.00256-8.0896-8.00256h-38.15424c-6.93248 0-11.56096 11.20256-8.08448 19.2l53.17632 145.60256-53.17632 145.60256c-3.47648 9.6 1.15712 19.2 8.08448 19.2h38.15424c3.46624 0 6.93248-3.2 8.0896-8.00256l57.79968-156.8zM440.62208 866.54464h42.5728c5.01248 0 10.01472-4.80256 10.01472-11.20256l92.76416-467.2c1.2544-8.00256-3.75296-16-10.01472-16h-42.57792c-5.01248 0-10.01984 4.80256-10.01984 11.20256l-92.75904 467.2c-2.50368 9.6 2.50368 16 10.01984 16z",
      "p-id": "82233"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);