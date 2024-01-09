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
      d: "M715.064223 960.059831H192.813928a98.872453 98.872453 0 0 1-98.764081-98.76408V287.857196a98.872453 98.872453 0 0 1 98.764081-98.782143h522.250295a98.872453 98.872453 0 0 1 98.76408 98.782143v573.438555a98.872453 98.872453 0 0 1-98.76408 98.76408zM192.813928 243.261637a44.631683 44.631683 0 0 0-44.577497 44.595559v573.438555a44.631683 44.631683 0 0 0 44.577497 44.577496h522.250295a44.631683 44.631683 0 0 0 44.577496-44.577496V287.857196a44.631683 44.631683 0 0 0-44.577496-44.595559z",
      fill: "currentColor",
      "p-id": "70658"
    }), _jsx("path", {
      d: "M850.602932 830.030092h-63.867921a27.093292 27.093292 0 0 1 0-54.186584h63.867921a44.649745 44.649745 0 0 0 44.595558-44.595559V157.809394a44.631683 44.631683 0 0 0-44.595558-44.577496H328.370698a44.631683 44.631683 0 0 0-44.595558 44.577496v58.358951a27.093292 27.093292 0 1 1-54.186584 0V157.809394a98.872453 98.872453 0 0 1 98.782142-98.76408h522.232234a98.890516 98.890516 0 0 1 98.782142 98.76408v573.438555a98.908578 98.908578 0 0 1-98.782142 98.782143z",
      fill: "currentColor",
      "p-id": "70659"
    }), _jsx("path", {
      d: "M638.787575 457.605701H257.332087a27.093292 27.093292 0 0 1 0-54.186584h381.455488a27.093292 27.093292 0 0 1 0 54.186584zM638.787575 599.863546H257.332087a27.093292 27.093292 0 0 1 0-54.186584h381.455488a27.093292 27.093292 0 0 1 0 54.186584zM450.164077 742.103328H257.332087a27.093292 27.093292 0 0 1 0-54.186583h192.83199a27.093292 27.093292 0 1 1 0 54.186583z",
      fill: "currentColor",
      "p-id": "70660"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);