import React, { Suspense } from 'react';
import { expect, describe, it } from 'vitest';
import '@testing-library/jest-dom';
import use from './use';
import { render, screen } from '@testing-library/react';
import type { MPromise } from './use';

describe('use', () => {
  it('使用promise', async () => {
    const cache = new Map();

    const getData = async () => {
      return await new Promise(resolve => {
        setTimeout(() => {
          resolve('data');
        }, 2000);
      });
    };

    const fetchData = (key: string) => {
      if (!cache.has(key)) {
        cache.set(key, getData());
      }
      return cache.get(key);
    };

    try {
      use(fetchData('testPromise') as MPromise<string>);
    } catch (err: any) {
      expect(err).toBeInstanceOf(Promise);
    }
  });

  it('组件中使用', async () => {
    const cache = new Map();

    const getData = async () => {
      return await new Promise(resolve => {
        setTimeout(() => {
          resolve('promise-data');
        }, 2000);
      });
    };

    const fetchData = (key: string) => {
      if (!cache.has(key)) {
        cache.set(key, getData());
      }
      return cache.get(key);
    };

    try {
      use(fetchData('testPromise') as MPromise<string>);
    } catch (err: any) {
      expect(err).toBeInstanceOf(Promise);
    }

    const Content = () => {
      const data = use(fetchData('aaa'));

      return <>{data}</>;
    };

    const App = () => {
      return (
        <Suspense fallback="loading">
          <Content />
        </Suspense>
      );
    };

    const { getByText } = render(<App />);

    expect(getByText('loading')).toBeInTheDocument();

    const element = await screen.findByText('promise-data');

    expect(element).toBeInTheDocument();
  });
});
