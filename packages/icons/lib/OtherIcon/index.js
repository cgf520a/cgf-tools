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
      d: "M496.1 550l-197.2-98.6c-4.5-2.2-9.4-2.1-13.7-0.1L74.4 550c-5.8 2.3-10 7.9-10 14.5v269.1h0.1c0 5.5 2.9 10.8 8.2 13.7l204 110.1 0.1 0.1h0.1l0.1 0.1 0.2 0.2 0.1 0.1 0.1 0.1 0.1 0.1 0.2 0.2h0.1l0.1 0.1 0.1 0.1h0.1l0.1 0.1 0.3 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1h0.1l0.1 0.1h0.2l0.1 0.1 0.1 0.1h0.1l0.1 0.1h0.6l0.1 0.1h0.6l0.1 0.1h5.8l0.1-0.1h0.6l0.1-0.1h0.5l0.1-0.1h0.1l0.1-0.1 0.1-0.1h0.2l0.1-0.1h0.1l0.2-0.2 0.1-0.1 0.1-0.1 0.3-0.1 0.1-0.1h0.1l0.1-0.1 0.1-0.1h0.1l0.3-0.3 0.1-0.1 0.1-0.1 0.2-0.2 0.1-0.1h0.1l0.1-0.1 204-110.1c5.2-2.8 8.2-8.1 8.2-13.7h0.1V564.5c2.6-6.6-1.5-12.2-7.4-14.5z m-204.4-67.3l44.4 22.2-171 87.8-50.3-27.2 176.9-82.8z m-22.1 435.5L95.9 824.4V590.8l52.9 28.6v51.7l39.3 18.3v-48.8l81.4 44v233.6z m15.7-260.6l-78.5-42.4 172.6-88.7 77.2 38.6-171.3 92.5zM949.7 550l-197.2-98.6c-4.5-2.2-9.4-2.1-13.7-0.1L528 550c-5.8 2.3-10 7.9-10 14.5v269h0.1c0 5.6 2.9 10.8 8.2 13.7l204 110.1 0.1 0.1h0.1l0.2 0.2 0.2 0.2 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1h0.1l0.1 0.1 0.1 0.1h0.1l0.1 0.1 0.3 0.1 0.2 0.2 0.1 0.1 0.1 0.1h0.2l0.1 0.1h0.2l0.1 0.1 0.1 0.1h0.1l0.1 0.1h0.5l0.1 0.1h0.6l0.1 0.1h5.7l0.1-0.1h0.6l0.1-0.1h0.5l0.1-0.1h0.1l0.1-0.1 0.1-0.1h0.2l0.1-0.1h0.1l0.1-0.1 0.1-0.1 0.1-0.1 0.1-0.1 0.3-0.1 0.1-0.1h0.1l0.1-0.1 0.1-0.1h0.1l0.1-0.1 0.1-0.1 0.1-0.1 0.2-0.2 0.1-0.1 0.1-0.1v-0.1h0.1l0.1-0.1 207.2-110c5.2-2.8 8.2-8.1 8.2-13.7h0.1V564.5c-0.4-6.4-4.4-12.2-10.4-14.5z m-204.4-67.3l44.4 22.2-171 87.8-50.3-27.2 176.9-82.8z m-22.1 435.5l-173.7-93.8V590.8l52.9 28.6v51.7l39.3 18.3v-48.8l81.4 44v233.6z m15.7-260.6l-78.5-42.4L833 526.5l77.2 38.6-171.3 92.5z m-11.2-493.5L530.5 65.6c-4.5-2.2-9.4-2.1-13.7-0.1L306 164.1c-5.8 2.3-10 7.9-10 14.5v269.1h0.1c0 5.6 2.9 10.8 8.2 13.7l204 110.1 0.1 0.1h0.1l0.1 0.1 0.3 0.3 0.1 0.1 0.1 0.1 0.1 0.1 0.1 0.1h0.1l0.2 0.2h0.1l0.1 0.1 0.3 0.1 0.1 0.1 0.2 0.2 0.1 0.1h0.1l0.1 0.1h0.2l0.1 0.1 0.1 0.1h0.1l0.1 0.1h0.2l0.1 0.1h0.2l0.1 0.1h7.1l0.1-0.1h0.2l0.1-0.1h0.2l0.1-0.1h0.1l0.1-0.1 0.1-0.1h0.3l0.1-0.1h0.1l0.1-0.1 0.2-0.2 0.1-0.1 0.3-0.1 0.1-0.1h0.2l0.1-0.1 0.1-0.1h0.1l0.1-0.1 0.2-0.2 0.1-0.1 0.2-0.2 0.1-0.1v-0.1h0.1l0.1-0.1 204-110.1c5.2-2.8 8.2-8.1 8.2-13.7h0.1v-269c2.7-6.6-1.4-12.3-7.3-14.6z m-193.2-61.9l44.4 22.2-171 87.8-50.3-27.2 176.9-82.8z m-33.1 435.4l-173.7-93.8V210.3l52.9 28.6v51.7l39.3 18.3v-48.7l81.4 44v233.4z m15.4-265.9l-78.5-42.4L611 140.6l77.2 38.6-171.4 92.5z m0 0",
      fill: "currentColor",
      "p-id": "4304"
    })
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);