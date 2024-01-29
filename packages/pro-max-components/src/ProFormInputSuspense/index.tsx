import React from 'react';
import ProFormInputSkeleton from '../ProFormInputSkeleton';
import type { ProFormInputSkeletonProps } from '../ProFormInputSkeleton';

export interface ProFormInputSuspenseProps extends ProFormInputSkeletonProps {
  children?: React.ReactNode;
}

const ProFormInputSuspense: React.FC<ProFormInputSuspenseProps> = ({
  children,
  ...others
}: ProFormInputSuspenseProps) => {
  return (
    <React.Suspense
      fallback={
        <ProFormInputSkeleton
          {...others}
          fieldProps={{
            active: true,
            ...others.fieldProps,
          }}
        />
      }
    >
      {children}
    </React.Suspense>
  );
};

export default React.memo(ProFormInputSuspense);
