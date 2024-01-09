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
      d: "M846.336 739.328c8.192-0.512 16.896 2.048 23.552 6.144-28.672-18.432-46.592-50.176-46.08-84.992V462.336c0-145.92-105.472-267.776-246.784-297.472v-7.168c0-36.864-30.208-67.072-67.072-67.072s-67.072 30.208-67.072 67.072v7.168C301.056 194.56 195.072 315.904 195.072 462.336v199.168c0 35.84-18.432 67.072-46.592 84.992 7.168-4.608 15.36-6.656 23.552-6.144-24.576-1.024-45.568 18.432-46.592 43.008-1.024 24.576 18.432 45.568 43.008 46.592H844.8c24.576 0 45.056-19.968 45.056-44.544 1.024-25.6-18.944-46.08-43.52-46.08z m-336.896 246.784c61.952 0 112.128-50.176 112.128-112.128H397.312c0 61.952 50.176 112.128 112.128 112.128z m275.968-839.168c-9.216-1.536-17.92 4.608-19.968 13.824-2.048 9.216 4.608 17.92 13.824 19.968 58.368 10.24 96.768 65.536 86.528 123.904-1.536 9.216 4.608 17.92 13.824 19.968 9.216 2.048 17.92-4.608 19.968-13.824 13.312-77.312-37.888-150.016-114.176-163.84z",
      "p-id": "60896"
    }), _jsx("path", {
      d: "M817.664 44.544c-9.216-1.536-17.92 4.608-19.968 13.824-1.536 9.216 4.608 17.92 13.824 19.968 101.888 17.92 170.496 115.2 152.064 217.6-1.536 9.216 4.608 17.92 13.824 19.968 9.216 1.536 17.92-4.608 19.968-13.824 21.504-121.344-58.88-236.544-179.712-257.536z m-587.776 102.4c-0.512 0-0.512 0 0 0-76.8 13.312-128 86.528-114.176 163.328 1.536 9.216 10.752 15.36 19.968 13.824 9.216-1.536 15.36-10.752 13.824-19.968-10.24-58.368 28.672-113.664 86.528-123.904 9.216-1.536 15.36-10.752 13.824-19.968-2.048-8.704-10.752-14.848-19.968-13.312z",
      "p-id": "60897"
    }), _jsx("path", {
      d: "M197.12 44.544C76.288 65.536-4.096 180.736 16.896 301.568c1.536 9.216 10.24 15.36 19.968 13.824 9.216-1.536 15.36-10.24 13.824-19.968-17.92-101.888 50.176-199.68 152.064-217.6 9.216-1.536 15.36-10.24 13.824-19.968-1.536-8.704-10.24-14.848-19.456-13.312z",
      "p-id": "60898"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);