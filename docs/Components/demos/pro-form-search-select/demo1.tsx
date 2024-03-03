import React from 'react';
import { Button } from 'antd';
import { ProForm } from '@ant-design/pro-components';
import { ProFormSearchSelect } from '@cgf-tools/pro-max-components';

import { ProFormSearchSelectRef } from '@cgf-tools/pro-max-components';

const request = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          label: '测试1',
          value: '1',
        },
        {
          label: '测试2',
          value: '2',
        },
      ]);
    }, 2000);
  });
};

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  const ref = React.useRef<ProFormSearchSelectRef>(null);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          ref.current?.setOptions([
            {
              label: '测试3',
              value: '3',
            },
            {
              label: '测试4',
              value: '4',
            },
          ]);
        }}
      >
        手动设置下拉选项
      </Button>
      <ProForm
        onValuesChange={console.log}
        onFinish={async v => {
          console.log(v);
        }}
      >
        <ProFormSearchSelect
          ref={ref}
          width="md"
          label="用户"
          name="user"
          placeholder="请输入内容搜索"
          request={request}
        />
      </ProForm>
    </>
  );
};

export default React.memo(Demo);
