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
      d: "M863.085714 351.085714c-21.942857-29.257143-51.2-51.2-80.457143-73.142857-7.314286 0-7.314286-7.314286-14.628571-7.314286 36.571429-21.942857 65.828571-58.514286 65.828571-102.4 0-65.828571-65.828571-117.028571-146.285714-117.028571-14.628571 0-36.571429 0-51.2 7.314286-7.314286 0-14.628571 7.314286-14.628571 7.314285h-14.628572c0-7.314286-7.314286-21.942857-21.942857-29.257142C563.2 14.628571 533.942857 0 512 0c-29.257143 0-51.2 14.628571-73.142857 36.571429-14.628571 7.314286-29.257143 14.628571-36.571429 29.257142h-7.314285S387.657143 58.514286 380.342857 58.514286C365.714286 51.2 351.085714 43.885714 329.142857 43.885714c-73.142857 0-146.285714 51.2-146.285714 117.028572 0 43.885714 29.257143 80.457143 65.828571 102.4 0 0-7.314286 7.314286-14.628571 7.314285-21.942857 21.942857-51.2 43.885714-73.142857 73.142858C80.457143 424.228571 29.257143 512 29.257143 614.4c0 277.942857 212.114286 409.6 475.428571 409.6h14.628572c256 0 475.428571-131.657143 475.428571-409.6-7.314286-95.085714-51.2-190.171429-131.657143-263.314286zM650.971429 636.342857c14.628571 0 29.257143 14.628571 29.257142 29.257143s-14.628571 29.257143-29.257142 29.257143H533.942857V804.571429c0 14.628571-14.628571 29.257143-29.257143 29.257142s-21.942857-14.628571-21.942857-29.257142V694.857143H365.714286c-14.628571 0-29.257143-14.628571-29.257143-29.257143s14.628571-29.257143 29.257143-29.257143h117.028571v-65.828571H365.714286c-14.628571 0-29.257143-14.628571-29.257143-29.257143S351.085714 512 365.714286 512h87.771428L358.4 416.914286c-14.628571-14.628571-14.628571-29.257143 0-36.571429 7.314286-14.628571 29.257143-14.628571 36.571429 0L512 490.057143l117.028571-117.028572c7.314286-7.314286 21.942857-7.314286 36.571429 7.314286s14.628571 29.257143 0 36.571429L570.514286 512H658.285714c14.628571 0 29.257143 14.628571 29.257143 29.257143s-14.628571 29.257143-36.571428 29.257143H533.942857v65.828571h117.028572z",
      "p-id": "36886"
    })
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);