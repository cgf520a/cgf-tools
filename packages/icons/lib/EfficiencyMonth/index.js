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
      d: "M733.090909 744.727273h-442.181818a34.909091 34.909091 0 1 0 0 69.818182h442.181818a34.909091 34.909091 0 1 0 0-69.818182M651.636364 498.618182a34.909091 34.909091 0 0 0 34.909091-34.909091V206.824727a53.806545 53.806545 0 0 0-103.121455-21.550545l-71.144727 163.002182-71.703273-163.118546a53.829818 53.829818 0 0 0-49.268364-32.139636h-0.046545A53.806545 53.806545 0 0 0 337.454545 206.824727v256.884364a34.909091 34.909091 0 1 0 69.818182 0v-180.782546l73.634909 165.213091a35.002182 35.002182 0 0 0 64.046546-0.256l71.773091-164.375272v180.200727a34.909091 34.909091 0 0 0 34.909091 34.909091M872.727273 721.454545a34.909091 34.909091 0 0 0 34.909091-34.90909V93.090909a69.818182 69.818182 0 0 0-69.818182-69.818182H186.181818a69.818182 69.818182 0 0 0-69.818182 69.818182v837.818182a69.818182 69.818182 0 0 0 69.818182 69.818182h651.636364a69.818182 69.818182 0 0 0 69.818182-69.818182v-81.454546a34.909091 34.909091 0 1 0-69.818182 0V930.909091H186.181818V93.090909h651.636364v593.454546a34.909091 34.909091 0 0 0 34.909091 34.90909m-139.636364-116.363636h-442.181818a34.909091 34.909091 0 1 0 0 69.818182h442.181818a34.909091 34.909091 0 1 0 0-69.818182",
      fill: "currentColor",
      "p-id": "34746"
    })
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);