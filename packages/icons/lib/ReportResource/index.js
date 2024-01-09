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
      d: "M893.653333 215.68l-95.146666-93.653333L704 31.573333A36.48 36.48 0 0 0 678.613333 21.333333H157.226667a36.906667 36.906667 0 0 0-36.906667 36.693334v907.733333A36.693333 36.693333 0 0 0 156.373333 1002.666667h711.466667a36.693333 36.693333 0 0 0 36.693333-36.906667V241.92a36.693333 36.693333 0 0 0-10.88-26.24zM746.666667 174.72l75.306666 74.24h-154.453333v-149.333333zM192 929.066667V94.933333h401.92v192a36.906667 36.906667 0 0 0 36.906667 36.693334H832v605.44z",
      "p-id": "6182"
    }), _jsx("path", {
      d: "M696.106667 495.36l-139.306667 110.933333-92.586667-78.72a36.693333 36.693333 0 0 0-46.293333-1.066666l-135.253333 103.893333a36.693333 36.693333 0 0 0 22.4 65.92 37.12 37.12 0 0 0 21.333333-7.466667l111.786667-85.333333L533.333333 682.666667a36.693333 36.693333 0 0 0 46.72 0l162.986667-129.706667a36.906667 36.906667 0 0 0-45.866667-57.6z",
      "p-id": "6183"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);