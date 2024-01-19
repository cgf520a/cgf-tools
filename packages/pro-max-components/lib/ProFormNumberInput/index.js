function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["onChange", "value"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { Input } from 'antd';
import { createField } from '@ant-design/pro-form/es/BaseForm';
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
export var NumberInput = /*#__PURE__*/React.memo(function (_ref) {
  var onChange = _ref.onChange,
    value = _ref.value,
    others = _objectWithoutProperties(_ref, _excluded);
  var handleChange = function handleChange(e) {
    var v = e.target.value;
    var _v = v ? v === null || v === void 0 ? void 0 : v.replace(/[^\d]/g, '') : undefined;
    if (_v !== value) {
      onChange === null || onChange === void 0 || onChange(_v);
    }
  };
  return _jsx(Input, _objectSpread(_objectSpread({}, others), {}, {
    placeholder: others.placeholder || '请输入',
    onChange: handleChange,
    value: value
  }));
});
var BaseProFormNumberInput = function BaseProFormNumberInput(_ref2) {
  var placeholder = _ref2.placeholder,
    fieldProps = _ref2.fieldProps;
  return _jsx(NumberInput, _objectSpread({
    placeholder: placeholder
  }, fieldProps));
};
var ProFormNumberInput = createField(BaseProFormNumberInput);
export default /*#__PURE__*/React.memo(ProFormNumberInput);