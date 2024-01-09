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
      d: "M681.283276 298.812287c-87.372014 0-152.901024-36.696246-152.901023-85.406144s65.52901-85.406143 152.901023-85.406143 152.901024 36.696246 152.901024 85.406143-65.74744 85.406143-152.901024 85.406144z m0-127.12628c-65.52901 0-109.215017 25.119454-109.215017 41.720136s43.686007 41.720137 109.215017 41.720137 109.215017-25.119454 109.215018-41.720137-43.686007-41.720137-109.215018-41.720136z",
      fill: "currentColor",
      "p-id": "10540"
    }), _jsx("path", {
      d: "M681.283276 374.170648c-87.372014 0-152.901024-36.696246-152.901023-85.406143a21.843003 21.843003 0 0 1 43.686006 0c0 16.600683 43.686007 41.720137 109.215017 41.720137s109.215017-25.119454 109.215018-41.720137a21.843003 21.843003 0 1 1 43.686006 0c0 48.709898-65.74744 85.406143-152.901024 85.406143z",
      fill: "currentColor",
      "p-id": "10541"
    }), _jsx("path", {
      d: "M681.283276 436.860068c-87.372014 0-152.901024-36.914676-152.901023-85.624573V204.013652a21.843003 21.843003 0 0 1 43.686006 0v148.095563c0 16.600683 43.686007 41.938567 109.215017 41.938567s109.215017-25.337884 109.215018-41.938567V209.911263a21.843003 21.843003 0 0 1 43.686006 0v142.197952c0 48.709898-65.74744 84.750853-152.901024 84.750853z",
      fill: "currentColor",
      "p-id": "10542"
    }), _jsx("path", {
      d: "M441.447099 209.692833c-109.215017 0-192.21843-44.996587-192.21843-104.846417S331.795222 0 441.447099 0 633.447099 44.996587 633.447099 104.846416s-82.348123 104.846416-192 104.846417z m0-166.006826c-91.959044 0-148.532423 35.604096-148.532423 61.160409s56.573379 61.16041 148.532423 61.16041S589.761092 131.05802 589.761092 104.846416 533.624573 43.686007 441.447099 43.686007z",
      fill: "currentColor",
      "p-id": "10543"
    }), _jsx("path", {
      d: "M440.573379 421.351536a361.064846 361.064846 0 0 1-167.535836-42.375427 44.996587 44.996587 0 0 1-23.808874-39.754266V104.846416a21.843003 21.843003 0 0 1 43.686007 0v234.375427a305.802048 305.802048 0 0 0 257.96587 17.692833 21.843003 21.843003 0 0 1 28.177474 12.668942 21.843003 21.843003 0 0 1-12.668942 28.177474 349.488055 349.488055 0 0 1-125.815699 23.590444z",
      fill: "currentColor",
      "p-id": "10544"
    }), _jsx("path", {
      d: "M438.389078 323.713311a323.713311 323.713311 0 0 1-165.788395-47.180888 21.843003 21.843003 0 1 1 21.843003-37.788396c132.368601 77.761092 238.744027 21.843003 243.112628 19.877133a21.843003 21.843003 0 0 1 21.843003 38.443686 267.795222 267.795222 0 0 1-121.010239 26.648465zM146.566553 764.505119a21.843003 21.843003 0 0 1-21.843004-21.843003v-162.948805a46.962457 46.962457 0 0 1 46.744028-46.962458h356.914676V417.201365a21.843003 21.843003 0 0 1 43.686006 0v159.235495H171.467577a3.276451 3.276451 0 0 0-3.058021 3.276451V742.662116a21.843003 21.843003 0 0 1-21.843003 21.843003z",
      fill: "currentColor",
      "p-id": "10545"
    }), _jsx("path", {
      d: "M939.249147 764.505119a21.843003 21.843003 0 0 1-21.843004-21.843003v-162.948805a3.276451 3.276451 0 0 0-3.27645-3.276451h-349.488055a21.843003 21.843003 0 0 1 0-43.686007h349.488055A47.180887 47.180887 0 0 1 961.09215 579.713311V742.662116a21.843003 21.843003 0 0 1-21.843003 21.843003zM244.641638 1024h-196.58703A48.491468 48.491468 0 0 1 0 975.508532v-196.58703a48.273038 48.273038 0 0 1 48.273038-48.273038h196.58703a48.273038 48.273038 0 0 1 48.273038 48.273038v196.58703a48.491468 48.491468 0 0 1-48.491468 48.491468z m-196.58703-249.228669a4.587031 4.587031 0 0 0-4.587031 4.587031v196.58703a4.805461 4.805461 0 0 0 4.587031 4.805461h196.58703a4.805461 4.805461 0 0 0 4.587031-4.805461v-196.58703a4.587031 4.587031 0 0 0-4.587031-4.587031z",
      fill: "currentColor",
      "p-id": "10546"
    }), _jsx("path", {
      d: "M1037.542662 1024h-196.587031a48.491468 48.491468 0 0 1-48.491467-48.491468v-196.58703a48.273038 48.273038 0 0 1 48.491467-48.273038h196.587031a48.273038 48.273038 0 0 1 48.273038 48.273038v196.58703a48.491468 48.491468 0 0 1-48.273038 48.491468z m-196.587031-249.228669a4.587031 4.587031 0 0 0-4.80546 4.587031v196.58703a4.805461 4.805461 0 0 0 4.80546 4.805461h196.587031a4.587031 4.587031 0 0 0 4.587031-4.805461v-196.58703a4.587031 4.587031 0 0 0-4.587031-4.587031z",
      fill: "currentColor",
      "p-id": "10547"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);