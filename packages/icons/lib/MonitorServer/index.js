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
      d: "M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z",
      fill: "#FBD000",
      "p-id": "8822"
    }), _jsx("path", {
      d: "M949.6 848H92.8c-4.8 0-8-3.2-8-8s3.2-8 8-8h856.8c4.8 0 8 3.2 8 8s-4 8-8 8z",
      fill: "#074370",
      "p-id": "8823"
    }), _jsx("path", {
      d: "M903.2 776c0 35.2-28.8 64-64 64H203.2c-35.2 0-64-28.8-64-64V293.6c0-35.2 28.8-64 64-64h636c35.2 0 64 28.8 64 64V776z",
      fill: "#415E6D",
      "p-id": "8824"
    }), _jsx("path", {
      d: "M839.2 797.6H203.2c-35.2 0-64-28.8-64-64V776c0 35.2 28.8 64 64 64h636c35.2 0 64-28.8 64-64v-42.4c0 35.2-28.8 64-64 64z",
      fill: "#324D5B",
      "p-id": "8825"
    }), _jsx("path", {
      d: "M839.2 229.6H203.2c-35.2 0-64 28.8-64 64V728h764V293.6c0-35.2-28.8-64-64-64z",
      fill: "#EAEAEA",
      "p-id": "8826"
    }), _jsx("path", {
      d: "M901.6 736H144c-4.8 0-8-3.2-8-8s3.2-8 8-8h757.6c4.8 0 8 3.2 8 8s-4 8-8 8z",
      fill: "#074370",
      "p-id": "8827"
    }), _jsx("path", {
      d: "M816 784m-24 0a24 24 0 1 0 48 0 24 24 0 1 0-48 0Z",
      fill: "#28A5C6",
      "p-id": "8828"
    }), _jsx("path", {
      d: "M216 784m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z",
      fill: "#3AD0F9",
      "p-id": "8829"
    }), _jsx("path", {
      d: "M280 784m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z",
      fill: "#FF4848",
      "p-id": "8830"
    }), _jsx("path", {
      d: "M344 784m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z",
      fill: "#75B600",
      "p-id": "8831"
    }), _jsx("path", {
      d: "M408 784m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z",
      fill: "#FFFFFF",
      "p-id": "8832"
    }), _jsx("path", {
      d: "M904 592h-72c-4.8 0-8-3.2-8-8s4-8 8-8h71.2c4.8 0 8 3.2 8 8s-3.2 8-7.2 8zM639.2 664c-3.2 0-6.4-2.4-8-5.6L592 523.2l-14.4 63.2c-0.8 4-4 6.4-8 6.4H391.2c-4 0-7.2-2.4-8-6.4l-21.6-119.2-17.6 73.6c-0.8 4-5.6 7.2-9.6 5.6-4-0.8-7.2-5.6-5.6-9.6L355.2 424c0.8-4 4-6.4 8-6.4s7.2 3.2 8 6.4l27.2 152h166.4L584 488.8c0.8-3.2 4-8.8 8-8.8s6.4 4.8 8 8.8l38.4 132.8 40.8-224.8c0.8-4 4-6.4 8-6.4s7.2 2.4 8 6.4L732 576h76c4.8 0 8 3.2 8 8s-3.2 8-8 8H725.6c-4 0-7.2-2.4-8-6.4l-30.4-146.4-40 218.4c-0.8 3.2-4 6.4-8 6.4 0.8 0 0.8 0 0 0zM305.6 680c-4 0-7.2-2.4-8-6.4L268 536l-15.2 50.4c-0.8 3.2-4 5.6-8 5.6H146.4c-4.8 0-8-3.2-8-8s3.2-8 8-8h92.8l22.4-74.4c0.8-3.2 4.8-5.6 8-5.6 4 0 6.4 2.4 7.2 6.4l28.8 132.8 11.2-47.2c0.8-4 5.6-7.2 9.6-5.6 4 0.8 7.2 5.6 5.6 9.6l-19.2 82.4c0 3.2-4 5.6-7.2 5.6z",
      fill: "#074370",
      "p-id": "8833"
    }), _jsx("path", {
      d: "M776 304h-56c-4.8 0-8-3.2-8-8s3.2-8 8-8h56c4.8 0 8 3.2 8 8s-3.2 8-8 8zM672 304H488c-4 0-8-3.2-8-8s3.2-8 8-8h184c4 0 8 3.2 8 8s-3.2 8-8 8zM424 304H224c-4.8 0-8-3.2-8-8s4-8 8-8h200c4.8 0 8 3.2 8 8s-4 8-8 8zM711.2 344H584c-4.8 0-8-3.2-8-8s3.2-8 8-8h127.2c4.8 0 8 3.2 8 8s-3.2 8-8 8zM528 344H224c-4.8 0-8-3.2-8-8s4-8 8-8h304c4.8 0 8 3.2 8 8s-4 8-8 8z",
      fill: "#ADADAD",
      "p-id": "8834"
    }), _jsx("path", {
      d: "M840 848H200c-40 0-72-32-72-72V296c0-40 32-72 72-72h640c40 0 72 32 72 72v480c0 40-32 72-72 72zM200 240c-31.2 0-56 24.8-56 56v480c0 31.2 24.8 56 56 56h640c31.2 0 56-24.8 56-56V296c0-31.2-24.8-56-56-56H200z",
      fill: "#074370",
      "p-id": "8835"
    }), _jsx("path", {
      d: "M864 553.6c-4.8 0-8-3.2-8-8v-80c0-4.8 3.2-8 8-8s8 3.2 8 8v80c0 4.8-3.2 8-8 8zM864 425.6c-4.8 0-8-3.2-8-8V312c0-22.4-17.6-40-40-40H408c-4.8 0-8-3.2-8-8s3.2-8 8-8h408c31.2 0 56 24.8 56 56v105.6c0 4.8-3.2 8-8 8zM345.6 272H224c-4.8 0-8-3.2-8-8s3.2-8 8-8h121.6c4.8 0 8 3.2 8 8s-4 8-8 8zM64 464c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-48c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zM656 176c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z m0-48c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16zM474.4 124c0-3.2-3.2-6.4-8-7.2l-15.2-2.4c-4-0.8-8.8-4.8-8.8-8.8l-2.4-15.2c-0.8-4-4-8-7.2-8s-6.4 3.2-7.2 8l-2.4 15.2c-0.8 4-4.8 8.8-8.8 8.8l-15.2 2.4c-4 0.8-8 4-8 7.2s3.2 6.4 8 7.2l15.2 2.4c4 0.8 8.8 4.8 8.8 8.8l2.4 15.2c0.8 4 4 8 7.2 8s6.4-3.2 7.2-8l2.4-16.8c0.8-4 4.8-8 8.8-8.8l14.4-0.8c5.6-1.6 8.8-4 8.8-7.2zM502.4 928c0-3.2-3.2-6.4-8-7.2l-15.2-2.4c-4-0.8-8.8-4.8-8.8-8.8l-2.4-15.2c-0.8-4-4-8-7.2-8s-6.4 3.2-7.2 8l-2.4 15.2c-0.8 4-4.8 8.8-8.8 8.8l-15.2 2.4c-4 0.8-8 4-8 7.2s3.2 6.4 8 7.2l15.2 2.4c4 0.8 8.8 4.8 8.8 8.8l2.4 15.2c0.8 4 4 8 7.2 8s6.4-3.2 7.2-8l2.4-16.8c0.8-4 4.8-8 8.8-8.8l14.4-0.8c5.6-1.6 8.8-4 8.8-7.2z",
      fill: "#FFFFFF",
      "p-id": "8836"
    })]
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);