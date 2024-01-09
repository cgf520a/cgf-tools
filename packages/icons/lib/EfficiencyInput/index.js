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
      d: "M836.07 432.574L423.001 845.642l-6.322 50.843a42.083 42.083 0 0 0 9.03 34.95 32.24 32.24 0 0 0 25.468 9.03h9.482l50.843-6.321 413.068-413.068z",
      "p-id": "32638"
    }), _jsx("path", {
      d: "M337.21 877.34H200.573a36.123 36.123 0 0 1-38.02-34.949V181.519a36.123 36.123 0 0 1 38.11-34.95H759.85a36.123 36.123 0 0 1 38.11 34.95v155.69a31.788 31.788 0 1 0 63.215 0V181.52A99.339 99.339 0 0 0 759.85 83.083H200.574A99.339 99.339 0 0 0 99.339 181.52V842.39a99.339 99.339 0 0 0 101.686 98.526H337.21a31.788 31.788 0 0 0 0-63.216z",
      "p-id": "32639"
    }), _jsx("path", {
      d: "M702.595 273.723a32.601 32.601 0 0 0-34.95-31.788H292.778a31.879 31.879 0 1 0 0 63.215h374.867a32.601 32.601 0 0 0 34.95-31.427z m-349.492 381.28h-63.215a31.788 31.788 0 0 0 0 63.215h63.215a31.788 31.788 0 1 0 0-63.216z m-60.325-222.429a31.879 31.879 0 1 0 0 63.216h279.954a31.879 31.879 0 1 0 0-63.216z",
      "p-id": "32640"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);