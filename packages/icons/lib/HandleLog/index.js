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
      d: "M750 147v347H924V147C924 99.224 884.784 60 837 60c-47.792 0-87 39.216-87 87zM322.072 298.452a29.996 29.996 0 0 1 0-42.416 30 30 0 0 1 42.436 0l16.44 16.44 53.112-53.104c-36.96-28.588-89.424-25.18-122.436 7.824-36.264 36.268-36.264 95.068 0 131.34 36.264 36.264 95.068 36.264 131.332 0a92.88 92.88 0 0 0 24.548-87.776l-65.34 65.352a30.016 30.016 0 0 1-42.428 0l-37.664-37.66z m154.62-121.716l37.664-37.672a30.004 30.004 0 0 1 42.424 0 30.012 30.012 0 0 1 0 42.424L513.944 224.32c29.688 59.052 17.804 130.276-28.56 176.636-59.708 59.708-156.476 59.708-216.184 0-59.696-59.696-59.696-156.476 0-216.176 56.456-56.456 146.86-59.984 207.492-8.04zM190 804a30 30 0 1 0 0 60 30.004 30.004 0 0 0 0-60z m120 60a29.996 29.996 0 0 1-30-30c0-16.568 13.42-30 30-30H600a30 30 0 0 1 0 60H310z m-120-179.996a30 30 0 0 0 0 60 30 30 0 0 0 0-60z m120 60a29.996 29.996 0 0 1-30-30c0-16.576 13.42-30 30-30H600a30 30 0 0 1 0 60H310z m440-190.008V994a30 30 0 0 1-30 30H70a29.992 29.992 0 0 1-30-30V144C40 64.652 104.64 0 184 0h653C917.908 0 984 66.096 984 147V524a30 30 0 0 1-30 30h-204zM718.66 60H184c-46.232 0-84 37.776-84 84v820h590V147c0-32.496 10.668-62.612 28.66-87zM190 564a30 30 0 1 0 0 60 30.004 30.004 0 0 0 0-60z m120 60H600a30 30 0 0 0 0-60H310a29.996 29.996 0 0 0-30 30c0 16.572 13.42 30 30 30z",
      fill: "currentColor",
      "p-id": "5097"
    })
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);