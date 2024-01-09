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
      d: "M328 512l81.6 108.8a32 32 0 0 1-51.2 38.4l-96-128a32 32 0 0 1 0-38.4l96-128a32 32 0 1 1 51.2 38.4L328 512zM710.4 620.8a32 32 0 0 0 51.2 38.4l96-128a32 32 0 0 0 0-38.4l-96-128a32 32 0 1 0-51.2 38.4l81.6 108.8-81.6 108.8zM559.232 646.944a32 32 0 0 1-62.464-13.888l64-288a32 32 0 0 1 62.464 13.888l-64 288z",
      fill: "currentColor",
      "p-id": "30497"
    }), _jsx("path", {
      d: "M874.56 739.904a32 32 0 1 1 41.984 48.32l-220.48 195.936a32 32 0 0 1-20.96 7.84H195.04C140.16 992 96 946.624 96 891.072V132.928C96 77.376 140.16 32 195.04 32h633.92C883.84 32 928 77.376 928 132.928v134.976a32 32 0 0 1-64 0V132.928C864 112.32 848.096 96 828.96 96H195.04C175.904 96 160 112.32 160 132.928v758.144C160 911.68 175.904 928 195.04 928h468.096l211.456-188.096z",
      fill: "currentColor",
      "p-id": "30498"
    }), _jsx("path", {
      d: "M928 763.2a32 32 0 0 1-64 0V672a32 32 0 0 1 64 0v91.2z",
      fill: "currentColor",
      "p-id": "30499"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);