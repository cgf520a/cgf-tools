import React, { Suspense } from 'react';
import { ProForm } from '@ant-design/pro-components';
import { ProFormMemoSelect } from '@cgf-tools/pro-max-components';
import axios from 'axios';
import { fetchSuspenseData } from '@cgf-tools/pro-max-components/share';
import { use } from '@cgf-tools/pro-max-components/hooks';

const request = async () => {
  return axios.get('/api/env.json').then(res => res.data);
};

let cache = new Map();

export function fetchData(url: string) {
  if (!cache.has(url)) {
    cache.set(url, getData(url));
  }
  return cache.get(url);
}

async function getData(url: string) {
  return await new Promise((resolve, reject) => {
    axios.get(url).then(res => {
      setTimeout(() => {
        resolve(res.data);
      }, 5000);
    });
  });
}

async function getAlbums() {
  // 添加一个假的延迟，以便让等待更加明显。
  await new Promise(resolve => {
    setTimeout(resolve, 3000);
  });

  return [
    {
      id: 13,
      title: 'Let It Be',
      year: 1970,
    },
    {
      id: 12,
      title: 'Abbey Road',
      year: 1969,
    },
    {
      id: 11,
      title: 'Yellow Submarine',
      year: 1969,
    },
    {
      id: 10,
      title: 'The Beatles',
      year: 1968,
    },
    {
      id: 9,
      title: 'Magical Mystery Tour',
      year: 1967,
    },
    {
      id: 8,
      title: "Sgt. Pepper's Lonely Hearts Club Band",
      year: 1967,
    },
    {
      id: 7,
      title: 'Revolver',
      year: 1966,
    },
    {
      id: 6,
      title: 'Rubber Soul',
      year: 1965,
    },
    {
      id: 5,
      title: 'Help!',
      year: 1965,
    },
    {
      id: 4,
      title: 'Beatles For Sale',
      year: 1964,
    },
    {
      id: 3,
      title: "A Hard Day's Night",
      year: 1964,
    },
    {
      id: 2,
      title: 'With The Beatles',
      year: 1963,
    },
    {
      id: 1,
      title: 'Please Please Me',
      year: 1963,
    },
  ];
}

function Content({ resource }: any) {
  // const data = use(axios.get('/api/env.json').then(res => res.data));
  const data = resource.read();
  // const data = use(fetchData('/api/env.json'));

  return <p>{JSON.stringify(data)}</p>;
}

const Demo = () => {
  const resource = fetchSuspenseData(axios.get('/api/env.json').then(res => res.data));
  console.log(resource);

  return (
    <>
      <Suspense fallback={'loading data'}>
        <Content resource={resource} />
      </Suspense>
      {/* <ProFormMemoSelect
        width="md"
        label="环境"
        name="env1"
        placeholder="请选择环境"
        request={request}
      /> */}
      {/* <ProForm
        onValuesChange={console.log}
        onFinish={async v => {
          console.log(v);
        }}
      >
        <ProFormMemoSelect
          width="md"
          label="环境"
          name="env"
          placeholder="请选择环境"
          request={request}
        />
      </ProForm> */}
    </>
  );
};

export default Demo;
