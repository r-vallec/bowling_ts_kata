import { test, expect } from '@jest/globals';
import { bowlingGameResult } from '../core/bowling';

test('given a collection of throws, should compute a strike correctly', () => {
  const strikeResult = bowlingGameResult([10, 0, 0]);
  const expected: number = 10;

  expect(strikeResult).toBe(expected);
});

test('given a collection of throws, should compute the result of a bowling game considering the throws after a strike correctly', () => {
  const gameResult = bowlingGameResult([10, 0, 5]);
  const expected: number = 15;

  expect(gameResult).toBe(expected);
});

test('given a collection of throws, should compute the result of a bowling game when not including a strike correctly', () => {
  const gameResult = bowlingGameResult([0, 10, 0]);
  const expected: number = 10;

  expect(gameResult).toBe(expected);
});

test('given a collection of throws, should compute the result of a bowling game including a strike correctly', () => {
  const gameResult = bowlingGameResult([10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  /**
   * strike = 10 + 0 + 1 = 11
   * the rest of the throws = 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 44
   * total = 11 + 44 = 55
   * */
  const expected: number = 55;

  expect(gameResult).toBe(expected);
});

test('given an empty collection of throws, should consider it as a null game result', () => {
  const gameResult = bowlingGameResult([]);
  const expected: number = 0;

  expect(gameResult).toBe(expected);
});

test('given a collection of throws, should compute the result of a bowling game including a spare correctly', () => {
  const gameResult: number = bowlingGameResult([5, 5, 1]);
  const expected: number = 11;

  expect(gameResult).toBe(expected);
});

test('given a collection of throws, should compute the result of a bowling game including an open frame correctly', () => {
  /** An open frame occurs when we don't hit all the bolus, which are 10 */
  const gameResult: number = bowlingGameResult([3, 5]);
  const expectedResult: number = 8;

  expect(gameResult).toBe(expectedResult);
});

test('given a collection of throws, should compute the result and the number of throws during the game including a strike', () => {
  const gameResult: number[] = bowlingGameResult([10, 5, 5]);
  const expectedResult: number = 20;
  const expectedNumberOfThrows: number = 3;

  expect(gameResult[0]).toBe(expectedResult);
  expect(gameResult[1]).toBe(expectedNumberOfThrows);
});
