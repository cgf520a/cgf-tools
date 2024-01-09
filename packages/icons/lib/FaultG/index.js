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
      d: "M880.184889 85.333333c24.462222 0 44.259556 19.797333 44.259555 44.259556v619.463111c0 24.462222-19.797333 44.202667-44.259555 44.202667H747.52v132.778666a44.373333 44.373333 0 0 1-44.544 44.259556H172.544a44.316444 44.316444 0 0 1-44.544-44.259556l0.113778-619.52c0-24.348444 19.911111-44.202667 44.600889-44.202666H304.924444V129.592889c0-24.462222 19.797333-44.259556 44.259556-44.259556h530.944zM446.008889 356.352c-46.648889 0-85.674667 8.078222-117.020445 24.291556a215.495111 215.495111 0 0 0-93.639111 91.022222c-21.333333 39.537778-32.028444 84.764444-32.028444 135.68 0 46.876444 9.557333 90.282667 28.672 130.161778 19.114667 39.879111 47.672889 70.542222 85.674667 91.989333s82.545778 32.142222 133.688888 32.142222c40.220444 0 79.928889-7.566222 119.125334-22.755555 34.360889-13.368889 61.553778-28.501333 81.692444-45.511112l8.135111-7.395555v-194.616889H447.715556v82.318222h112.981333v62.008889a213.048889 213.048889 0 0 1-53.475556 29.468445c-20.764444 8.135111-41.528889 12.174222-62.179555 12.174222-41.756444 0-75.548444-14.506667-101.319111-43.52-25.770667-29.013333-38.684444-72.476444-38.684445-130.503111 0-53.76 12.743111-94.321778 38.172445-121.628445 25.429333-27.306667 59.733333-40.96 102.855111-40.96 28.444444 0 52.167111 6.883556 71.111111 20.764445 16.327111 11.946667 28.16 27.534222 35.555555 46.876444l3.299556 9.955556 98.019556-18.318223c-9.784889-44.885333-31.744-80.042667-65.820445-105.472-34.133333-25.486222-81.521778-38.172444-142.222222-38.172444zM393.500444 262.257778h353.962667v442.481778h88.462222V173.852444H393.500444V262.257778z",
      fill: "currentColor",
      "p-id": "22507"
    })
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);