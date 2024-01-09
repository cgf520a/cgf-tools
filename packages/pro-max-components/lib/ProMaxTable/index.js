function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["request", "pagination", "expandable", "formRef", "manual", "resizable", "resizeableProps", "columns", "resizablePersistenceKey", "headerTitle", "addButtonProps", "importButtonProps", "exportButtonProps", "editFormType", "editFormContainerProps", "useProMaxTableContainer", "onEditFormSubmit", "onEditFormSubmitFailed", "moreButton", "rowActionsProps"],
  _excluded2 = ["page", "size"];
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useMemo } from 'react';
import { App } from 'antd';
import { ProTable } from '@ant-design/pro-components';
import { useMemoizedFn } from 'ahooks';
import ExpandedRow from "./ExpandedRow";
import useUrlState from '@ahooksjs/use-url-state';
import { useRequest } from 'ahooks';
import { useAntdResizableHeader } from '@minko-fe/use-antd-resizable-header';
import { ResetColumnWidthIcon } from '@/icons';
import HeaderTitle from "./HeaderTitle";
import EditForm from "./EditForm";
import { ProMaxContext, useProMaxTableState, useProMaxTableRef } from "./hooks";
import Action from "./Action";
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { Fragment as _Fragment } from "@emotion/react/jsx-runtime";
import { jsxs as _jsxs } from "@emotion/react/jsx-runtime";
var ProMaxTableContainer = /*#__PURE__*/React.memo(function (_ref) {
  var children = _ref.children;
  var state = useProMaxTableState();
  return _jsx(ProMaxContext.Provider, {
    value: state,
    children: children
  });
});
var NoContaner = function NoContaner(_ref2) {
  var children = _ref2.children;
  return _jsx(_Fragment, {
    children: children
  });
};

/**
 * 功能规划：
 * 1. 搜索条件, 分页，url状态管理 done
 * 2. 展开行 done
 * 3. 可调整宽度 done
 * 4. 新增、编辑、删除、导入、导出功能
 * 5. ProMaxFormItem组件，方便快速组装自定义的表单组件，异步的也需要考虑进去
 * 6. 判断开发环境时，显示可编辑按钮，可视化编辑设计功能
 * 7. 实现外层可以用context容器，方便在所有想使用hooks的地方能够使用
 */

