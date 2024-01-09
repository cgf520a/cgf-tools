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
      d: "M973.557996 586.14612v79.591925c31.643248-60.647559 49.572023-128.348277 49.572022-199.87945C1023.130018 208.754206 794.070328 0.206249 511.664135 0.206249 229.26594 0.206249 0.206249 208.754206 0.206249 465.858595c0 3.222701 0.22391 6.445403 0.22391 9.6761l183.685976-207.540363h106.67701l-158.016321 217.408387h51.339311V430.192968l109.779759-155.753233v394.728927H184.116135V586.14612H17.463295c47.588822 162.206632 188.78792 289.547315 367.835765 331.058586-11.515359 26.389365-44.925895 90.067703-100.479508 101.351156-68.828263 14.106315 186.788726 3.422621 369.155233-105.381532 140.095543-36.87314 255.401075-126.740924 318.031836-244.005668h-108.004475V586.14612H680.09226V475.726618l183.909886-207.732286h104.02208l-155.369388 217.408387h51.347308v-59.440047l109.771763-155.153474v315.336922h-0.215913z m-625.667861 22.566905a84.094111 84.094111 0 0 1-7.96479-36.265385V356.446687c0-12.898802 2.65493-24.981932 7.96479-36.265385a93.242424 93.242424 0 0 1 21.695257-29.428141c9.068346-8.252674 19.911976-14.905993 32.306981-19.736047 12.395005-4.83805 25.669655-7.261074 39.839944-7.261074h90.29961c14.154296 0 27.436943 2.423024 39.831948 7.261074 12.171095 4.830054 22.790815 11.275456 31.875155 19.336208l-98.040491 130.371461v-23.174661a15.673684 15.673684 0 0 0-5.317857-12.091127c-3.542572-3.222701-7.96479-4.830054-13.27465-4.830053-5.317857 0-9.740075 1.607352-13.282647 4.830053a15.673684 15.673684 0 0 0-5.30986 12.091127v72.538768L354.97528 620.804153a84.413982 84.413982 0 0 1-7.085145-12.091128z m285.724855-36.265385c0 12.898802-2.65493 24.981932-7.972787 36.265385a93.242424 93.242424 0 0 1-21.68726 29.428141c-9.068346 8.252674-19.911976 14.905993-32.306981 19.744043-12.395005 4.830054-25.669655 7.253077-39.839944 7.253077H441.508408c-14.154296 0-27.436943-2.423024-39.831948-7.253077-12.395005-4.83805-23.238635-11.491369-32.314978-19.75204a99.879749 99.879749 0 0 1-11.06754-12.091127l109.771763-145.677293v50.979455c0 4.83805 1.775285 8.868426 5.317857 12.091128 3.534576 3.222701 7.96479 4.830054 13.274651 4.830053 5.30986 0 9.740075-1.607352 13.27465-4.830053a15.673684 15.673684 0 0 0 5.317857-12.091128V430.992645L607.721425 294.791533c7.301058 7.452996 13.27465 15.913587 17.704865 25.389769 5.30986 11.275456 7.96479 23.366583 7.96479 36.265385v216.000953h0.22391z",
      "p-id": "84123"
    })
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);