function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React from 'react';
import { useMemoizedFn } from 'ahooks';
import resso from '@/pro-max-components/resso';
export var ProMaxContext = /*#__PURE__*/React.createContext(undefined);
export var useProMaxTableState = function useProMaxTableState() {
  var editFormRef = React.useRef();
  var proMaxTableRef = React.useRef();
  // 用于设置表单的下拉选项
  var optionsSetStoreRef = React.useRef({});
  return resso({
    mode: 'add',
    open: false,
    formOptions: {},
    editFormRef: editFormRef,
    proMaxTableRef: proMaxTableRef,
    optionsSetStoreRef: optionsSetStoreRef,
    editRecord: undefined
  });
};

/**
 * 只要是放到表格或表格容器中去的组件，这些hooks都可以用
 */

export var useEditFormRef = function useEditFormRef() {
  var store = React.useContext(ProMaxContext);
  var _ref = store || {},
    editFormRef = _ref.editFormRef;
  return editFormRef;
};
export var useProMaxTableRef = function useProMaxTableRef() {
  var store = React.useContext(ProMaxContext);
  var _ref2 = store || {},
    proMaxTableRef = _ref2.proMaxTableRef;
  return proMaxTableRef;
};
export var useOptionsSetStoreRef = function useOptionsSetStoreRef() {
  var _ref3 = React.useContext(ProMaxContext) || {},
    optionsSetStoreRef = _ref3.optionsSetStoreRef;
  return optionsSetStoreRef;
};
export var useMode = function useMode() {
  var store = React.useContext(ProMaxContext);
  var _ref4 = store || {},
    mode = _ref4.mode;
  var setMode = useMemoizedFn(function (mode) {
    if (store) {
      store.mode = mode;
    }
  });
  return {
    mode: mode,
    setMode: setMode
  };
};
export var useOpen = function useOpen() {
  var store = React.useContext(ProMaxContext);
  var _ref5 = store || {},
    open = _ref5.open;
  var setOpen = useMemoizedFn(function (bool, mode) {
    if (store) {
      store.open = bool;
      if (mode) {
        store.mode = mode;
      }
    }
  });
  return {
    open: open,
    setOpen: setOpen
  };
};
export var useFormOptions = function useFormOptions() {
  var store = React.useContext(ProMaxContext);
  var _ref6 = store || {},
    formOptions = _ref6.formOptions;
  var setFormOptions = useMemoizedFn(function (key, options) {
    var arr = ((formOptions === null || formOptions === void 0 ? void 0 : formOptions[key]) || []).concat(options || []);
    // 数组去重，值是对象的时候
    var o = Array.from(new Set(arr.map(function (_) {
      return JSON.stringify(_);
    }))).map(function (_) {
      return JSON.parse(_);
    });
    if (store) {
      store('formOptions', function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, key, o));
      });
    }
  });
  return {
    formOptions: formOptions,
    setFormOptions: setFormOptions
  };
};
export var useEditRecord = function useEditRecord() {
  var store = React.useContext(ProMaxContext);
  var _ref7 = store || {},
    editRecord = _ref7.editRecord;
  var setEditRecord = useMemoizedFn(function (record) {
    if (store) {
      store.editRecord = record;
    }
  });
  return {
    editRecord: editRecord,
    setEditRecord: setEditRecord
  };
};