import React from 'react';
import { Divider, theme } from 'antd';

const { useToken } = theme;

export interface DividerGroupProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
}

const DividerGroup: React.FC<DividerGroupProps> = ({ children, title }: DividerGroupProps) => {
  const { token } = useToken();

  return (
    <div
      css={{
        border: `1px solid ${token.colorSplit}`,
        position: 'relative',
        borderTop: 'none',
        padding: '26px 20px',
      }}
    >
      <Divider orientation="left" plain css={{ position: 'absolute', top: '-26px', left: 0 }}>
        {title}
      </Divider>
      {children}
    </div>
  );
};

export default React.memo(DividerGroup);
