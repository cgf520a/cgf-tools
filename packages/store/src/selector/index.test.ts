import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import selector from './index';
import { STORE_SELECTOR } from '../share';

test('selector', () => {
  const selectorCount = selector({
    key: 'select_count',
    get: () => {},
  });

  expect(selectorCount.$$typeof).toBe(STORE_SELECTOR);
  expect(selectorCount.default).toBe(undefined);
  expect(selectorCount.key).toBe('select_count');
  expect(selectorCount.get).toBeInstanceOf(Function);
});