var ProMaxTable = function ProMaxTable(_ref3, ref) {
  var _ref3$request = _ref3.request,
    request = _ref3$request === void 0 ? function () {
      return Promise.resolve({
        data: [],
        total: 0,
        success: true
      });
    } : _ref3$request,
    pagination = _ref3.pagination,
    expandable = _ref3.expandable,
    formRef = _ref3.formRef,
    _ref3$manual = _ref3.manual,
    manual = _ref3$manual === void 0 ? false : _ref3$manual,
    _ref3$resizable = _ref3.resizable,
    resizable = _ref3$resizable === void 0 ? false : _ref3$resizable,
    resizeableProps = _ref3.resizeableProps,
    columns = _ref3.columns,
    resizablePersistenceKey = _ref3.resizablePersistenceKey,
    headerTitle = _ref3.headerTitle,
    addButtonProps = _ref3.addButtonProps,
    importButtonProps = _ref3.importButtonProps,
    exportButtonProps = _ref3.exportButtonProps,
    editFormType = _ref3.editFormType,
    editFormContainerProps = _ref3.editFormContainerProps,
    _ref3$useProMaxTableC = _ref3.useProMaxTableContainer,
    useProMaxTableContainer = _ref3$useProMaxTableC === void 0 ? false : _ref3$useProMaxTableC,
    onEditFormSubmit = _ref3.onEditFormSubmit,
    onEditFormSubmitFailed = _ref3.onEditFormSubmitFailed,
    moreButton = _ref3.moreButton,
    rowActionsProps = _ref3.rowActionsProps,
    others = _objectWithoutProperties(_ref3, _excluded);
  var _App$useApp = App.useApp(),
    modal = _App$useApp.modal;
  var proMaxTableRef = useProMaxTableRef();
  var _useUrlState = useUrlState({}),
    _useUrlState2 = _slicedToArray(_useUrlState, 2),
    urlState = _useUrlState2[0],
    setUrlState = _useUrlState2[1];
  // 数据流以urlState为准, 不存在时使用默认值
  var _React$useState = React.useState(pagination ? pagination.current || 1 : 1),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    page = _React$useState2[0],
    setPage = _React$useState2[1];
  var _React$useState3 = React.useState(pagination ? pagination.pageSize || 10 : 10),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    size = _React$useState4[0],
    setSize = _React$useState4[1];
  var _React$useState5 = React.useState({}),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    params = _React$useState6[0],
    setParams = _React$useState6[1];
  // 排序和过滤, 也应该存到urlState中，但目前暂不实现，后面根据需求实现
  var _React$useState7 = React.useState({}),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    sort = _React$useState8[0],
    setSort = _React$useState8[1];
  var _React$useState9 = React.useState({}),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    filter = _React$useState10[0],
    setFilter = _React$useState10[1];
  var innerFormRef = React.useRef();
  var _useRequest = useRequest(request, {
      manual: true
    }),
    data = _useRequest.data,
    loading = _useRequest.loading,
    run = _useRequest.run,
    refresh = _useRequest.refresh;
  var innerColumns = React.useMemo(function () {
    return rowActionsProps ? columns === null || columns === void 0 ? void 0 : columns.concat([{
      title: '操作',
      valueType: 'option',
      key: '__option',
      hideInExpandable: true,
      width: (rowActionsProps === null || rowActionsProps === void 0 ? void 0 : rowActionsProps.width) || 180,
      fixed: 'right',
      render: function render(_, record) {
        return _jsx(Action, _objectSpread(_objectSpread({}, rowActionsProps), {}, {
          record: record
        }));
      }
    }]) : columns;
  }, [rowActionsProps, columns]);
  React.useEffect(function () {
    var page = urlState.page,
      size = urlState.size,
      rest = _objectWithoutProperties(urlState, _excluded2);
    if (page) {
      setPage(parseInt(page));
    } else {
      setPage(pagination ? pagination.current || 1 : 1);
    }
    if (size) {
      setSize(parseInt(size));
    } else {
      setSize(pagination ? pagination.pageSize || 10 : 10);
    }
    if (formRef !== null && formRef !== void 0 && formRef.current) {
      // 这里还要绑定个内部的，否则会出现表单值和urlState不一致的情况
      formRef.current.setFieldsValue(rest);
    } else if (innerFormRef.current) {
      innerFormRef.current.setFieldsValue(rest);
    }
    setParams(rest);
    run(urlState, sort, filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlState]);
  var innerExpandable = React.useMemo(function () {
    return _objectSpread({
      fixed: true,
      expandedRowRender: function expandedRowRender(record) {
        return _jsx(ExpandedRow, {
          record: record,
          columns: innerColumns
        });
      }
    }, expandable);
  }, [expandable, innerColumns]);
  var changeUrlState = useMemoizedFn(function (params) {
    var p = Object.keys(params).reduce(function (prev, _) {
      if (prev[_] === '') {
        prev[_] = undefined;
      }
      return prev;
    }, params);
    setUrlState(function (prev) {
      var prevKeys = Object.keys(prev);
      var keys = Object.keys(p);
      var clearKeys = prevKeys.filter(function (_) {
        return !keys.includes(_);
      });
      var obj = p;
      clearKeys.forEach(function (_) {
        obj[_] = undefined;
      });
      return obj;
    });
  });
  React.useEffect(function () {
    // 当不开启手动模式时，默认发送请求，查询表单的默认值可以通过initvalue设置，在外层可以使用form.submit来触发查询
    if (!manual && Object.keys(urlState).length === 0) {
      var _ref4$current;
      var _ref4 = formRef || innerFormRef;
      (_ref4$current = _ref4.current) === null || _ref4$current === void 0 || _ref4$current.submit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  var handleChange = useMemoizedFn(function (pagination, filters, sorter) {
    changeUrlState(_objectSpread(_objectSpread({}, params), {}, {
      page: pagination.current,
      size: pagination.pageSize
    }));
    setSort(sorter);
    setFilter(filters);
  });
  var handleSubmit = useMemoizedFn(function (params) {
    changeUrlState(_objectSpread({
      page: 1,
      //查询时重置页码
      size: size
    }, params));
  });
  var handleReset = useMemoizedFn(function () {
    handleSubmit({});
  });

  // 文档: https://www.npmjs.com/package/@minko-fe/use-antd-resizable-header
  var _useAntdResizableHead = useAntdResizableHeader(_objectSpread({
      columns: useMemo(function () {
        return innerColumns || [];
      }, [innerColumns]),
      // 保存拖拽宽度至本地localStorage
      columnsState: resizablePersistenceKey ? {
        persistenceKey: resizablePersistenceKey,
        persistenceType: 'localStorage'
      } : undefined
    }, resizeableProps)),
    components = _useAntdResizableHead.components,
    resizableColumns = _useAntdResizableHead.resizableColumns,
    resetColumns = _useAntdResizableHead.resetColumns;
  var innerOptions = React.useMemo(function () {
    return _objectSpread(_objectSpread({}, others.options), {}, {
      reload: function reload() {
        refresh();
      }
    });
  }, [others.options, refresh]);
  React.useImperativeHandle(ref, function () {
    var instance = {
      refresh: refresh
    };
    if (proMaxTableRef) {
      proMaxTableRef.current = instance;
    }
    return instance;
  }, [proMaxTableRef, refresh]);
  var handleResetColumnWidth = useMemoizedFn(function () {
    modal.confirm({
      title: '请选择重置列宽的方式',
      content: '重置到上次保存的状态，或者重置到初始状态，初始状态为默认宽度',
      onOk: function onOk() {
        resetColumns();
      },
      onCancel: function onCancel() {
        if (resizablePersistenceKey) {
          localStorage.removeItem(resizablePersistenceKey);
          window.location.reload();
        }
      },
      okText: '重置到上次保存的状态',
      cancelText: '重置到初始状态'
    });
  });
  var Container = React.useMemo(function () {
    return useProMaxTableContainer ? NoContaner : ProMaxTableContainer;
  }, [useProMaxTableContainer]);
  return _jsxs(Container, {
    children: [_jsx(ProTable, _objectSpread({
      loading: loading,
      dataSource: (data === null || data === void 0 ? void 0 : data.data) || [],
      expandable: innerExpandable,
      onChange: handleChange,
      onSubmit: handleSubmit,
      onReset: handleReset,
      formRef: formRef || innerFormRef,
      columns: resizable ? resizableColumns : innerColumns,
      components: components,
      options: innerOptions,
      optionsRender: function optionsRender(props, defaultDom) {
        return [resizable && _jsx(ResetColumnWidthIcon, {
          onClick: handleResetColumnWidth
        }, "reset-width")].concat(_toConsumableArray(defaultDom)).filter(function (_) {
          return !!_;
        });
      },
      pagination: _objectSpread(_objectSpread({}, pagination), {}, {
        current: page,
        pageSize: size,
        total: (data === null || data === void 0 ? void 0 : data.total) || 0
      }),
      headerTitle: _jsx(HeaderTitle, {
        headerTitle: headerTitle,
        addButtonProps: addButtonProps,
        importButtonProps: importButtonProps,
        exportButtonProps: exportButtonProps,
        moreButton: moreButton
      })
    }, others)), _jsx(EditForm, _objectSpread({
      editFormType: editFormType,
      columns: columns,
      onEditFormSubmit: onEditFormSubmit,
      onEditFormSubmitFailed: onEditFormSubmitFailed,
      transformRecord: rowActionsProps === null || rowActionsProps === void 0 ? void 0 : rowActionsProps.transformRecord,
      onEditClick: rowActionsProps === null || rowActionsProps === void 0 ? void 0 : rowActionsProps.onEditClick
    }, editFormContainerProps))]
  });
};
var __Table = /*#__PURE__*/React.memo( /*#__PURE__*/React.forwardRef(ProMaxTable));
var Table = __Table;
Table.Container = ProMaxTableContainer;
export default Table;