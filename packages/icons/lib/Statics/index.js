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
      d: "M98.303398 81.522712 64.303027 81.522712 64.303027 942.477288 959.69595 942.477288 959.69595 909.317051 98.909196 907.60199ZM546.437835 115.961058c0-19.035542-15.403828-34.438347-34.438347-34.438347L408.685471 81.522712c-19.001773 0-34.438347 15.402805-34.438347 34.438347l0 723.202213 172.191734 0L546.438858 115.961058zM339.808778 322.590116c0-19.018146-15.403828-34.438347-34.438347-34.438347L202.05539 288.151769c-19.000749 0-34.437323 15.420201-34.437323 34.438347l0 516.573155 172.191734 0L339.809801 322.590116zM753.066893 529.219173c0-19.035542-15.403828-34.438347-34.438347-34.438347L615.314529 494.780827c-19.001773 0-34.438347 15.402805-34.438347 34.438347l0 309.944098 172.191734 0L753.067916 529.219173zM925.258627 701.409884 821.943586 701.409884c-19.000749 0-34.437323 15.403828-34.437323 34.438347l0 103.31504 172.190711 0L959.696973 735.848231C959.69595 716.813712 944.293145 701.409884 925.258627 701.409884z",
      fill: "currentColor",
      "p-id": "6187"
    })
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);