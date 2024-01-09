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
      d: "M298.39 469.33c8.38 0 170.67-0.42 170.67-0.42V298.67c0-94.26-76.41-170.67-170.67-170.67s-170.67 76.41-170.67 170.67 76.41 170.66 170.67 170.66z m0-256c47.05 0 85.33 38.28 85.33 85.33v85.13c-40.62 0.1-81.33 0.2-85.33 0.2-47.05 0-85.33-38.28-85.33-85.33-0.01-47.05 38.27-85.33 85.33-85.33zM895.89 298.67c0-94.26-76.41-170.67-170.67-170.67s-170.67 76.41-170.67 170.67v170.24s162.29 0.42 170.67 0.42c94.26 0 170.67-76.41 170.67-170.66z m-256 0c0-47.05 38.28-85.33 85.33-85.33s85.33 38.28 85.33 85.33S772.27 384 725.22 384c-4.01 0-44.71-0.1-85.33-0.2v-85.13zM128.11 725.39c0 94.23 76.38 170.61 170.61 170.61s170.61-76.38 170.61-170.61V555.2s-162.24-0.42-170.61-0.42c-94.22 0-170.61 76.39-170.61 170.61z m255.89 0c0 47.02-38.25 85.28-85.28 85.28s-85.28-38.25-85.28-85.28 38.25-85.28 85.28-85.28c4.01 0 44.68 0.1 85.28 0.2v85.08zM725.61 554.67c-8.37 0-170.67 0.42-170.67 0.42v170.24c0 94.26 76.41 170.67 170.67 170.67 94.26 0 170.67-76.41 170.67-170.67 0-94.25-76.41-170.66-170.67-170.66z m0 256c-47.05 0-85.33-38.28-85.33-85.33V640.2c40.62-0.1 81.33-0.2 85.33-0.2 47.05 0 85.33 38.28 85.33 85.33 0.01 47.06-38.27 85.34-85.33 85.34z",
      fill: "currentColor",
      "p-id": "87342"
    })
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);