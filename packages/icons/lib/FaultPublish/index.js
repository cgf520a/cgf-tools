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
      d: "M844.8 102.4c-4.096-2.56-9.216-3.584-13.824-2.048L131.584 355.328h-48.64c-23.552 0-40.96 10.752-53.248 19.968l-1.536 1.536-2.56 2.56c-18.944 14.848-25.6 40.96-25.6 58.88v109.056c0 22.528 9.728 43.008 25.6 55.808 15.872 15.36 36.352 24.064 57.344 24.064h51.712l65.024 25.088c1.024 3.072 2.56 6.144 5.632 8.192l-6.656 18.944c-11.776 35.84-10.752 70.144 4.096 99.328 11.776 30.208 38.4 54.272 73.216 66.048l197.632 71.68c14.848 5.632 29.696 8.192 44.544 8.192 17.92 0 35.84-4.096 52.224-12.288 35.328-17.408 58.368-41.984 68.608-72.704l8.192-20.48 184.32 66.56c4.608 1.536 9.728 1.024 13.824-2.048 4.096-2.56 6.144-7.168 6.144-12.288V114.688c-0.512-4.608-2.56-9.216-6.656-12.288z m-233.984 726.528c-7.68 23.04-26.112 41.984-53.76 56.32-22.528 11.264-48.128 12.288-73.216 2.56l-198.144-71.68c-27.136-9.216-47.104-26.624-55.296-49.152 0-0.512-0.512-1.024-0.512-1.536-11.264-22.528-12.288-48.64-2.56-76.8l6.656-17.92 386.048 137.728-7.68 19.456c-1.536 0.512-1.536 1.024-1.536 1.024z m210.432 20.992l-155.136-56.32s-0.512 0-0.512-0.512l-12.288-4.608-9.216-3.584h-0.512l-402.432-143.36c-1.536-4.096-4.608-7.68-8.704-9.728l-88.576-34.304c-1.536-0.512-3.584-1.024-5.12-1.024H82.944c-13.824 0-26.624-5.632-37.376-15.872l-1.536-1.536c-9.216-6.656-14.336-18.944-14.336-32.256V438.272c0-14.336 6.144-29.696 14.336-35.84l1.536-1.536 2.56-2.56c12.8-9.728 23.04-13.312 34.304-13.312h51.2c1.536 0 3.584-0.512 5.12-1.024l681.984-248.32V849.92z",
      "p-id": "17767"
    }), _jsx("path", {
      d: "M238.08 438.784c1.536 0 3.584-0.512 5.12-1.024l512-186.368c7.68-3.072 11.776-11.264 8.704-18.944-2.56-7.68-11.264-11.776-18.944-8.704L232.96 409.6c-7.68 3.072-11.776 11.264-8.704 18.944 2.048 6.656 7.68 10.24 13.824 10.24zM907.264 336.896c-4.608-2.048-9.728-1.536-13.824 1.536-4.096 2.56-6.656 7.168-6.656 12.288v322.56c0 5.12 2.56 9.728 6.656 12.288 2.56 1.536 5.632 2.56 8.192 2.56 2.048 0 4.096-0.512 5.632-1.024C977.92 657.408 1024 588.8 1024 512s-46.08-145.408-116.736-175.104z m9.216 312.32V374.784c48.128 28.672 77.824 79.872 77.824 137.216s-30.208 108.544-77.824 137.216z",
      "p-id": "17768"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);