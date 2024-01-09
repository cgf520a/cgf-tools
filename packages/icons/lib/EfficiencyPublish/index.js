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
      d: "M918.025138 862.417905l-811.443431 0c-23.205442 0-41.972623-18.789948-41.972623-41.971927l0-671.513994c0-23.180955 18.767181-41.959647 41.972623-41.959647 23.158368 0 41.972623 18.778692 41.972623 41.959647l0 531.617803 0 97.925287 769.470807 0c23.158368 0 41.973647 18.789948 41.973647 41.970904C959.997761 843.626933 941.182483 862.417905 918.025138 862.417905M820.072302 736.50417l-83.945247 0c-23.158368 0-41.972623-18.778692-41.972623-41.959647L694.154432 400.75843c0-23.193235 18.814255-41.970904 41.972623-41.970904l83.945247 0c23.206465 0 41.973647 18.778692 41.973647 41.970904l0 293.786093C862.044925 717.725478 843.278767 736.50417 820.072302 736.50417M582.242104 736.50417l-83.945247 0c-23.181905 0-41.973647-18.778692-41.973647-41.959647L456.32321 232.874815c0-23.180955 18.791742-41.970904 41.973647-41.970904l83.945247 0c23.180882 0 41.972623 18.789948 41.972623 41.970904l0 461.669708C624.214727 717.725478 605.424009 736.50417 582.242104 736.50417M344.411906 736.50417l-83.945247 0c-23.205442 0-41.972623-18.778692-41.972623-41.959647l0-83.941807c0-23.179932 18.767181-41.970904 41.972623-41.970904l83.945247 0c23.181905 0 41.973647 18.789948 41.973647 41.970904l0 83.941807C386.384529 717.725478 367.593811 736.50417 344.411906 736.50417",
      fill: "currentColor",
      "p-id": "39530"
    })
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);