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
      d: "M849.237 136.533c48.26 0 87.382 39.193 87.382 87.54v456.85c0 48.346-39.122 87.54-87.382 87.54l-307.2-0.002v61.553h247.126v60.183H234.837v-60.183h247.126V768.46l-307.2 0.001c-48.26 0-87.382-39.193-87.382-87.54V224.073c0-48.347 39.122-87.54 87.382-87.54h674.474z m0 60.184H174.763c-15.081 0-27.307 12.248-27.307 27.356v456.85c0 15.108 12.226 27.355 27.307 27.355h674.474c15.081 0 27.307-12.247 27.307-27.356V224.073c0-15.108-12.226-27.356-27.307-27.356zM716.8 349.525l42.48 42.557L645.875 505.69c-37.324 37.392-97.837 37.392-135.16 0l-52.727-52.821c-13.863-13.889-36.34-13.889-50.203 0l-103.163 103.35-42.479-42.556 103.163-103.35c37.324-37.392 97.837-37.392 135.161 0l52.726 52.821c13.863 13.888 36.34 13.888 50.203 0L716.8 349.525z",
      fill: "currentColor",
      "p-id": "4884"
    })
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);