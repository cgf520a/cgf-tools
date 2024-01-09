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
      d: "M646 1024H100A100 100 0 0 1 0 924V258a100 100 0 0 1 100-100h546a100 100 0 0 1 100 100v31a40 40 0 1 1-80 0v-31a20 20 0 0 0-20-20H100a20 20 0 0 0-20 20v666a20 20 0 0 0 20 20h546a20 20 0 0 0 20-20V713a40 40 0 0 1 80 0v211a100 100 0 0 1-100 100z",
      fill: "currentColor",
      "p-id": "33682"
    }), _jsx("path", {
      d: "M924 866H806a40 40 0 0 1 0-80h118a20 20 0 0 0 20-20V100a20 20 0 0 0-20-20H378a20 20 0 0 0-20 20v8a40 40 0 0 1-80 0v-8A100 100 0 0 1 378 0h546a100 100 0 0 1 100 100v666a100 100 0 0 1-100 100z",
      fill: "currentColor",
      "p-id": "33683"
    }), _jsx("path", {
      d: "M469 887a40 40 0 0 1-27-10L152 618a40 40 0 0 1 1-60l290-248a40 40 0 0 1 66 30v128a367 367 0 0 0 241-128l94-111a40 40 0 0 1 70 35l-26 109a430 430 0 0 1-379 332v142a40 40 0 0 1-40 40zM240 589l189 169v-91a40 40 0 0 1 40-40c144 0 269-85 323-214a447 447 0 0 1-323 137 40 40 0 0 1-40-40v-83z",
      fill: "currentColor",
      "p-id": "33684"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);