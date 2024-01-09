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
      d: "M490.36 491.69H262.07c-90.24 0-163.66-73.42-163.66-163.66V99.75H326.7c90.24 0 163.66 73.42 163.66 163.66v228.28zM152.97 154.3v173.74c0 60.16 48.94 109.1 109.1 109.1h173.74V263.4c0-60.16-48.94-109.1-109.1-109.1H152.97zM761.93 491.69H533.64V263.4c0-90.24 73.42-163.66 163.66-163.66h228.29v228.29c0 90.25-73.42 163.66-163.66 163.66z m-173.74-54.55h173.74c60.16 0 109.1-48.94 109.1-109.1V154.3H697.3c-60.16 0-109.1 48.94-109.1 109.1v173.74zM326.7 924.25H98.41V695.97c0-90.24 73.42-163.66 163.66-163.66h228.29V760.6c0 90.23-73.42 163.65-163.66 163.65zM152.97 869.7H326.7c60.16 0 109.1-48.94 109.1-109.1V586.87H262.07c-60.16 0-109.1 48.94-109.1 109.1V869.7zM925.59 924.25H697.3c-90.24 0-163.66-73.42-163.66-163.66V532.31h228.29c90.24 0 163.66 73.42 163.66 163.66v228.28z m-337.4-337.38V760.6c0 60.16 48.94 109.1 109.1 109.1h173.74V695.97c0-60.16-48.94-109.1-109.1-109.1H588.19z",
      "p-id": "42649"
    })
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);