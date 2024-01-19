function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["valueType"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useMemo } from 'react';
import { ProField, ProProvider } from '@ant-design/pro-components';
import { ProMaxProviderContext } from "../ProMaxProvider";
import { valueTypeMap as builtInValueTypeMap } from "../share";
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
function ProMaxField(props) {
  var valueType = props.valueType,
    rest = _objectWithoutProperties(props, _excluded);
  var _ref = React.useContext(ProMaxProviderContext) || {},
    valueTypeMap = _ref.valueTypeMap;
  var values = React.useContext(ProProvider);
  var innerValueTypeMap = useMemo(function () {
    return _objectSpread(_objectSpread({}, builtInValueTypeMap), valueTypeMap);
  }, [valueTypeMap]);
  var value = useMemo(function () {
    return _objectSpread(_objectSpread({}, values), {}, {
      valueTypeMap: innerValueTypeMap
    });
  }, [innerValueTypeMap, values]);
  var innerValueType = useMemo(function () {
    var keys = Object.keys(innerValueTypeMap);
    // 当自定义的 valueTypeMap 中包含 valueType 时，不使用内置的 valueType
    if (typeof valueType === 'string' && keys.includes(valueType)) {
      return undefined;
    }
    return undefined;
  }, [innerValueTypeMap, valueType]);
  return _jsx(ProProvider.Provider, {
    value: value,
    children: innerValueType ? _jsx(ProField, _objectSpread(_objectSpread({}, rest), {}, {
      valueType: innerValueType
    })) : _jsx(ProField, _objectSpread(_objectSpread({}, rest), {}, {
      render: innerValueTypeMap[valueType].render,
      renderFormItem: innerValueTypeMap[valueType].renderFormItem
    }))
  });
}
export default /*#__PURE__*/React.memo(ProMaxField);