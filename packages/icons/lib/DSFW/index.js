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
      d: "M802.346667 153.6c-5.333333-4.053333-12.16-5.333333-18.56-3.626667l-320 88.106667c-9.386667 2.56-15.786667 11.093333-15.786667 20.693333v125.653334l-207.146667-63.573334c-6.4-1.92-13.44-0.853333-18.986666 3.2-5.333333 4.053333-8.533333 10.453333-8.533334 17.28v512c0 11.733333 9.6 21.333333 21.333334 21.333334h554.666666c11.733333 0 21.333333-9.6 21.333334-21.333334V170.666667c0-6.613333-3.2-13.013333-8.32-17.066667zM469.333333 832H256V370.133333l320 98.133334V832h-106.666667z m298.666667 0h-149.333333V452.693333c0-9.386667-6.186667-17.706667-15.146667-20.48L490.666667 397.653333v-122.666666l277.333333-76.373334V832z",
      "p-id": "6641"
    }), _jsx("path", {
      d: "M490.666667 554.666667h-149.333334c-11.733333 0-21.333333 9.6-21.333333 21.333333s9.6 21.333333 21.333333 21.333333h149.333334c11.733333 0 21.333333-9.6 21.333333-21.333333s-9.6-21.333333-21.333333-21.333333zM490.666667 661.333333h-149.333334c-11.733333 0-21.333333 9.6-21.333333 21.333334s9.6 21.333333 21.333333 21.333333h149.333334c11.733333 0 21.333333-9.6 21.333333-21.333333s-9.6-21.333333-21.333333-21.333334z",
      "p-id": "6642"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);