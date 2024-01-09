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
      d: "M445.45 97.1L170.81 264.27a128 128 0 0 0-61.45 109.34v278.87a128 128 0 0 0 58.08 107.22l274.64 179.11a128 128 0 0 0 139.84 0L856.56 759.7a128 128 0 0 0 58.08-107.22V373.61a128 128 0 0 0-61.45-109.34L578.55 97.1a128 128 0 0 0-133.1 0z",
      fill: "#FFFFFF",
      "p-id": "8617"
    }), _jsx("path", {
      d: "M458.6 139.56L214.08 287.32A112 112 0 0 0 160 383.18v248.93a112 112 0 0 0 44.65 89.49L453 908.47a112 112 0 0 0 127.49 5L843.2 746.21a112 112 0 0 0 51.86-94.64l-0.39-270.63a112 112 0 0 0-58.22-98.09L570.3 137.18a112 112 0 0 0-111.7 2.38z",
      fill: "#82AAFA",
      "p-id": "8618"
    }), _jsx("path", {
      d: "M512 960a145.38 145.38 0 0 1-78.66-23L160.85 761.81c-40.92-26.3-65.34-70.74-65.34-118.88V370.28A140.64 140.64 0 0 1 114 300.75a143.14 143.14 0 0 1 50.67-51.7L437.13 85.58a145.25 145.25 0 0 1 149.74 0l272.49 163.47a143.14 143.14 0 0 1 50.64 51.7 140.64 140.64 0 0 1 18.46 69.53v272.65c0 48.14-24.42 92.58-65.34 118.88L590.66 937A145.38 145.38 0 0 1 512 960z m0-863.65a113 113 0 0 0-58.23 16.17L181.27 276c-33.16 19.9-53.76 56-53.76 94.29v272.64a109.63 109.63 0 0 0 50.82 92.46l272.49 175.16a113.41 113.41 0 0 0 122.36 0l272.49-175.16a109.63 109.63 0 0 0 50.82-92.46V370.28c0-38.26-20.6-74.39-53.76-94.29l-272.5-163.47A113 113 0 0 0 512 96.35z",
      fill: "#333333",
      "p-id": "8619"
    }), _jsx("path", {
      d: "M512 512m-192 0a192 192 0 1 0 384 0 192 192 0 1 0-384 0Z",
      fill: "#FFFFFF",
      "p-id": "8620"
    }), _jsx("path", {
      d: "M528 528m-160 0a160 160 0 1 0 320 0 160 160 0 1 0-320 0Z",
      fill: "#FFBF80",
      "p-id": "8621"
    }), _jsx("path", {
      d: "M512 720c-114.69 0-208-93.31-208-208s93.31-208 208-208 208 93.31 208 208-93.31 208-208 208z m0-384c-97 0-176 79-176 176s79 176 176 176 176-79 176-176-78.95-176-176-176z",
      fill: "#333333",
      "p-id": "8622"
    }), _jsx("path", {
      d: "M622.85 448a32 32 0 0 0-43.71-11.71L512 475.05l-67.14-38.76a32 32 0 0 0-32 55.42L480 530.48V608a32 32 0 0 0 64 0v-77.52l67.14-38.77A32 32 0 0 0 622.85 448z",
      fill: "#333333",
      "p-id": "8623"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);