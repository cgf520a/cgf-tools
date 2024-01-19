import React, { useMemo } from 'react';
import type { ProRenderFieldPropsType } from '@ant-design/pro-components';
import { valueTypeMap as builtInValueTypeMap } from '@cgf-tools/pro-max-components/share';

export interface ProMaxProviderProps {
  valueTypeMap?: Record<string, ProRenderFieldPropsType>;
  children?: React.ReactNode;
}

export const ProMaxProviderContext = React.createContext<ProMaxProviderProps | undefined>(
  undefined
);

const ProMaxProvider: React.FC<ProMaxProviderProps> = ({
  valueTypeMap,
  children,
}: ProMaxProviderProps) => {
  const value = useMemo(
    () => ({
      valueTypeMap: {
        ...builtInValueTypeMap,
        ...valueTypeMap,
      },
    }),
    [valueTypeMap]
  );

  return <ProMaxProviderContext.Provider value={value}>{children}</ProMaxProviderContext.Provider>;
};

export default React.memo(ProMaxProvider);
