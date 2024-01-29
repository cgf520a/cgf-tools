import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import atom from './index';
import { STORE_STATE } from '../share';

test('atom', () => {
  const count = atom({
    key: 'count',
    default: 0,
  });

  expect(count.$$typeof).toBe(STORE_STATE);
  expect(count.key).toBe('count');
  expect(count.default).toBe(0);
  expect(count.get).toBe(undefined);
});
