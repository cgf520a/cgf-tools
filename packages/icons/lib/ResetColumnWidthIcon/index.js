function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import { Tooltip } from 'antd';
import Icon from '@ant-design/icons';
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { jsxs as _jsxs } from "@emotion/react/jsx-runtime";
var CustomSvg = function CustomSvg(props) {
  return _jsx(Tooltip, {
    title: "\u91CD\u7F6E\u5217\u5BBD\u5EA6",
    children: _jsx("span", {
      onClick: props === null || props === void 0 ? void 0 : props.onClick,
      children: _jsx("span", {
        role: "img",
        "aria-label": "reload",
        className: "devops-new-icon devops-new-icon-reload",
        children: _jsxs("svg", {
          viewBox: "0 0 1024 1024",
          width: "1em",
          height: "1em",
          fill: "currentColor",
          children: [_jsx("path", {
            d: "M53.76 473.6c18.944 0 35.328 14.336 37.888 32.768l0.512 5.12v458.752c0 20.992-16.896 38.4-38.4 38.4-18.944 0-35.328-14.336-37.888-32.768l-0.512-5.12V512c0-20.992 16.896-38.4 38.4-38.4z m458.24 0c18.944 0 35.328 14.336 37.888 32.768l0.512 5.12v458.752c0 20.992-16.896 38.4-38.4 38.4-18.944 0-35.328-14.336-37.888-32.768l-0.512-5.12V512c0-20.992 17.408-38.4 38.4-38.4z m458.752 0c18.944 0 35.328 14.336 37.888 32.768l0.512 5.12v458.752c0 20.992-16.896 38.4-38.4 38.4-18.944 0-35.328-14.336-37.888-32.768l-0.512-5.12V512c0-20.992 16.896-38.4 38.4-38.4zM179.2 26.624c14.848-14.848 39.424-14.848 54.272 0 13.312 13.312 14.848 34.304 3.584 49.664l-3.584 4.096-87.552 87.552h824.832c18.944 0 35.328 14.336 37.888 32.768l0.512 5.12c0 18.944-14.336 35.328-32.768 37.888l-5.12 0.512H53.76c-20.992 0-38.4-16.896-38.4-38.4 0-8.192 2.56-16.384 7.68-23.04l3.584-3.584L179.2 26.624z",
            fill: "currentColor",
            "p-id": "4649"
          }), _jsx("path", {
            d: "M970.752 1022.464s-0.512 0 0 0c-26.112 0-48.128-19.456-51.712-45.056v-1.024l-0.512-6.144V512c0-28.672 23.552-52.224 52.224-52.224 26.112 0 48.128 19.456 51.712 45.056v1.024l0.512 6.144v458.752c0 28.672-23.552 51.712-52.224 51.712z m-24.064-48.128c2.048 11.776 11.776 20.48 24.064 20.48 13.312 0 24.064-10.752 24.064-24.064v-458.24l-0.512-4.096c-2.048-11.776-11.776-20.48-24.064-20.48-13.312 0-24.064 10.752-24.064 24.064v458.24l0.512 4.096z m-434.688 48.128c-26.112 0-48.128-19.456-51.712-45.056v-1.024l-0.512-6.144V512c0-28.672 23.552-52.224 52.224-52.224 26.112 0 48.128 19.456 51.712 45.056v1.024l0.512 6.144v458.752c0 13.824-5.632 27.136-15.36 36.864-9.728 9.728-23.04 14.848-36.864 14.848z m-24.064-48.128c2.048 11.776 11.776 20.48 24.064 20.48 6.656 0 12.288-2.56 16.896-7.168 4.608-4.608 7.168-10.752 7.168-16.896v-458.24l-0.512-4.096c-2.048-11.776-11.776-20.48-24.064-20.48-13.312 0-24.064 10.752-24.064 24.064v458.24l0.512 4.096z m-434.176 48.128c-0.512 0-0.512 0 0 0-26.112 0-48.128-19.456-51.712-45.056v-1.024l-0.512-6.144V512c0-28.672 23.552-52.224 52.224-52.224 26.112 0 48.128 19.456 51.712 45.056v1.024l0.512 6.144v458.752c0 28.672-23.552 51.712-52.224 51.712z m-24.064-48.128c2.048 11.776 11.776 20.48 24.064 20.48 13.312 0 24.064-10.752 24.064-24.064v-458.24l-0.512-4.096c-2.048-11.776-11.776-20.48-24.064-20.48-13.312 0-24.064 10.752-24.064 24.064v458.24l0.512 4.096z m23.552-715.776c-13.824 0-27.136-5.632-36.864-15.36-9.728-9.728-15.36-23.04-15.36-36.864 0-11.264 3.584-22.528 10.752-31.744l0.512-0.512 4.096-4.608L169.472 16.384c9.728-9.728 23.04-15.36 36.864-15.36s27.136 5.632 36.864 15.36c18.432 18.432 20.48 47.104 5.12 67.584l-0.512 1.024-4.608 5.12-63.488 64h791.04c26.112 0 48.128 19.456 51.712 45.056v1.024l0.512 6.144c0 26.112-19.456 48.128-45.056 51.712h-1.024l-6.144 0.512H53.248z m-19.456-66.56c-3.072 4.096-4.608 9.216-4.608 14.336 0 13.312 10.752 24.064 24.064 24.064h916.48l4.096-0.512c11.776-2.048 20.48-11.776 20.48-23.552l-0.512-4.096c-2.048-11.776-11.776-20.48-24.064-20.48H111.616l111.104-111.104 3.072-3.584c6.656-9.728 5.632-22.528-2.56-30.72-4.608-4.608-10.752-7.168-16.896-7.168-6.656 0-12.288 2.56-16.896 7.168L36.864 188.928l-3.072 3.072z",
            fill: "currentColor",
            "p-id": "4650"
          }), _jsx("path", {
            d: "M790.528 386.048c13.312 13.312 34.304 14.848 49.664 3.584l4.096-3.584 153.088-153.088c14.848-14.848 14.848-38.912 0-54.272-5.632-5.632-13.312-9.728-21.504-10.752l-5.12-0.512H53.76C32.768 167.424 15.36 184.32 15.36 205.824c0 18.944 14.336 35.328 32.768 37.888l5.12 0.512h824.832l-87.552 87.552c-13.312 13.312-14.848 34.304-3.584 49.664l3.584 4.608z",
            fill: "currentColor",
            "p-id": "4651"
          }), _jsx("path", {
            d: "M817.664 411.648c-13.312 0-26.624-5.12-36.864-15.36l-0.512-0.512-4.608-5.12c-15.36-20.992-13.312-49.664 5.12-68.096l63.488-63.488H52.736l-6.144-0.512c-25.6-3.584-45.056-25.6-45.056-51.712 0-13.824 5.632-27.136 15.36-36.864 9.728-9.728 23.04-15.36 36.864-15.36h917.504l6.656 0.512c11.264 1.536 21.504 6.656 29.696 14.848 9.728 9.728 15.36 23.04 15.36 36.864s-5.632 27.136-15.36 36.864l-153.6 153.6-5.12 4.608c-9.728 6.144-20.48 9.728-31.232 9.728z m-16.896-35.328c8.192 8.192 21.504 9.216 30.72 2.56l3.584-3.072 152.576-152.576c4.608-4.608 7.168-10.752 7.168-16.896 0-6.656-2.56-12.288-7.168-16.896-3.584-3.584-8.192-6.144-13.312-6.656l-4.096-0.512h-916.48c-6.656 0-12.288 2.56-16.896 7.168s-7.68 10.24-7.68 16.896c0 11.776 8.704 22.016 20.48 24.064l4.096 0.512h858.112l-111.616 111.616c-8.192 8.192-9.216 21.504-2.56 31.232l3.072 2.56z",
            fill: "currentColor",
            "p-id": "4652"
          })]
        })
      })
    })
  });
};
var CustomIcon = function CustomIcon(props) {
  return _jsx(Icon, _objectSpread({
    component: CustomSvg
  }, props));
};
export default /*#__PURE__*/React.memo(CustomIcon);