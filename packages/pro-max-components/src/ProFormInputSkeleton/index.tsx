import React from 'react';
import { Skeleton } from 'antd';
import { WIDTH_SIZE_ENUM } from '@cgf-tools/pro-max-components/share';
import { ProForm } from '@ant-design/pro-components';
import type { SkeletonProps } from 'antd';
import type { ProFormItemProps } from '@ant-design/pro-components';

export interface ProFormInputSkeletonProps extends ProFormItemProps<SkeletonProps> {}

const BaseProFormInputSkeleton: React.FC<ProFormInputSkeletonProps> = ({
  width,
  fieldProps,
  ...others
}: ProFormInputSkeletonProps) => {
  return (
    <ProForm.Item {...others}>
      <Skeleton.Input
        style={{
          ...fieldProps?.style,
          width: typeof width === 'number' || width === undefined ? width : WIDTH_SIZE_ENUM[width],
        }}
        {...fieldProps}
      />
    </ProForm.Item>
  );
};

const ProFormInputSkeleton = BaseProFormInputSkeleton;

export default React.memo(ProFormInputSkeleton);
