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
      d: "M665.6 640l21.333333 8.533333 21.333334-38.4-17.066667-17.066666c8.533333-17.066667 12.8-38.4 12.8-59.733334s-4.266667-42.666667-12.8-59.733333l17.066667-17.066667-21.333334-38.4-21.333333 8.533334c-25.6-34.133333-64-55.466667-106.666667-59.733334L554.666667 341.333333h-42.666667l-4.266667 21.333334c-42.666667 8.533333-81.066667 29.866667-106.666666 59.733333l-21.333334-4.266667-21.333333 38.4 17.066667 17.066667c-8.533333 17.066667-12.8 38.4-12.8 59.733333s4.266667 42.666667 12.8 59.733334l-17.066667 17.066666 21.333333 38.4 21.333334-8.533333c25.6 34.133333 64 55.466667 106.666666 59.733333l4.266667 25.6h42.666667l4.266666-21.333333c42.666667-8.533333 81.066667-29.866667 106.666667-64z m-200.533333-307.2L469.333333 298.666667h128l4.266667 34.133333c25.6 8.533333 51.2 21.333333 68.266667 38.4l29.866666-12.8L768 469.333333l-25.6 21.333334c4.266667 12.8 4.266667 25.6 4.266667 38.4s0 25.6-4.266667 38.4l25.6 29.866666-64 110.933334-29.866667-12.8c-21.333333 17.066667-42.666667 29.866667-68.266666 38.4l-8.533334 34.133333h-128l-4.266666-34.133333c-25.6-8.533333-51.2-21.333333-68.266667-38.4l-29.866667 12.8L298.666667 597.333333l25.6-21.333333c-4.266667-12.8-4.266667-25.6-4.266667-38.4s0-25.6 4.266667-38.4L298.666667 469.333333l64-110.933333 29.866666 12.8c21.333333-17.066667 46.933333-29.866667 72.533334-38.4z m418.133333 337.066667l-42.666667-25.6v-209.066667l42.666667-25.6v260.266667z m-64 106.666666l-221.866667 128V853.333333l179.2-102.4 42.666667 25.6z m-640-366.933333l42.666667 25.6v209.066667l-42.666667 25.6V409.6zM247.466667 298.666667L469.333333 170.666667v51.2L290.133333 324.266667l-42.666666-25.6z m571.733333 0l-42.666667 25.6L597.333333 221.866667V170.666667l221.866667 128zM247.466667 776.533333l42.666666-25.6L469.333333 853.333333v51.2l-221.866666-128z m285.866666-541.866666c-25.6 0-42.666667-17.066667-42.666666-42.666667s17.066667-42.666667 42.666666-42.666667 42.666667 17.066667 42.666667 42.666667-17.066667 42.666667-42.666667 42.666667z m0 682.666666c-25.6 0-42.666667-17.066667-42.666666-42.666666s17.066667-42.666667 42.666666-42.666667 42.666667 17.066667 42.666667 42.666667-17.066667 42.666667-42.666667 42.666666z m260.266667-529.066666c-12.8-21.333333-4.266667-46.933333 17.066667-59.733334 21.333333-12.8 46.933333-4.266667 59.733333 17.066667 12.8 21.333333 4.266667 46.933333-17.066667 59.733333s-46.933333 4.266667-59.733333-17.066666z m-588.8 341.333333c-12.8-21.333333-4.266667-46.933333 17.066667-59.733333 21.333333-12.8 46.933333-4.266667 59.733333 17.066666 12.8 21.333333 4.266667 46.933333-17.066667 59.733334-25.6 12.8-51.2 4.266667-59.733333-17.066667z m72.533333-341.333333c-12.8 21.333333-38.4 29.866667-59.733333 17.066666s-25.6-38.4-12.8-59.733333c8.533333-21.333333 34.133333-25.6 55.466667-17.066667 21.333333 12.8 29.866667 38.4 17.066666 59.733334z m588.8 341.333333c-12.8 21.333333-38.4 25.6-59.733333 17.066667-21.333333-12.8-25.6-38.4-17.066667-59.733334s38.4-25.6 59.733334-17.066666c25.6 12.8 29.866667 38.4 17.066666 59.733333z m-332.8-110.933333c-46.933333 0-85.333333-38.4-85.333333-85.333334s38.4-85.333333 85.333333-85.333333 85.333333 38.4 85.333334 85.333333-38.4 85.333333-85.333334 85.333334z m0-42.666667c25.6 0 42.666667-17.066667 42.666667-42.666667s-17.066667-42.666667-42.666667-42.666666-42.666667 17.066667-42.666666 42.666666 21.333333 42.666667 42.666666 42.666667z",
      fill: "currentColor"
    })
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);