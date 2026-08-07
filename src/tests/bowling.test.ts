import { test, expect } from '@jest/globals';
import { strike } from '../core/bowling';

test('should make a strike in the first attempt', () => {
  const strikeResult = strike([10, 0, 0]);
  const expected: number = 10;

  expect(strikeResult).toBe(expected);
});

test('should consider points after a strike', () => {
  const strikeResult = strike([10, 0, 5]);
  const expected: number = 15;

  expect(strikeResult).toBe(expected);
});

test('should not consider it as a strike if the first throw is not 10', () => {
  const strikeResult = strike([0, 10, 0]);
  const expected: number = 0;

  expect(strikeResult).toBe(expected);
});

test('given a collection of throws, should compute a strike correctly', () => {
  const strikeResult = strike([10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const expected: number = 11; /** 10 + 0 + 1 = 11 */

  expect(strikeResult).toBe(expected);
});

test('given an empty collection of throws, should consider it as a null strike', () => {
  const strikeResult = strike([]);
  const expected: number = 0;

  expect(strikeResult).toBe(expected);
});

test('given collection a throws, should compute a spare correctly', () => {
  const spareResult: number = spare([5, 5, 1]);
  const expected: number = 11;

  expect(spareResult).toBe(expected);
});
