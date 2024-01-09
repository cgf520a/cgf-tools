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
      d: "M423.936 341.504v-23.04l65.536-69.12c9.728-11.264 9.728-28.16 0-38.912-4.608-5.12-11.264-8.192-18.432-8.192s-13.824 3.072-18.432 8.192L397.312 268.288 342.016 209.92c-4.608-5.12-11.264-7.68-18.432-7.68s-13.312 3.072-18.432 7.68c-9.728 11.264-9.728 28.16 0 38.912l65.024 69.12v23.04H317.44c-14.848 0-26.624 11.776-26.624 26.624 0 14.848 11.776 26.624 26.624 26.624h53.248v66.56c0 14.336 11.776 26.624 26.624 26.624 14.848 0 26.624-11.776 26.624-26.624V394.24h53.248c14.848 0 26.624-11.776 26.624-26.624 0-14.848-11.776-26.624-26.624-26.624l-53.248 0.512z",
      fill: "#FFBB12",
      "p-id": "11302"
    }), _jsx("path", {
      d: "M727.552 386.048h-148.48c-11.264 0-20.992-12.8-20.992-28.16 0-15.872 9.216-28.16 20.992-28.16h148.48c11.264 0 20.992 12.8 20.992 28.16 0 15.872-9.216 28.16-20.992 28.16zM727.552 258.56h-148.48c-11.264 0-20.992-12.8-20.992-28.16 0-15.872 9.216-28.16 20.992-28.16h148.48c11.264 0 20.992 12.8 20.992 28.16s-9.216 28.16-20.992 28.16z",
      fill: "currentColor",
      "p-id": "11303"
    }), _jsx("path", {
      d: "M837.12 101.888c-18.944-18.944-44.544-29.696-71.68-29.696H260.096C203.776 72.192 158.72 117.76 158.72 173.568v607.232c0 26.624 10.752 52.736 29.696 71.68 18.944 18.944 44.544 29.696 71.68 29.696h505.856c26.624 0 52.736-10.752 71.68-29.696 18.944-18.944 29.696-44.544 29.696-71.68V173.568c-0.512-27.136-10.752-52.736-30.208-71.68z m-20.48 678.912c0 28.16-22.528 50.688-50.688 50.688H260.096c-28.16 0-50.688-22.528-50.688-50.688V173.568c0-13.312 5.12-26.112 14.848-35.84 9.728-9.728 22.528-14.848 35.84-14.848h505.856c28.16 0 50.688 22.528 50.688 50.688v607.232z",
      fill: "currentColor",
      "p-id": "11304"
    }), _jsx("path", {
      d: "M727.552 506.88h-148.48c-11.264 0-20.992-12.8-20.992-28.16 0-15.872 9.216-28.16 20.992-28.16h148.48c11.264 0 20.992 12.8 20.992 28.16s-9.216 28.16-20.992 28.16zM724.48 637.44h-419.84c-13.312 0-24.064-12.8-24.064-28.16 0-15.872 10.752-28.16 24.064-28.16h419.84c13.312 0 24.064 12.8 24.064 28.16s-10.752 28.16-24.064 28.16zM724.48 762.88h-419.84c-13.312 0-24.064-12.8-24.064-28.16 0-15.872 10.752-28.16 24.064-28.16h419.84c13.312 0 24.064 12.8 24.064 28.16 0 15.872-10.752 28.16-24.064 28.16z",
      fill: "currentColor",
      "p-id": "11305"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);