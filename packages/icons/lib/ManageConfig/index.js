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
      d: "M371.646 682.714h463.361v58.711h-463.361v-58.711z",
      fill: "currentColor",
      "p-id": "7233"
    }), _jsx("path", {
      d: "M371.646 574.67h463.361v58.713h-463.361v-58.713z",
      fill: "currentColor",
      "p-id": "7234"
    }), _jsx("path", {
      d: "M940.342 144.753h-856.524c-6.697 0-12.098 5.462-12.098 12.33v717.745c0 6.812 5.398 12.329 12.098 12.329h856.524c6.694 0 12.098-5.457 12.098-12.329v-717.745c-0.001-6.81-5.406-12.33-12.098-12.33zM893.725 828.448h-763.284v-507.855l763.284 1.363v506.492z",
      fill: "currentColor",
      "p-id": "7235"
    }), _jsx("path", {
      d: "M373.009 453.001h461.998v58.716h-461.998v-58.716z",
      fill: "currentColor",
      "p-id": "7236"
    }), _jsx("path", {
      d: "M186.197 453.905h92.289v58.082h-92.289v-58.082z",
      fill: "currentColor",
      "p-id": "7237"
    }), _jsx("path", {
      d: "M186.197 576.003h92.289v58.082h-92.289v-58.082z",
      fill: "currentColor",
      "p-id": "7238"
    }), _jsx("path", {
      d: "M186.197 682.671h92.289v58.082h-92.289v-58.082z",
      fill: "currentColor",
      "p-id": "7239"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);