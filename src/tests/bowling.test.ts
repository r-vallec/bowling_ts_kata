import { test, expect } from '@jest/globals';
import { strike } from '../core/bowling';

test('should make a strike in the first attempt', () => {
  const strikeResult = strike(10, 0, 0);
  const expected: number = 10;

  expect(strikeResult).toBe(expected);
});

test('should not consider it as a strike if the first throw is not 10', () => {
  const strikeResult = strike(0, 10, 0);
  const expected: number = 0;

  expect(strikeResult).toBe(expected);
});
