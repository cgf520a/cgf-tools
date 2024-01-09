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
      d: "M805.6832 258.17088h-284.09856V136.56064c28.71296-4.5056 50.70848-29.4912 50.70848-59.71968 0-33.3824-26.78784-60.45696-59.92448-60.45696-33.09568 0-59.88352 27.0336-59.88352 60.45696 0 30.26944 21.99552 55.296 50.66752 59.71968v121.6512H217.9072a27.77088 27.77088 0 0 0-27.648 27.89376v420.37248c0 15.44192 12.36992 27.93472 27.648 27.93472h175.67744v57.58976H333.6192a27.77088 27.77088 0 0 0-27.648 27.93472v151.552c0 15.44192 12.41088 27.93472 27.648 27.93472h355.61472a27.77088 27.77088 0 0 0 27.648-27.93472v-151.67488a27.77088 27.77088 0 0 0-27.648-27.93472h-59.92448v-57.67168h176.25088a27.77088 27.77088 0 0 0 27.648-27.93472V286.02368a27.60704 27.60704 0 0 0-27.52512-27.8528zM365.9776 556.72832c-33.09568 0-59.88352-27.07456-59.88352-60.49792 0-33.3824 26.78784-60.45696 59.88352-60.45696 33.13664 0 59.92448 27.0336 59.92448 60.45696a60.29312 60.29312 0 0 1-59.92448 60.49792z m292.864 0c-33.09568 0-59.88352-27.07456-59.88352-60.49792 0-33.3824 26.78784-60.45696 59.92448-60.45696s59.88352 27.0336 59.88352 60.45696-26.74688 60.49792-59.88352 60.49792zM20.48 496.2304c0 64.22528 51.56864 116.24448 115.17952 116.24448V379.98592C72.0896 379.98592 20.48 432.00512 20.48 496.2304z m867.86048-116.24448v232.48896c63.61088 0 115.17952-52.0192 115.17952-116.24448s-51.56864-116.24448-115.22048-116.24448z",
      fill: "currentColor",
      "p-id": "80040"
    })
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);