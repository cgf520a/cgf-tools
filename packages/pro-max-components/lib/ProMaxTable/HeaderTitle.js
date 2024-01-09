function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import { Space, Button } from 'antd';
import { PlusOutlined, ExportOutlined, ImportOutlined } from '@ant-design/icons';
import { useMemoizedFn } from 'ahooks';
import { useOpen } from "./hooks";
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { jsxs as _jsxs } from "@emotion/react/jsx-runtime";
var HeaderTitle = function HeaderTitle(_ref) {
  var headerTitle = _ref.headerTitle,
    addButtonProps = _ref.addButtonProps,
    exportButtonProps = _ref.exportButtonProps,
    importButtonProps = _ref.importButtonProps,
    moreButton = _ref.moreButton;
  var _useOpen = useOpen(),
    setOpen = _useOpen.setOpen;
  var handleAdd = useMemoizedFn(function () {
    setOpen(true, 'add');
  });
  return _jsxs(Space, {
    children: [headerTitle, addButtonProps && _jsx(Button, _objectSpread(_objectSpread({
      type: "primary",
      icon: _jsx(PlusOutlined, {}),
      onClick: handleAdd
    }, addButtonProps), {}, {
      children: addButtonProps.children || '新增'
    })), importButtonProps && _jsx(Button, _objectSpread(_objectSpread({
      icon: _jsx(ImportOutlined, {})
    }, importButtonProps), {}, {
      children: importButtonProps.children || '导入'
    })), exportButtonProps && _jsx(Button, _objectSpread(_objectSpread({
      icon: _jsx(ExportOutlined, {})
    }, importButtonProps), {}, {
      children: exportButtonProps.children || '导出'
    })), moreButton]
  });
};
export default /*#__PURE__*/React.memo(HeaderTitle);