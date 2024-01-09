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
      d: "M960.5632 585.9328c-4.6848 0-9.3952-1.6896-13.0816-5.1456L513.92 176.64 80.3584 580.7872c-7.7568 7.2448-19.8912 6.8096-27.136-0.9472-7.2192-7.7824-6.8096-19.9168 0.9728-27.1616L500.8128 136.3456c7.3728-6.8608 18.7904-6.8608 26.1632 0l446.6688 416.3584c7.7568 7.2192 8.192 19.3792 0.9728 27.1616C970.8288 583.8848 965.7088 585.9328 960.5632 585.9328z",
      fill: "currentColor",
      "p-id": "1571"
    }), _jsx("path", {
      d: "M217.9584 599.7824",
      fill: "currentColor",
      "p-id": "1572"
    }), _jsx("path", {
      d: "M877.696 660.4288l-350.6944-326.912c-7.3728-6.8608-18.7904-6.8608-26.1632 0L150.144 660.4288c-3.8912 3.6352-6.1184 8.7296-6.1184 14.0544l0 144.256c0 40.7808 33.1776 73.9584 73.9584 73.9584l591.8976 0c40.7808 0 73.9328-33.1776 73.9328-73.9584l0-144.256C883.7888 669.1584 881.5872 664.064 877.696 660.4288zM623.9488 561.3568l-84.4288 99.8656c0.0512 0.6656 0.256 1.3312 0.2304 1.9968l50.56 0c10.5984 0 19.2 8.6016 19.2 19.2s-8.6016 19.2-19.2 19.2l-55.2704 0 0 25.1392 55.2704 0c10.5984 0 19.2 8.6016 19.2 19.2s-8.6016 19.2-19.2 19.2l-55.2704 0 0 47.0528c0 10.5984-8.6016 19.2-19.2 19.2s-19.2-8.6016-19.2-19.2l0-47.0528-55.296 0c-10.5984 0-19.2-8.6016-19.2-19.2s8.6016-19.2 19.2-19.2l55.296 0 0-25.1392-55.296 0c-10.5984 0-19.2-8.6016-19.2-19.2s8.6016-19.2 19.2-19.2l52.7616 0c-0.0256-0.7168 0.1792-1.3824 0.2304-2.0992l-84.6848-99.7376c-6.8608-8.064-5.8624-20.1984 2.2016-27.0592 8.0896-6.912 20.224-5.8624 27.0592 2.2016l73.3184 86.3488c1.2032-0.2304 2.304-0.7168 3.584-0.7168 1.9456 0 3.712 0.5632 5.4784 1.1008l73.3184-86.7072c6.8352-8.1152 18.944-9.1136 27.0592-2.2528C629.7856 541.1328 630.8096 553.2672 623.9488 561.3568z",
      fill: "currentColor",
      "p-id": "1573"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);