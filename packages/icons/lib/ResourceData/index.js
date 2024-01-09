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
      d: "M915.456 513.536c0-43.52-35.328-79.36-79.36-79.36-9.728-38.912-26.112-76.288-49.664-110.592l36.352-36.352c24.064-24.064 24.064-62.976 0-87.04-24.064-24.064-62.976-24.064-87.04 0l-36.352 36.352c-34.816-24.064-72.704-40.448-112.64-50.176 0-2.048 0.512-4.096 0.512-6.144 0-43.52-35.84-79.36-79.36-79.36s-79.36 35.84-79.36 79.36c0 2.048 0 4.096 0.512 6.144-39.424 9.728-77.824 26.112-112.64 50.176L280.064 199.68c-24.064-24.064-62.976-24.064-87.04 0-24.064 24.064-24.064 62.976 0 87.04l36.352 36.352c-23.552 34.304-39.936 71.68-49.664 110.592-43.52 0-79.36 35.84-79.36 79.36s35.328 78.848 78.336 79.36c9.216 39.936 26.112 78.848 50.176 113.664l-36.352 36.352c-24.064 24.064-24.064 62.976 0 87.04 24.064 24.064 62.976 24.064 87.04 0l36.352-36.352c34.816 24.064 72.704 40.448 112.64 50.176 3.584 40.448 37.888 72.192 78.848 72.192s75.264-31.744 78.848-72.192c39.424-9.216 77.824-26.112 112.64-50.176l36.352 36.352c24.064 24.064 62.976 24.064 87.04 0 24.064-24.064 24.064-62.976 0-87.04l-36.352-36.352c24.064-34.816 40.96-73.728 50.176-113.664 44.032-0.512 79.36-35.84 79.36-78.848zM180.736 572.416c-32.256 0-58.88-26.624-58.88-58.88S148.48 454.656 180.736 454.656s58.88 26.624 58.88 58.88-26.624 58.88-58.88 58.88z m327.68-450.56c32.256 0 58.88 26.624 58.88 58.88s-26.624 58.88-58.88 58.88-58.88-26.624-58.88-58.88 26.112-58.88 58.88-58.88z m0 773.12c-32.256 0-58.88-26.624-58.88-58.88s26.624-58.88 58.88-58.88 58.88 26.624 58.88 58.88-26.624 58.88-58.88 58.88z m0-268.8c-65.024 0-117.76-52.736-117.76-117.76s52.736-117.76 117.76-117.76 117.76 52.736 117.76 117.76-52.736 117.76-117.76 117.76z m268.8-112.64c0-32.256 26.624-58.88 58.88-58.88s58.88 26.624 58.88 58.88-26.624 58.88-58.88 58.88-58.88-26.624-58.88-58.88z",
      "p-id": "47094"
    })
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);