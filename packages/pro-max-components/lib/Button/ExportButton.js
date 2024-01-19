function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import { Button } from 'antd';
import { ExportOutlined } from '@ant-design/icons';
import { useMemoizedFn } from 'ahooks';
import axios from 'axios';
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
var ExportButton = function ExportButton(_ref) {
  var buttonProps = _ref.buttonProps,
    _ref$text = _ref.text,
    text = _ref$text === void 0 ? '导出' : _ref$text,
    onExport = _ref.onExport,
    _ref$exportMode = _ref.exportMode,
    exportMode = _ref$exportMode === void 0 ? 'window' : _ref$exportMode,
    exportParams = _ref.exportParams,
    exportUrl = _ref.exportUrl,
    _ref$method = _ref.method,
    method = _ref$method === void 0 ? 'post' : _ref$method,
    _ref$fileName = _ref.fileName,
    fileName = _ref$fileName === void 0 ? '导出数据.xlsx' : _ref$fileName;
  var handleClick = useMemoizedFn(function () {
    if (exportUrl) {
      if (exportMode === 'blob') {
        axios(exportUrl, {
          responseType: 'blob',
          method: method,
          params: exportParams === false ? undefined : exportParams
        }).then(function (res) {
          var blob = new Blob([res.data]);
          var urlObject = window.URL || window.webkitURL || window;
          var downloadElement = document.createElement('a');
          var href = urlObject.createObjectURL(blob); //创建下载的链接
          downloadElement.href = href;
          downloadElement.download = fileName; //下载后文件名
          document.body.appendChild(downloadElement);
          downloadElement.click(); //点击下载
          document.body.removeChild(downloadElement); //下载完成移除元素
          urlObject.revokeObjectURL(href); //释放掉blob对象
        });
      } else if (exportMode === 'window') {
        window.open(exportUrl);
      }
    }
    onExport === null || onExport === void 0 || onExport(exportParams === false ? undefined : exportParams);
  });
  return _jsx(Button, _objectSpread(_objectSpread({
    icon: _jsx(ExportOutlined, {}),
    onClick: handleClick
  }, buttonProps), {}, {
    children: text
  }));
};
export default /*#__PURE__*/React.memo(ExportButton);