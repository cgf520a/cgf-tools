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
      d: "M1024.25175 0l-209.92 23.04L883.45175 92.16 655.61175 370.688 419.06775 152.064c-15.872-14.848-40.96-14.848-57.344-0.512L14.07575 465.408C-3.33225 481.28-4.86825 508.416 11.00375 525.824c8.192 9.216 19.968 13.824 31.744 13.824 10.24 0 20.48-3.584 28.672-10.752l318.464-287.744 241.152 222.72c8.704 8.192 20.48 11.776 31.744 11.264 11.776-1.024 22.528-6.656 30.208-15.36l250.88-306.688 57.344 57.344L1024.25175 0z m0 0M133.37175 1024H30.97175c-16.896 0-30.72-13.824-30.72-30.72v-348.16c0-16.896 13.824-30.72 30.72-30.72h102.4c16.896 0 30.72 13.824 30.72 30.72v348.16c0 16.896-13.824 30.72-30.72 30.72z",
      "p-id": "39219"
    }), _jsx("path", {
      d: "M420.09175 1024H317.69175c-16.896 0-30.72-13.824-30.72-30.72V440.32c0-16.896 13.824-30.72 30.72-30.72h102.4c16.896 0 30.72 13.824 30.72 30.72v552.96c0 16.896-13.824 30.72-30.72 30.72zM706.81175 1024h-102.4c-16.896 0-30.72-13.824-30.72-30.72v-399.36c0-16.896 13.824-30.72 30.72-30.72h102.4c16.896 0 30.72 13.824 30.72 30.72v399.36c0 16.896-13.824 30.72-30.72 30.72zM993.53175 1024h-102.4c-16.896 0-30.72-13.824-30.72-30.72V337.92c0-16.896 13.824-30.72 30.72-30.72h102.4c16.896 0 30.72 13.824 30.72 30.72v655.36c0 16.896-13.824 30.72-30.72 30.72z",
      "p-id": "39220"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);