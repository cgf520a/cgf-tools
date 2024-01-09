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
      d: "M212.836433 412.393421l49.789986 0 0 398.792659-49.789986 0 0-398.792659Z",
      fill: "currentColor",
      "p-id": "6499"
    }), _jsx("path", {
      d: "M212.836433 312.696792l49.789986 0 0 49.845245-49.789986 0 0-49.845245Z",
      fill: "currentColor",
      "p-id": "6500"
    }), _jsx("path", {
      d: "M63.46545 63.451124l0 897.285017 896.224872 0L959.690322 63.451124 63.46545 63.451124zM909.900336 910.887826l-796.643875 0 2.074242-789.348726 796.643875 0L909.900336 910.887826z",
      fill: "currentColor",
      "p-id": "6501"
    }), _jsx("path", {
      d: "M362.207415 811.18608l49.789986 0L411.997402 462.240713l99.580996 0 0-49.848315L411.997402 412.392398c0-82.59309 66.875107-149.546991 149.370982-149.546991l0-49.848315c-109.995183 0-199.160969 89.272209-199.160969 199.395306l-49.789986 0 0 49.848315 49.789986 0L362.207415 811.18608z",
      fill: "currentColor",
      "p-id": "6502"
    }), _jsx("path", {
      d: "M638.090766 800.871153c-14.58723-45.435819-23.834848-109.632933-23.834848-181.429119s9.247618-135.993301 23.834848-181.429119c-43.332924 31.155581-73.624834 100.491739-73.624834 181.429119S594.758865 769.715573 638.090766 800.871153z",
      fill: "currentColor",
      "p-id": "6503"
    }), _jsx("path", {
      d: "M813.416887 619.442034c0-80.936357-30.29191-150.273539-73.624834-181.429119 14.58723 45.435819 23.834848 109.632933 23.834848 181.429119s-9.247618 135.993301-23.834848 181.429119C783.124977 769.715573 813.416887 700.378391 813.416887 619.442034z",
      fill: "currentColor",
      "p-id": "6504"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);