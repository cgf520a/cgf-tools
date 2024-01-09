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
      d: "M496.53333333 985.70666667c27.41333333-128.21333333 128.32-223.36 248.64-223.36S966.4 857.49333333 993.81333333 985.70666667h-54.82666666c-25.38666667-98.34666667-102.72-170.02666667-193.92-170.02666667s-168.53333333 71.68-193.92 170.02666667h-54.61333334z m94.08-378.02666667c0-85.44 69.22666667-154.66666667 154.66666667-154.66666667s154.66666667 69.22666667 154.66666667 154.66666667-69.22666667 154.66666667-154.66666667 154.66666667-154.66666667-69.22666667-154.66666667-154.66666667z m53.33333334 0c0 55.89333333 45.44 101.33333333 101.33333333 101.33333333s101.33333333-45.44 101.33333333-101.33333333-45.44-101.33333333-101.33333333-101.33333333-101.33333333 45.54666667-101.33333333 101.33333333zM115.62666667 932.37333333h276.16v53.33333334H62.29333333v-874.66666667h229.33333334V38.29333333h384v72.74666667h229.33333333v293.86666667h-53.33333333V164.37333333h-176v65.92h-384v-65.92h-176v768z m229.33333333-755.41333333h277.33333333v-85.33333333h-277.33333333v85.33333333z m-101.33333333 403.09333333h271.68v-53.33333333H243.62666667v53.33333333z m0-160.74666666h480v-53.33333334h-480v53.33333334z",
      "p-id": "7257"
    })
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);