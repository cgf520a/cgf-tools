function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import { Button, Popconfirm } from 'antd';
import { useOpen, useMode, useEditRecord } from "./hooks";
import { useMemoizedFn } from 'ahooks';
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { Fragment as _Fragment } from "@emotion/react/jsx-runtime";
import { jsxs as _jsxs } from "@emotion/react/jsx-runtime";
var Action = function Action(_ref) {
  var record = _ref.record,
    editButtonProps = _ref.editButtonProps,
    deleteButtonProps = _ref.deleteButtonProps,
    moreActions = _ref.moreActions,
    hideEdit = _ref.hideEdit,
    hideDelete = _ref.hideDelete,
    renderActions = _ref.renderActions;
  var _useOpen = useOpen(),
    setOpen = _useOpen.setOpen;
  var _useMode = useMode(),
    setMode = _useMode.setMode;
  var _useEditRecord = useEditRecord(),
    setEditRecord = _useEditRecord.setEditRecord;
  var handleEdit = useMemoizedFn(function () {
    setMode('edit');
    setEditRecord(record);
    setOpen(true);
  });
  return renderActions ? renderActions(record) : _jsxs(_Fragment, {
    children: [!hideEdit && _jsx(Button, _objectSpread(_objectSpread({
      size: "small",
      type: "link",
      css: {
        color: '#00b96b'
      },
      onClick: handleEdit
    }, editButtonProps), {}, {
      children: "\u4FEE\u6539"
    })), !hideDelete && _jsx(Popconfirm, {
      title: "\u5220\u9664\u5F53\u524D\u884C",
      description: "\u4F60\u786E\u8BA4\u8981\u5220\u9664\u5F53\u524D\u884C\u5417?",
      okText: "\u786E\u8BA4",
      cancelText: "\u53D6\u6D88"
      // onConfirm={handleDelete}
      ,
      children: _jsx(Button, _objectSpread(_objectSpread({
        size: "small",
        type: "link",
        danger: true
      }, deleteButtonProps), {}, {
        children: "\u5220\u9664"
      }))
    }), typeof moreActions === 'function' ? moreActions(record) : moreActions]
  });
};
export default /*#__PURE__*/React.memo(Action);