import { test, expect } from '@jest/globals';
import { bowlingGameResult } from '../core/bowling';

test('given a collection of throws, should compute a strike correctly', () => {
  /**
   * strike = 10 + 2 + 3 = 15
   * total = 15 + 2 + 3 = 20
   * */
  const gameResult: [number, number] = bowlingGameResult([10, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const expectedResult: number = 20;
  const expectedNumberOfThrows: number = 19;

  expect(gameResult[0]).toBe(expectedResult);
  expect(gameResult[1]).toBe(expectedNumberOfThrows);
});

test('given a collection of throws, should compute the result of a bowling game considering the throws after a strike correctly', () => {
  const gameResult: [number, number] = bowlingGameResult([10, 0, 5]);
  const expectedResult: number = 15;
  const expectedNumberOfThrows: number = 3;

  expect(gameResult[0]).toBe(expectedResult);
  expect(gameResult[1]).toBe(expectedNumberOfThrows);
});

test('given a collection of throws, should compute the result of a bowling game when not including a strike correctly', () => {
  const gameResult: [number, number] = bowlingGameResult([0, 10, 0]);
  const expectedResult: number = 10;
  const expectedNumberOfThrows: number = 3;

  expect(gameResult[0]).toBe(expectedResult);
  expect(gameResult[1]).toBe(expectedNumberOfThrows);
});

test('given a collection of throws, should compute the result of a bowling game including a strike correctly', () => {
  const gameResult: [number, number] = bowlingGameResult([10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  /**
   * strike = 10 + 0 + 1 = 11
   * the rest of the throws = 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 44
   * total = 11 + 44 = 55
   * */
  const expectedResult: number = 55;
  const expectedNumberOfThrows: number = 11;

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

test('given a collection of throws, should compute the result of a bowling game including a spare correctly', () => {
  const gameResult: [number, number] = bowlingGameResult([5, 5, 1]);
  const expectedResult: number = 11;
  const expectedNumberOfThrows: number = 3;

  expect(gameResult[0]).toBe(expectedResult);
  expect(gameResult[1]).toBe(expectedNumberOfThrows);
});

test('given a collection of throws, should compute the result of a bowling game including an open frame correctly', () => {
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

test('given a collection of throws, should compute the result and the number of throws during the game including a strike', () => {
  const gameResult: number[] = bowlingGameResult([10, 5, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  /**
   * strike = 10 + 5 + 5 = 20
   * the rest of the throws = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45
   * total = 20 + 45 = 65
   * */
  const expectedResult: number = 65;
  const expectedNumberOfThrows: number = 12;

  expect(gameResult[0]).toBe(expectedResult);
  expect(gameResult[1]).toBe(expectedNumberOfThrows);
});

test('given a collection of throws, should compute the result and the number of throws during the game including a spare', () => {
  const gameResult: number[] = bowlingGameResult([10, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  /**
   * spare = 10 + 5 = 15
   * the rest of the throws = 5 + 17 failures (0)
   * total = 15 + 5 = 20
   * */
  const expectedResult: number = 20;
  const expectedNumberOfThrows: number = 20;

  expect(gameResult[0]).toBe(expectedResult);
  expect(gameResult[1]).toBe(expectedNumberOfThrows);
});

test('given a collection of throws, should compute the result and the number of throws when all failed', () => {
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
