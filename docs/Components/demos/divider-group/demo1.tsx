import React from 'react';
import { Radio, Switch, Form } from 'antd';
import { DividerGroup } from '@cgf-tools/pro-max-components';
import createStore from '@cgf-tools/store';

const store = createStore<{
  [key: string]: any;
  dashed: boolean;
  orientation: 'left' | 'right' | 'center';
}>({
  dashed: false,
  orientation: 'left',
  changeDashed: (dashed: boolean) => {
    store.dashed = dashed;
  },
  changeOrientation: (orientation: 'left' | 'right' | 'center') => {
    store.orientation = orientation;
  },
});

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  const { dashed, orientation, changeOrientation, changeDashed } = store;

  return (
    <div>
      <div css={{ marginBottom: 30 }}>
        <Form layout="inline">
          <Form.Item label="标题位置">
            <Radio.Group value={orientation}>
              <Radio.Button
                value="left"
                onClick={() => {
                  changeOrientation('left');
                }}
              >
                left
              </Radio.Button>
              <Radio.Button
                value="right"
                onClick={() => {
                  changeOrientation('right');
                }}
              >
                right
              </Radio.Button>
              <Radio.Button
                value="center"
                onClick={() => {
                  changeOrientation('center');
                }}
              >
                center
              </Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="是否虚线">
            <Switch value={dashed} onChange={changeDashed} />
          </Form.Item>
        </Form>
      </div>
      <DividerGroup title="基础使用" dashed={dashed} orientation={orientation}>
        <div css={{ color: 'red' }}>具体内容</div>
      </DividerGroup>
    </div>
  );
};

export default React.memo(Demo);
