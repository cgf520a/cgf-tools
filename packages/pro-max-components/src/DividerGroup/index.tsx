import React from 'react';
import { Divider, theme } from 'antd';
import type { DividerProps } from 'antd';

const { useToken } = theme;

// 扩展不多的功能使用继承，扩展多的功能使用组合更佳
export interface DividerGroupProps extends DividerProps {
  /**
   * 分组标题
   * @description 分组标题
   * @default -
   */
  title?: React.ReactNode;
  /**
   * 分组内容
   */
  children?: React.ReactNode;
  dashed?: boolean;
}

const DividerGroup: React.FC<DividerGroupProps> = ({
  children,
  title,
  dashed,
  ...others
}: DividerGroupProps) => {
  const { token } = useToken();

  return (
    <div
      css={{
        border: `1px ${dashed ? 'dashed' : 'solid'} ${token.colorSplit}`,
        position: 'relative',
        borderTop: 'none',
        padding: '26px 20px',
      }}
    >
      <Divider
        orientation="left"
        plain
        dashed={dashed}
        {...others}
        css={{ position: 'absolute', top: '-26px', left: 0 }}
      >
        {title}
      </Divider>
      {children}
    </div>
  );
};

export default React.memo(DividerGroup);
