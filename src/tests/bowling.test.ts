import { test, expect } from '@jest/globals';
import { strike } from '../core/bowling';

test('should make a strike in the first attempt', () => {
  const strikeResult = strike([10, 0, 0]);
  const expected: number = 10;

  expect(strikeResult).toBe(expected);
});
