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
      d: "M544.42 555.25a2.06 2.06 0 0 1-0.31-4c62.6-19.26 109.26-93.81 109.26-182.84 0-103.65-63.24-187.68-141.26-187.68s-141.26 84-141.26 187.68c0 89 46.66 163.58 109.26 182.84a2.06 2.06 0 0 1-0.31 4C342.71 576 235.36 726.91 229.56 912.7a15.55 15.55 0 0 0 15.73 15.84h533.64a15.55 15.55 0 0 0 15.73-15.84c-5.8-185.79-113.15-336.7-250.24-357.45z",
      fill: "currentColor",
      "p-id": "88559"
    }), _jsx("path", {
      d: "M688.39 351.36c0 88.86-28.45 153.6-69.69 184a10.61 10.61 0 0 0 3.67 18.82c109.45 30.2 179.33 165.4 198.52 274.29a10.91 10.91 0 0 0 10.81 9h117.7a10.83 10.83 0 0 0 11-10.9c-3.51-176.53-92.07-321.75-217-356.09a10.57 10.57 0 0 1-2.73-19.48c48.59-28.79 78.27-96.13 78.27-173.79 0-103.65-73.28-176.77-151.3-176.77-34.13 0-65.44 16.09-89.86 42.88a10.6 10.6 0 0 0 2.77 16.58c58.61 31.44 107.84 103.52 107.84 191.46zM335.32 351.36c0 88.62 28.29 153.24 69.34 183.72a10.83 10.83 0 0 1-3.75 19.2C291.73 584.69 222 719.65 202.82 828.39a11.07 11.07 0 0 1-11 9H74.53a11 11 0 0 1-11.18-11.12c3.57-176.15 91.84-321.09 216.43-355.71a10.84 10.84 0 0 0 2.74-19.85c-48.29-29-77.75-96.1-77.75-173.48 0-103.65 73.28-176.77 151.29-176.77 34.06 0 65.3 16 89.69 42.69a10.8 10.8 0 0 1-2.81 16.89c-58.52 31.48-107.62 103.49-107.62 191.32z",
      fill: "currentColor",
      "p-id": "88560"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);