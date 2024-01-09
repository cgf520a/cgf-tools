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
      d: "M847.5136 85.4016H176.4864A131.7376 131.7376 0 0 0 44.6464 217.1904V696.32a131.7888 131.7888 0 0 0 131.84 131.84H378.88l-10.5472 14.3872a61.44 61.44 0 0 0-11.9808 35.84 59.9552 59.9552 0 0 0 59.9552 59.904h191.6928a61.1328 61.1328 0 0 0 35.84-11.9808 60.2112 60.2112 0 0 0 11.9808-83.8656l-10.7008-14.08h202.24A131.7888 131.7888 0 0 0 979.3536 696.32V217.1904a131.7376 131.7376 0 0 0-131.84-131.7888zM763.648 504.832V624.64a35.84 35.84 0 0 1-71.68 0V504.832a35.84 35.84 0 1 1 71.68 0zM476.16 624.64V289.1264a35.84 35.84 0 0 1 71.68 0V624.64a35.84 35.84 0 0 1-71.68 0zM332.2368 384.9728V624.64a35.84 35.84 0 0 1-71.68 0V384.9728a35.84 35.84 0 0 1 71.68 0z",
      fill: "currentColor",
      "p-id": "4240"
    })
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);