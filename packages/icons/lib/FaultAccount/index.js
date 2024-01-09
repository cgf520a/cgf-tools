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
      d: "M835.96858 63.659046H185.154303c-35.422337 0-64.2529 28.817252-64.2529 64.2529v767.966212c0 35.436671 28.830563 64.2529 64.2529 64.252899h650.814277c35.422337 0 64.2529-28.817252 64.252899-64.252899v-767.965188c0-35.436671-28.830563-64.253924-64.252899-64.253924z m-650.814277 56.720176h650.814277c4.153903 0 7.532724 3.378822 7.532724 7.532724v64.793511H177.620554v-64.793511c0-4.153903 3.378822-7.532724 7.533749-7.532724z m650.814277 783.032684H185.154303c-4.153903 0-7.532724-3.378822-7.532725-7.532724V249.426656h665.88075v646.452526c-0.001024 4.153903-3.379845 7.532724-7.533748 7.532724z",
      fill: "currentColor",
      "p-id": "19837"
    }), _jsx("path", {
      d: "M482.187531 318.775433H283.278353c-31.268434 0-56.720175 25.438431-56.720176 56.720175v84.748013c0 31.281744 25.451741 56.720175 56.720176 56.720175h198.908154c31.268434 0 56.720175-25.438431 56.720175-56.720175v-84.748013c0.001024-31.281744-25.451741-56.720175-56.719151-56.720175zM283.278353 460.243621v-84.748013h198.908154l0.027645 84.748013H283.278353zM759.196634 318.775433H621.467676c-15.675684 0-28.3606 12.698226-28.3606 28.3606 0 15.66135 12.684915 28.3606 28.3606 28.360599h137.728958c15.675684 0 28.3606-12.698226 28.3606-28.360599 0-15.662374-12.684915-28.3606-28.3606-28.3606zM759.196634 460.243621h-71.565489c-15.675684 0-28.359576 12.698226-28.359575 28.360599 0 15.66135 12.684915 28.359576 28.359575 28.359576h71.565489c15.675684 0 28.3606-12.698226 28.3606-28.359576 0-15.662374-12.684915-28.3606-28.3606-28.360599zM482.187531 626.94239H283.278353c-31.268434 0-56.720175 25.438431-56.720176 56.720176v84.748012c0 31.281744 25.451741 56.720175 56.720176 56.720175h198.908154c31.268434 0 56.720175-25.438431 56.720175-56.720175v-84.748012c0.001024-31.281744-25.451741-56.720175-56.719151-56.720176zM283.278353 768.410578v-84.748012h198.908154l0.027645 84.748012H283.278353zM759.196634 626.94239H621.467676c-15.675684 0-28.3606 12.698226-28.3606 28.359576 0 15.66135 12.684915 28.359576 28.3606 28.359576h137.728958c15.675684 0 28.3606-12.698226 28.3606-28.359576 0-15.66135-12.684915-28.359576-28.3606-28.359576zM759.196634 768.410578h-71.565489c-15.675684 0-28.359576 12.698226-28.359575 28.359576 0 15.66135 12.684915 28.3606 28.359575 28.360599h71.565489c15.675684 0 28.3606-12.698226 28.3606-28.360599 0-15.66135-12.684915-28.359576-28.3606-28.359576z",
      fill: "currentColor",
      "p-id": "19838"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);