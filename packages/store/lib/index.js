var _excluded = ["key", "val", "type"];
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { useSyncExternalStore } from 'use-sync-external-store/shim';
var __DEV__ = process.env.NODE_ENV !== 'production';
var isObj = function isObj(val) {
  return Object.prototype.toString.call(val) === '[object Object]';
};
var STATA_CHANGE = Symbol('STATA_CHANGE');
var isGetStateInMethod = false;
var run = function run(fn) {
  fn();
};
var innerMiddlewares = [];
var innerReducer = undefined;
export function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}
var resso = function resso(obj) {
  if (__DEV__ && !isObj(obj)) {
    throw new Error('object required');
  }
  var state = {};
  var methods = {};
  Object.keys(obj).forEach(function (key) {
    var initVal = obj[key];
    if (initVal instanceof Function) {
      methods[key] = function () {
        isGetStateInMethod = true;
        var res = initVal.apply(void 0, arguments);
        isGetStateInMethod = false;
        return res;
      };
      return;
    }
    var listeners = new Set();
    state[key] = {
      subscribe: function subscribe(listener) {
        listeners.add(listener);
        return function () {
          return listeners.delete(listener);
        };
      },
      getSnapshot: function getSnapshot() {
        return obj[key];
      },
      setSnapshot: function setSnapshot(val) {
        if (val !== obj[key]) {
          obj[key] = val;
          run(function () {
            return listeners.forEach(function (listener) {
              return listener();
            });
          });
        }
      },
      useSnapshot: function useSnapshot() {
        return useSyncExternalStore(state[key].subscribe, state[key].getSnapshot, state[key].getSnapshot);
      }
    };
  });

  // 记录状态变更
  var oldObj = _objectSpread({}, obj);
  var store = {};
  var setState = function setState(_ref) {
    var key = _ref.key,
      val = _ref.val,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? STATA_CHANGE : _ref$type,
      payload = _objectWithoutProperties(_ref, _excluded);
    if (type !== STATA_CHANGE && innerReducer) {
      // 暂时如此处理，后续再优化
      innerReducer(store, {
        type: type,
        payload: payload
      });
    } else if (key in obj) {
      if (key in state) {
        var newVal = val instanceof Function ? val(obj[key]) : val;
        state[key].setSnapshot(newVal);
        oldObj = _objectSpread({}, obj);
        return {
          key: key,
          val: newVal,
          type: type,
          payload: payload
        };
      } else if (__DEV__) {
        throw new Error("`".concat(key, "` is a method, can not update"));
      }
    } else if (__DEV__) {
      throw new Error("`".concat(key, "` is not initialized in store"));
    }
  };

  // 适配redux中间件
  var getState = function getState() {
    return oldObj;
  };

  // 用于适配redux中间件，不应该给外部使用，违背此库的设计初衷
  var dispatch = setState;
  var chain = innerMiddlewares.map(function (middleware) {
    return middleware({
      getState: getState,
      dispatch: dispatch
    });
  });
  setState = compose.apply(void 0, _toConsumableArray(chain))(setState);
  dispatch = setState;
  store = new Proxy(function () {
    return undefined;
  }, {
    get: function get(_target, key) {
      if (key in methods) {
        return methods[key];
      }
      if (key in state) {
        if (isGetStateInMethod) {
          return obj[key];
        }
        try {
          return state[key].useSnapshot();
        } catch (err) {
          return obj[key];
        }
      }
      if (__DEV__) {
        if (key !== 'prototype' && key !== 'name' && key !== 'displayName') {
          throw new Error("`".concat(key, "` is not initialized in store"));
        }
      }
    },
    set: function set(_target, key, val) {
      dispatch({
        key: key,
        val: val,
        type: STATA_CHANGE
      });
      return true;
    },
    apply: function apply(_target, _thisArg, _ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
        firstArg = _ref3[0],
        oneAction = _ref3[1];
      if (typeof firstArg === 'string') {
        setState({
          key: firstArg,
          val: oneAction,
          type: STATA_CHANGE
        });
        return;
      }
      if (isObj(firstArg)) {
        var newObj = firstArg;
        Object.keys(newObj).forEach(function (key) {
          setState({
            key: key,
            val: newObj[key],
            type: STATA_CHANGE
          });
        });
        return;
      }
      if (typeof firstArg === 'function') {
        var _newObj = firstArg(obj);
        Object.keys(_newObj).forEach(function (key) {
          setState({
            key: key,
            val: _newObj[key],
            type: STATA_CHANGE
          });
        });
      }
    }
  });
  return store;
};
resso.config = function (_ref4) {
  var batch = _ref4.batch;
  run = batch;
};

// reducer给中间件用，适配redux中间件
resso.applyMiddlewares = function (middlewares, reducer) {
  innerMiddlewares = middlewares;
  innerReducer = reducer;
};
export default resso;