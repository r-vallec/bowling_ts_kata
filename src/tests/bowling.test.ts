import { test, expect } from '@jest/globals';
import { bowlingGameResult } from '../core/bowling';

test('given a collection of throws, should compute the total score including a strike in the first square correctly', () => {
  /**
   * strike = 10 + 2 + 3 = 15
   * total = 15 + 2 + 3 = 20
   * */
  const gameResult: [number, number] = bowlingGameResult([10, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const expectedResult: number = 20;
  const expectedNumberOfThrows: number = 20;

  expect(gameResult[0]).toBe(expectedResult);
  expect(gameResult[1]).toBe(expectedNumberOfThrows);
});

test('given a collection of throws, should compute the total score including a strike in the second square correctly', () => {
  const gameResult: [number, number] = bowlingGameResult([0, 0, 10, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  /**
   * strike = 10 + 0 + 2 = 12
   * rest = 2 + 3 = 5
   * total = 12 + 5 = 17
   * */
  const expectedResult: number = 17;
  const expectedNumberOfThrows: number = 20;

  expect(gameResult[0]).toBe(expectedResult);
  expect(gameResult[1]).toBe(expectedNumberOfThrows);
});

test('given a collection of throws, should compute the total score including a strike in the last square correctly', () => {
  const gameResult: [number, number] = bowlingGameResult([
    0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 2,
  ]);
  /**
   * strike = 10 + 0 + 2 = 12
   * rest = 2 + 3 = 5
   * total = 12 + 5 = 17
   * */
  const expectedResult: number = 17;
  const expectedNumberOfThrows: number = 22;

  expect(gameResult[0]).toBe(expectedResult);
  expect(gameResult[1]).toBe(expectedNumberOfThrows);
});

test('given a collection of throws, should compute the total score including a spare in the first square correctly', () => {
  const gameResult: [number, number] = bowlingGameResult([5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  /**
   * spare = 5 + 5 + 1 = 11
   * the rest of the throws = 11 + 17 failures (0)
   * total = 11 + 5 + 1 = 17
   * */
  const expectedResult: number = 17;
  const expectedNumberOfThrows: number = 20;

  expect(gameResult[0]).toBe(expectedResult);
  expect(gameResult[1]).toBe(expectedNumberOfThrows);
});

test('given a collection of throws, should compute the total score including a spare in the second square correctly', () => {
  const gameResult: number[] = bowlingGameResult([0, 0, 5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  /**
   * spare = 5 + 5 + 1 = 11
   * the rest of the throws = 5 + 1 + (17 failures * 0) = 6
   * total = 11 + 6 = 17
   * */
  const expectedResult: number = 17;
  const expectedNumberOfThrows: number = 20;

  expect(gameResult[0]).toBe(expectedResult);
  expect(gameResult[1]).toBe(expectedNumberOfThrows);
});

test('given a collection of throws, should compute the total score including an open frame correctly', () => {
  const gameResult: [number, number] = bowlingGameResult([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  /**
   * open frame = We didn't hit all the bolus in any turn
   * total = 20 * 1 = 20
   * */
  const expectedResult: number = 20;
  const expectedNumberOfThrows: number = 20;

  expect(gameResult[0]).toBe(expectedResult);
  expect(gameResult[1]).toBe(expectedNumberOfThrows);
});

test('given a collection of throws, should compute the total score when all throws failed', () => {
  const gameResult: number[] = bowlingGameResult([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  /**
   * 20 failures
   * total = 0
   * */
  const expectedResult: number = 0;
  const expectedNumberOfThrows: number = 20;

  expect(gameResult[0]).toBe(expectedResult);
  expect(gameResult[1]).toBe(expectedNumberOfThrows);
});

test('given an empty collection of throws, should consider it as a null game result', () => {
  const gameResult: [number, number] = bowlingGameResult([]);
  const expectedResult: number = 0;
  const expectedNumberOfThrows: number = 0;

  expect(gameResult[0]).toBe(expectedResult);
  expect(gameResult[1]).toBe(expectedNumberOfThrows);
});
