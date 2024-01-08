function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { useSyncExternalStore } from 'use-sync-external-store/shim';
var __DEV__ = process.env.NODE_ENV !== 'production';
var isObj = function isObj(val) {
  return Object.prototype.toString.call(val) === '[object Object]';
};
var isGetStateInMethod = false;
var run = function run(fn) {
  fn();
};
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
  var setState = function setState(key, val) {
    if (key in obj) {
      if (key in state) {
        var newVal = val instanceof Function ? val(obj[key]) : val;
        state[key].setSnapshot(newVal);
      } else if (__DEV__) {
        throw new Error("`".concat(key, "` is a method, can not update"));
      }
    } else if (__DEV__) {
      throw new Error("`".concat(key, "` is not initialized in store"));
    }
  };
  return new Proxy(function () {
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
      setState(key, val);
      return true;
    },
    apply: function apply(_target, _thisArg, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        firstArg = _ref2[0],
        oneAction = _ref2[1];
      if (typeof firstArg === 'string') {
        setState(firstArg, oneAction);
        return;
      }
      if (isObj(firstArg)) {
        var newObj = firstArg;
        Object.keys(newObj).forEach(function (key) {
          setState(key, newObj[key]);
        });
        return;
      }
      if (typeof firstArg === 'function') {
        var _newObj = firstArg(obj);
        Object.keys(_newObj).forEach(function (key) {
          setState(key, _newObj[key]);
        });
      }
    }
  });
};
resso.config = function (_ref3) {
  var batch = _ref3.batch;
  run = batch;
};
export default resso;