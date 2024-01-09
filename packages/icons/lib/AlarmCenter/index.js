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
      d: "M683.4 836.9c0 65.7-74.5 118.9-166.5 118.9s-166.5-53.2-166.5-118.9h333zM509.9 138.4h4.6c170.5 0 308.8 125.4 308.8 280.1v344H201.1V418.3c0-154.6 138.2-280.1 308.8-280.1v0.2z m253.7 348c-0.2-149.5-110.7-270.7-247.1-270.7h-4.2c-14.8 0.2-26.6 13.2-26.4 29 0 15.9 11.9 29 26.4 29h4.3c107.3 0 194.1 95.4 194.3 212.8 0 10.3 5.1 19.8 13.2 25 8.2 5.2 18.3 5.2 26.5 0 8-5.3 13.1-14.8 13-25.1zM163.7 778.8h690.7c3.9 0 7.5 1.7 10.2 4.7l15.4 17.6c3.4 3.8 4.3 9.5 2.3 14.3-1.9 4.8-6.4 8-11.3 8H156.9c-5.6 0-10.6-3.6-12.8-9.1-2.2-5.5-1.2-11.8 2.6-16.2l17-19.3z m454.1-603.7v0.4c0.1 6-221.5 5.8-221.4-0.4 4-62.5 52.4-111.1 110.7-111.1 58.4 0 106.8 48.6 110.7 111.1z m0 0",
      "p-id": "4062"
    })
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);