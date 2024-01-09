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
      d: "M120.8 289.1h783.8c11.5 0 20.7-9.3 20.7-20.7v-58.5c0-11.5-9.3-20.7-20.7-20.7H747v-51.4c0-11.6-9.4-20.9-20.9-20.9H668c-11.6 0-20.9 9.4-20.9 20.9v51.4H344.4v-50.4c0-12.1-9.8-21.9-21.9-21.9h-56.2c-12.1 0-21.9 9.8-21.9 21.9v50.4H120.8c-11.5 0-20.7 9.3-20.7 20.7v58.5c0 11.4 9.3 20.7 20.7 20.7zM305 346.6H116.4c-9 0-16.3 7.3-16.3 16.3v188.6c0 9 7.3 16.3 16.3 16.3H305c9 0 16.3-7.3 16.3-16.3V362.9c0-9-7.3-16.3-16.3-16.3zM305 625.4H116.4c-9 0-16.3 7.3-16.3 16.3v188.6c0 9 7.3 16.3 16.3 16.3H305c9 0 16.3-7.3 16.3-16.3V641.7c0-9-7.3-16.3-16.3-16.3zM520.6 625.4H419.2c-9 0-16.3 7.3-16.3 16.3v188.6c0 3.4 1 6.6 2.8 9.2 1.5-33.4 8.8-65.9 21.9-96.7 14.2-33.5 34.6-63.6 60.4-89.4 10.3-10.2 21.2-19.6 32.6-28zM909.1 567.8c9 0 16.3-7.3 16.3-16.3V362.9c0-9-7.3-16.3-16.3-16.3H720.5c-3.7 0-7.2 1.3-9.9 3.4 74.1 11.4 131 75.6 131 152.8 0 23.2-5.2 45.3-14.4 65h81.9zM624 361.6c-0.7-8.4-7.7-15-16.2-15H419.2c-9 0-16.3 7.3-16.3 16.3v188.6c0 9 7.3 16.3 16.3 16.3h127.6c-9.2-19.8-14.4-41.8-14.4-65 0-62.8 37.7-117 91.6-141.2z",
      "p-id": "4041"
    }), _jsx("path", {
      d: "M719.1 609.7c47.7-13.9 82.5-57.9 82.5-110 0-63.3-51.3-114.6-114.6-114.6s-114.6 51.3-114.6 114.6c0 52.2 34.8 96.2 82.5 110-117.8 15.8-209.5 117.4-209.5 239.4v1.5c0 19.7 2.4 38.9 6.9 57.3h469.2c4.5-18.4 6.9-37.6 6.9-57.3v-1.5c0.1-122-91.5-223.6-209.3-239.4z",
      "p-id": "4042"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);