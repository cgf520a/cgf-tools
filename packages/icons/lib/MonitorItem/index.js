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
      d: "M169.330659 301.751766h685.294025c83.331182 0 150.875883-67.544701 150.875883-150.875883S937.978195 0 854.647013 0H169.330659a150.875883 150.875883 0 1 0 0 301.751766z m0-210.136589a59.126734 59.126734 0 1 1-0.022329 118.231138 59.126734 59.126734 0 0 1 0.022329-118.231138zM854.647013 722.248234H169.330659a150.853554 150.853554 0 0 0-150.853555 150.898212 150.853554 150.853554 0 0 0 150.853555 150.853554h685.294025a150.853554 150.853554 0 0 0 150.875883-150.853554 150.831225 150.831225 0 0 0-150.853554-150.898212zM169.330659 931.87126a59.126734 59.126734 0 1 1 0-118.18648 59.126734 59.126734 0 0 1 0 118.18648zM854.647013 362.084256H169.330659a150.853554 150.853554 0 0 0-150.853555 150.875884 150.875883 150.875883 0 0 0 150.853555 150.898212h685.294025a150.875883 150.875883 0 0 0 150.875883-150.898212 150.831225 150.831225 0 0 0-150.853554-150.875884zM169.330659 569.85399a59.126734 59.126734 0 1 1 0-118.18648 59.126734 59.126734 0 0 1 0 118.18648z",
      "p-id": "5757"
    })
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);