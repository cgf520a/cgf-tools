import React from 'react';
import createStore from '@cgf-tools/store';
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
export var ProMaxStoreContext = /*#__PURE__*/React.createContext(undefined);
function ProMaxStore(props) {
  var middlewares = props.middlewares,
    initialState = props.initialState,
    children = props.children;
  var state = React.useMemo(function () {
    createStore.applyMiddlewares(middlewares || []);
    return createStore(initialState);
  }, [initialState, middlewares]);
  return _jsx(ProMaxStoreContext.Provider, {
    value: state,
    children: children
  });
}
export default /*#__PURE__*/React.memo(ProMaxStore);