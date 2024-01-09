import React, { useMemo } from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = (props: { children?: React.ReactNode }) => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    {props?.children}
  </svg>
);

export interface CustomIconProps extends Partial<CustomIconComponentProps> {
  children?: React.ReactNode;
}

const CustomIcon: React.FC<CustomIconProps> = ({ children, ...props }: CustomIconProps) => {
  const Component = useMemo(() => () => <CustomSvg>{children}</CustomSvg>, [children]);

  return <Icon component={Component} {...props} />;
};

export default React.memo(CustomIcon);
