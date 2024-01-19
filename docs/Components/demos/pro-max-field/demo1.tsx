import React, { useState } from 'react';
import { Descriptions, Radio, Space, Switch } from 'antd';
import { ProMaxField } from '@cgf-tools/pro-max-components';
import dayjs from 'dayjs';

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  const [state, setState] = useState<string>('read');
  const [plain, setPlain] = useState<boolean>(false);
  return (
    <>
      <Space>
        <Radio.Group onChange={e => setState(e.target.value)} value={state}>
          <Radio value="read">只读</Radio>
          <Radio value="edit">编辑</Radio>
        </Radio.Group>
        简约模式
        <Switch checked={plain} onChange={checked => setPlain(checked)} />
      </Space>
      <br />
      <br />
      <Descriptions column={2}>
        <Descriptions.Item label="手机号">
          <ProMaxField valueType="phone" text="18888888888" mode={state} />
        </Descriptions.Item>
        <Descriptions.Item label="数字文本输入">
          <ProMaxField valueType="numberInput" text="18888888888" mode={state} />
        </Descriptions.Item>
        <Descriptions.Item label="链接">
          <ProMaxField valueType="link" text="百度" mode={state} href="https://www.baidu.com" />
        </Descriptions.Item>
        <Descriptions.Item label="空字符串">
          <ProMaxField text="" mode="read" />
        </Descriptions.Item>
        <Descriptions.Item label="头像">
          <ProMaxField
            text="https://avatars2.githubusercontent.com/u/8186664?s=60&v=4"
            mode="read"
            valueType="avatar"
          />
        </Descriptions.Item>
        <Descriptions.Item label="文本">
          <ProMaxField text="这是一段文本" valueType="text" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="图片">
          <ProMaxField
            text="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            valueType="image"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="金额">
          <ProMaxField text="100" valueType="money" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="颜色">
          <ProMaxField text="blue" valueType="color" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="数字">
          <ProMaxField text="19897979797979" valueType="digit" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="数字范围">
          <ProMaxField text={[123, 456]} valueType="digitRange" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="秒格式化">
          <ProMaxField text={2000000} valueType="second" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="百分比">
          <ProMaxField text="100" valueType="percent" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="评分">
          <ProMaxField text={3.5} valueType="rate" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="选择框">
          <ProMaxField
            text="open"
            mode={state}
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
              open: {
                text: '未解决',
                status: 'Error',
              },
              closed: {
                text: '已解决',
                status: 'Success',
              },
              processing: {
                text: '解决中',
                status: 'Processing',
              },
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="多选">
          <ProMaxField
            text={['open', 'closed']}
            mode={state}
            valueType="checkbox"
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
              open: {
                text: '未解决',
                status: 'Error',
              },
              closed: {
                text: '已解决',
                status: 'Success',
              },
              processing: {
                text: '解决中',
                status: 'Processing',
              },
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="多选 labelInValue">
          <ProMaxField
            text={[
              {
                value: 'open1',
                label: '打开',
              },
              {
                value: 'closed2',
                label: '关闭',
              },
            ]}
            mode={state}
            valueType="checkbox"
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
              open: {
                text: '未解决',
                status: 'Error',
              },
              closed: {
                text: '已解决',
                status: 'Success',
              },
              processing: {
                text: '解决中',
                status: 'Processing',
              },
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="单选">
          <ProMaxField
            text="open"
            mode={state}
            valueType="radio"
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
              open: {
                text: '未解决',
                status: 'Error',
              },
              closed: {
                text: '已解决',
                status: 'Success',
              },
              processing: {
                text: '解决中',
                status: 'Processing',
              },
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="单选按钮">
          <ProMaxField
            text="open"
            mode={state}
            valueType="radioButton"
            valueEnum={{
              all: { text: '全部', disabled: true, status: 'Default' },
              open: {
                text: '未解决',
                status: 'Error',
              },
              closed: {
                text: '已解决',
                status: 'Success',
              },
              processing: {
                text: '解决中',
                status: 'Processing',
              },
            }}
          />
        </Descriptions.Item>
        <Descriptions.Item label="远程选择框">
          <ProMaxField
            text="open"
            mode={state}
            valueType="select"
            request={async () => [
              { label: '全部', value: 'all' },
              { label: '未解决', value: 'open' },
              { label: '已解决', value: 'closed' },
              { label: '解决中', value: 'processing' },
              {
                label: '特殊选项',
                value: 'optGroup',
                optionType: 'optGroup',
                options: [
                  { label: '不解决', value: 'no' },
                  { label: '已废弃', value: 'clear' },
                ],
              },
            ]}
          />
        </Descriptions.Item>
        <Descriptions.Item label="级联选择框">
          <ProMaxField
            text={['zhejiang', 'hangzhou', 'xihu']}
            mode={state}
            valueType="cascader"
            fieldProps={{
              fieldNames: {
                label: 'name',
              },
            }}
            request={async () => [
              {
                value: 'zhejiang',
                name: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    name: 'Hangzhou',
                    children: [
                      {
                        value: 'xihu',
                        name: 'West Lake',
                      },
                    ],
                  },
                ],
              },
              {
                value: 'jiangsu',
                name: 'Jiangsu',
                children: [
                  {
                    value: 'nanjing',
                    name: 'Nanjing',
                    children: [
                      {
                        value: 'zhonghuamen',
                        name: 'Zhong Hua Men',
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Descriptions.Item>
        <Descriptions.Item label="进度条">
          <ProMaxField text="40" valueType="progress" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="slider">
          <ProMaxField text="40" valueType="slider" mode={state} plain={plain} />
        </Descriptions.Item>
        <Descriptions.Item label="百分比">
          <Space>
            <ProMaxField
              text={10}
              valueType={{
                type: 'percent',
                showSymbol: true,
                showColor: true,
              }}
              mode="read"
            />
            <ProMaxField
              text={0}
              valueType={{
                type: 'percent',
                showSymbol: true,
                showColor: true,
              }}
              mode="read"
            />
            <ProMaxField
              text={-10}
              valueType={{
                type: 'percent',
                showSymbol: true,
                showColor: true,
              }}
              mode="read"
            />
          </Space>
        </Descriptions.Item>
        <Descriptions.Item label="日期时间">
          <ProMaxField
            text={dayjs('2019-11-16 12:50:26').valueOf()}
            valueType="dateTime"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="相对于当前时间">
          <Space>
            <ProMaxField
              text={dayjs('2019-11-16 12:50:26').valueOf()}
              valueType="fromNow"
              mode={state}
              plain={plain}
            />
            <ProMaxField
              text={dayjs('2020-11-16 12:50:26').valueOf()}
              valueType="fromNow"
              mode={state}
              plain={plain}
            />
          </Space>
        </Descriptions.Item>
        <Descriptions.Item label="日期">
          <ProMaxField
            text={dayjs('2019-11-16 12:50:26').valueOf()}
            valueType="date"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="日期区间">
          <ProMaxField
            text={[
              dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
              dayjs('2019-11-16 12:50:26').valueOf(),
            ]}
            plain={plain}
            valueType="dateRange"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="日期时间区间">
          <ProMaxField
            text={[
              dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
              dayjs('2019-11-16 12:50:26').valueOf(),
            ]}
            plain={plain}
            valueType="dateTimeRange"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="时间">
          <ProMaxField
            text={dayjs('2019-11-16 12:50:26').valueOf()}
            plain={plain}
            valueType="time"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="时间区间">
          <ProMaxField
            text={[
              dayjs('2019-11-16 12:50:26').add(-1, 'd').valueOf(),
              dayjs('2019-11-16 12:50:26').valueOf(),
            ]}
            plain={plain}
            valueType="timeRange"
            mode={state}
          />
        </Descriptions.Item>
        <Descriptions.Item label="密码">
          <ProMaxField text="password" plain={plain} valueType="password" mode={state} />
        </Descriptions.Item>
        <Descriptions.Item label="代码块">
          <ProMaxField
            text={`
yarn run v1.22.0            
$ eslint --format=pretty ./packages
Done in 9.70s.
          `}
            valueType="code"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
        <Descriptions.Item label="JSON 代码块">
          <ProMaxField
            text={`{
  "compilerOptions": {
    "target": "esnext",
    "moduleResolution": "node",
    "jsx": "preserve",
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,

    "declaration": true,
    "skipLibCheck": true
  },
  "include": ["**/src", "**/docs", "scripts", "**/demo", ".eslintrc.js"]
}
`}
            valueType="jsonCode"
            mode={state}
            plain={plain}
          />
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

export default React.memo(Demo);
