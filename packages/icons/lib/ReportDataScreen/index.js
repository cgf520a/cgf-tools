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
      d: "M326.492754 463.10029a113.011014 113.011014 0 0 0 83.775072-37.101449L326.492754 371.904928 242.791884 425.924638A113.011014 113.011014 0 0 0 326.492754 463.10029zM529.66029 459.241739h159.387826a18.550725 18.550725 0 0 0 0-37.101449H529.66029a18.550725 18.550725 0 0 0 0 37.101449zM439.874783 349.866667a113.307826 113.307826 0 0 0-94.757102-111.304348v101.138551L430.376812 394.833623a113.678841 113.678841 0 0 0 9.497971-44.966956zM529.66029 286.794203h263.271884a18.550725 18.550725 0 0 0 0-37.101449H529.66029a18.550725 18.550725 0 0 0 0 37.101449zM529.66029 373.017971h203.909565a18.550725 18.550725 0 0 0 0-37.101449H529.66029a18.550725 18.550725 0 0 0 0 37.101449zM308.016232 238.191304A113.307826 113.307826 0 0 0 222.608696 394.833623l85.407536-55.132753z",
      fill: "currentColor",
      "p-id": "11846"
    }), _jsx("path", {
      d: "M883.014493 7.42029H140.985507A133.565217 133.565217 0 0 0 7.42029 140.985507v742.028986a133.565217 133.565217 0 0 0 133.565217 133.565217h742.028986a133.565217 133.565217 0 0 0 133.565217-133.565217V140.985507a133.565217 133.565217 0 0 0-133.565217-133.565217zM687.118841 869.954783H339.329855a22.26087 22.26087 0 0 1-18.624927-34.504348l51.942029-79.026087h281.971014l51.942029 79.026087a22.26087 22.26087 0 0 1-19.441159 34.504348z m218.675942-207.768116a59.362319 59.362319 0 0 1-59.362319 59.362319h-667.826087a59.362319 59.362319 0 0 1-59.362319-59.362319V217.414493a59.362319 59.362319 0 0 1 59.362319-59.362319h667.826087a59.362319 59.362319 0 0 1 59.362319 59.362319z",
      fill: "currentColor",
      "p-id": "11847"
    }), _jsx("path", {
      d: "M785.586087 499.682319L530.550725 609.502609l-109.894493-55.80058a18.402319 18.402319 0 0 0-14.024348-1.113043l-153.822609 49.41913a18.550725 18.550725 0 1 0 11.353044 35.32058l146.550724-47.044638 110.859131 56.245797a18.69913 18.69913 0 0 0 15.731014 0.51942l262.975073-113.307826a18.550725 18.550725 0 0 0-14.84058-34.05913z",
      fill: "currentColor",
      "p-id": "11848"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);