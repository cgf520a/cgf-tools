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
      d: "M174.4 512.4v169.9c0 15.2 8.1 29.3 21.3 37l294.9 170.3c13.2 7.6 29.5 7.6 42.7 0l294.9-170.3c13.2-7.6 21.3-21.7 21.3-37V512.4c0-15.2-8.1-29.3-21.3-37L533.3 305.2c-13.2-7.6-29.5-7.6-42.7 0L195.8 475.4c-13.2 7.7-21.4 21.8-21.4 37z",
      fill: "#CEE8FF",
      "p-id": "4950"
    }), _jsx("path", {
      d: "M511.9 171.5l294.9 170.3v340.5L511.9 852.5 217 682.3V341.8l294.9-170.3m0-42.7c-7.4 0-14.7 1.9-21.3 5.7L195.7 304.8c-13.2 7.6-21.3 21.7-21.3 37v340.5c0 15.2 8.1 29.3 21.3 37l294.9 170.3c6.6 3.8 14 5.7 21.3 5.7s14.7-1.9 21.3-5.7l294.9-170.3c13.2-7.6 21.3-21.7 21.3-37V341.7c0-15.2-8.1-29.3-21.3-37L533.2 134.5c-6.6-3.8-13.9-5.7-21.3-5.7z",
      fill: "#3C99FE",
      "p-id": "4951"
    }), _jsx("path", {
      d: "M838.8 354L532.4 531c-10.2 5.9-23.3 2.4-29.1-7.8-5.9-10.2-2.4-23.3 7.8-29.1l306.5-176.9c10.2-5.9 23.3-2.4 29.1 7.8 5.8 10 2.3 23.1-7.9 29zM839 540.2L596.4 680.3c-10.2 5.9-23.3 2.4-29.1-7.8-5.9-10.2-2.4-23.3 7.8-29.1l242.7-140.1c10.2-5.9 23.3-2.4 29.1 7.8 5.8 10.1 2.3 23.2-7.9 29.1z",
      fill: "#3C99FE",
      "p-id": "4952"
    }), _jsx("path", {
      d: "M511.9 863.5c-11.7 0-21.3-9.6-21.3-21.3V517.9c0-11.7 9.6-21.3 21.3-21.3 11.7 0 21.3 9.6 21.3 21.3v324.3c0 11.7-9.6 21.3-21.3 21.3z",
      fill: "#3C99FE",
      "p-id": "4953"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);