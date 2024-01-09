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
      d: "M709.92 518.24l-157.28-280a42.8 42.8 0 0 0-75.04 0l-157.6 280a44.64 44.64 0 0 0 0 43.44 43.28 43.28 0 0 0 37.28 21.68h315.12a43.12 43.12 0 0 0 37.28-21.68 44.24 44.24 0 0 0 0.24-43.44z m-173.36 13.52a26.88 26.88 0 0 1-18.64 7.2 27.52 27.52 0 0 1-18.64-6.96 24.64 24.64 0 0 1-8-20.16 26.64 26.64 0 0 1 26.56-26.8 27.04 27.04 0 0 1 19.12 8 27.44 27.44 0 0 1 0 38.8zM544 351.2l-6.88 79.44a63.52 63.52 0 0 1-5.12 22.72 14.88 14.88 0 0 1-14.56 9.2 14.64 14.64 0 0 1-14.56-8.96 80 80 0 0 1-5.04-23.2l-5.12-77.36c-1.04-15.12-1.28-25.84-1.28-32.48a32.56 32.56 0 0 1 8-22.96 26.88 26.88 0 0 1 20.16-8 20.96 20.96 0 0 1 20.88 10.96 67.36 67.36 0 0 1 4.88 29.12c-0.64 6.72-1.36 14.32-1.36 21.52zM828.32 896H184a25.04 25.04 0 1 1 0-50h644a25.04 25.04 0 0 1 0 50z",
      "p-id": "15000"
    }), _jsx("path", {
      d: "M742.32 96H262.88a158.56 158.56 0 0 0-158.4 158.4V576a158.56 158.56 0 0 0 158.4 158.4h216l-0.56 53.12a25.04 25.04 0 0 0 24.8 25.2 25.04 25.04 0 0 0 25.04-24.8l0.48-53.52h213.68a158.56 158.56 0 0 0 158.4-158.4V254.4A158.56 158.56 0 0 0 742.32 96z m108.4 480a108.56 108.56 0 0 1-108.4 108.16H262.88A108.56 108.56 0 0 1 154.48 576V254.4a108.56 108.56 0 0 1 108.4-108.4h479.44a108.56 108.56 0 0 1 108.4 108.4z",
      "p-id": "15001"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);