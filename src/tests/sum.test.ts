import { test, expect } from '@jest/globals';
import { sum } from '../core/sum';

test('should sum a collection of two numbers', () => {
  const result: number = sum([1, 2]);
  const expected = 3;

  expect(result).toBe(expected);
});
