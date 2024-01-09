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
      d: "M640 320 640 64 64 64l0 960 512 0 64 0 320 0L960 896 960 704l0-64L960 448 960 320 640 320zM576 960 128 960 128 128l448 0 0 192L576 960zM896 832 768 832l0-64 128 0L896 832zM896 576 768 576l0-64 128 0L896 576zM704 448l0 192 192 0 0 64L704 704l0 192 192 0 0 64L640 960 640 384l256 0 0 64L704 448z",
      "p-id": "28279"
    }), _jsx("path", {
      d: "M192 384l320 0L512 192 192 192 192 384zM256 256l192 0 0 64L256 320 256 256z",
      "p-id": "28280"
    }), _jsx("path", {
      d: "M192 640l320 0L512 448 192 448 192 640zM256 512l192 0 0 64L256 576 256 512z",
      "p-id": "28281"
    }), _jsx("path", {
      d: "M192 896l320 0L512 704 192 704 192 896zM256 768l192 0 0 64L256 832 256 768z",
      "p-id": "28282"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);