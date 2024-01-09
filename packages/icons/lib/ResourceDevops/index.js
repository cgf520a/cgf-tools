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
      d: "M261.993311 722.622074m-25.685619 0a25.685619 25.685619 0 1 0 51.371238 0 25.685619 25.685619 0 1 0-51.371238 0Z",
      fill: "currentColor",
      "p-id": "55700"
    }), _jsx("path", {
      d: "M996.602007 0H25.685619C11.986622 0 0 11.986622 0 25.685619v972.628762c0 13.698997 11.986622 25.685619 25.685619 25.685619h972.628762c13.698997 0 25.685619-11.986622 25.685619-25.685619V25.685619C1022.287625 11.986622 1010.301003 0 996.602007 0z m-125.003345 767.143813l-106.167224 99.317725c-8.561873 8.561873-23.973244 6.849498-34.247492-3.424749l-190.073578-205.48495c-8.561873-10.274247-10.274247-25.685619 0-34.247491l10.274247-10.274248c8.561873-8.561873 8.561873-23.973244 0-34.247491l-23.973244-25.685619-260.280936 280.829431c-10.274247 10.274247-25.685619 10.274247-35.959866 0l-80.481606-87.331103c-10.274247-10.274247-8.561873-25.685619 3.424749-35.959866l297.953178-238.020067-68.494984-73.632107c-8.561873-10.274247-23.973244-10.274247-32.535117-1.712375-10.274247 10.274247-27.397993 6.849498-35.959866-6.849498l-113.016722-178.086957c-6.849498-10.274247-5.137124-22.26087 3.424749-30.822742l27.397993-25.685619c8.561873-6.849498 20.548495-8.561873 30.822743 0l169.525083 126.715719c11.986622 8.561873 13.698997 25.685619 3.424749 35.959866-8.561873 8.561873-8.561873 22.26087 0 32.535117l71.919733 78.769231 87.331104-70.207358c8.561873-6.849498 11.986622-17.123746 8.561872-25.685619-17.123746-49.658863-3.424749-106.167224 37.672241-143.839464 35.959866-32.535117 82.19398-42.809365 126.715719-32.535117 18.83612 5.137124 23.973244 27.397993 10.274248 41.09699l-56.508361 51.371237c-10.274247 8.561873-10.274247 23.973244-1.712375 34.247492l17.123746 18.83612c8.561873 10.274247 23.973244 10.274247 34.247491 1.712375l56.508362-51.371238c13.698997-13.698997 37.672241-6.849498 41.09699 11.986622 6.849498 42.809365-6.849498 90.755853-42.809365 123.29097-41.09699 37.672241-95.892977 46.234114-143.839465 27.397993-8.561873-3.424749-18.83612 0-25.685619 6.849499l-77.056856 82.19398 27.397994 29.110368c8.561873 10.274247 23.973244 11.986622 34.247491 3.424749l10.274248-10.274248c8.561873-8.561873 23.973244-6.849498 34.247491 3.424749l190.073579 205.48495c3.424749 6.849498 3.424749 22.26087-5.137124 30.822743z",
      fill: "currentColor",
      "p-id": "55701"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);