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
      d: "M721.826909 705.373091l42.170182 42.170182-16.453818 16.453818-42.170182-42.170182a104.727273 104.727273 0 1 1 16.453818-16.453818z m-235.450182-8.378182l16.477091 16.477091-16.477091 16.453818-16.453818-16.453818-49.338182 49.361455-16.477091-16.453819-32.907636-32.907636-49.384727 49.361455-16.453818-16.453819L257.186909 698.181818H256V256h418.909091v232.727273h-23.272727v-209.454546H279.272727v408.110546l42.542546 42.542545 49.384727-49.361454 16.453818 16.453818 32.907637 32.907636 49.361454-49.361454 16.453818 16.453818zM512 0l442.181818 256v512L512 1024 69.818182 768V256L512 0z m0 28.276364L93.090909 270.149818v483.700364l418.909091 241.873454 418.909091-241.873454V270.149818L512 28.276364zM640 721.454545a81.454545 81.454545 0 1 0 0-162.90909 81.454545 81.454545 0 0 0 0 162.90909zM325.818182 349.090909h186.181818v23.272727h-186.181818v-23.272727z m0 69.818182h256v23.272727H325.818182v-23.272727z m0 69.818182h116.363636v23.272727h-116.363636v-23.272727z",
      "p-id": "8205"
    })
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);