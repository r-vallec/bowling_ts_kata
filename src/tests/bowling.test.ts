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

// TODO: Test strike in the last square

// TODO: To delete redundant test
test('given a collection of throws, should compute the result of a bowling game including a strike correctly', () => {
  const gameResult: [number, number] = bowlingGameResult([10, 0, 1, 2, 3, 4, 5, 4, 7, 2, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  /**
   * strike = 10 + 0 + 1 = 11
   * the rest of the throws = 1 + 2 + 3 + 4 + 5 + 4 + 7 + 2 + 9 = 37
   * total = 11 + 37 = 50
   * */
  const expectedResult: number = 50;
  const expectedNumberOfThrows: number = 20;

  expect(gameResult[0]).toBe(expectedResult);
  expect(gameResult[1]).toBe(expectedNumberOfThrows);
});

// TODO: Relocate test to be after the one about null scores
test('given an empty collection of throws, should consider it as a null game result', () => {
  const gameResult: [number, number] = bowlingGameResult([]);
  const expectedResult: number = 0;
  const expectedNumberOfThrows: number = 0;

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

// TODO: Delete redundant test
test('given a collection of throws, should compute the result and the number of throws during the game including a strike', () => {
  const gameResult: number[] = bowlingGameResult([10, 0, 5, 5, 1, 2, 3, 4, 5, 4, 7, 2, 9, 0, 0, 0, 0, 0, 0, 0]);
  /**
   * strike = 10 + 5 + 5 = 20
   * the rest of the throws = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45
   * total = 20 + 45 = 65
   * */
  const expectedResult: number = 73;
  const expectedNumberOfThrows: number = 20;

  expect(gameResult[0]).toBe(expectedResult);
  expect(gameResult[1]).toBe(expectedNumberOfThrows);
});

// TODO: Relocate test to be after the previous about spares
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
