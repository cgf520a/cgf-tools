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
      d: "M867.3 519.9c-4.4-4.5-10.2-6.9-16.6-6.9-6.2 0-12.2 2.6-16.6 6.9l-42.4 42.4 89.4 89.3 39.9-45c4.5-4.4 6.9-10.4 6.9-16.5 0-6.2-2.6-12.2-6.9-16.5l-53.7-53.7zM575 425.4H317c-28.3 0-51.2-22.9-51.2-51.1 0-28.3 22.9-51.1 51.2-51.1h258c28.3 0 51.2 22.9 51.2 51.1 0 28.3-22.9 51.1-51.2 51.1zM471.3 631H317c-28.3 0-51.2-22.9-51.2-51.1 0-28.3 22.9-51.1 51.2-51.1h154.3c28.3 0 51.2 22.9 51.2 51.1 0 28.3-22.9 51.1-51.2 51.1zM692.7 88.2H220.6c-68.6 0-124.3 55.6-124.3 124.2v599.7c0 68.6 55.7 124.2 124.3 124.2h171.7V825l424.8-434.2V212.5c0-68.6-55.7-124.3-124.4-124.3zM504.4 847v89.3H594l258.9-261.4-89.4-89.5L504.4 847z",
      fill: "currentColor",
      "p-id": "54495"
    })
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);