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
      d: "M796.2624 469.74464h-174.3616a37.8368 37.8368 0 0 1-34.9696-23.3472 37.85728 37.85728 0 0 1 8.16128-41.30304c22.36416-22.3744 21.67808-79.06816 15.66208-113.00864-21.21216-39.66976-42.624-42.78784-48.7424-42.78784-5.69344 1.92-11.9808 15.01696-14.54592 24.35072-0.51712 115.18976-118.84544 187.63264-123.904 190.67904a37.6576 37.6576 0 0 1-7.64416 3.50208v258.26816h320.4096c8.12032 0 12.1856-4.0448 12.60544-5.18144-0.07168-2.27328 0.27136-5.22752 0.93696-8.16128l57.97888-239.1552c-1.67424-1.56672-5.4784-3.86048-11.59168-3.86048z m-478.59712 0h47.89248v256.3584h-47.89248v-256.3584z m195.02592-442.9312c-268.47232 0-486.144 217.6512-486.144 486.144 0 268.4928 217.67168 486.15936 486.144 486.15936 268.52352 0 486.144-217.67168 486.144-486.15936s-217.61536-486.144-486.144-486.144z m286.65344 696.32512c-0.98816 29.6448-28.8768 53.47328-63.01184 53.47328H267.1616v-357.376H400.3328c16.45056-10.82368 98.62656-69.0688 96.57856-149.3504l-0.0256-1.32096 0.22528-1.28c0.41984-2.25792 10.6496-55.36256 53.37088-67.31776 1.25952-0.3072 5.2736-1.17248 11.53536-1.17248 17.6128 0 62.24896 7.31136 96.18944 75.0848l1.05984 3.0208c0.83456 3.98848 18.0736 87.04-12.41088 142.34624h149.4016c34.75456 0 63.04256 24.71424 63.04256 55.0912l-0.34816 2.9696-59.60704 245.8368z",
      fill: "currentColor",
      "p-id": "40693"
    })
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);