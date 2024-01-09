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
      d: "M192 704m21.333333 0l341.333334 0q21.333333 0 21.333333 21.333333l0 85.333334q0 21.333333-21.333333 21.333333l-341.333334 0q-21.333333 0-21.333333-21.333333l0-85.333334q0-21.333333 21.333333-21.333333Z",
      fill: "currentColor",
      "p-id": "85189"
    }), _jsx("path", {
      d: "M192 192m21.333333 0l469.333334 0q21.333333 0 21.333333 21.333333l0 85.333334q0 21.333333-21.333333 21.333333l-469.333334 0q-21.333333 0-21.333333-21.333333l0-85.333334q0-21.333333 21.333333-21.333333Z",
      fill: "currentColor",
      "p-id": "85190"
    }), _jsx("path", {
      d: "M868.266667 384H219.733333a28.053333 28.053333 0 0 0-27.733333 28.48v199.04A28.053333 28.053333 0 0 0 219.733333 640h648.533334a28.053333 28.053333 0 0 0 27.733333-28.48V412.48A28.053333 28.053333 0 0 0 868.266667 384z m-13.866667 179.2L821.333333 597.333333l-50.133333-51.2-49.92 51.2-33.28-34.133333 49.92-51.2-49.92-51.2 33.28-34.133333 49.92 51.2L821.333333 426.666667l33.28 34.133333-50.133333 51.2z",
      fill: "currentColor",
      "p-id": "85191"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);