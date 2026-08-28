export const bowlingGameResult = (throws: number[]): [number, number] => computeBowlingGameResult(throws);

import { sum } from './sum';

function computeStrike(throws: number[]) {
  return sum([throws[0], throws[1], throws[2]]);
}

function computeSpare(throws: number[]): number {
  return sum([10, throws[2]]);
}

function computeBowlingGameResult(throws: number[]): [number, number] {
  let gameResult: number;
  let firstThreeThrowsResult: number;

  /** Compute the result of the first 3 throws first */
  if (throws.length === 0) {
    firstThreeThrowsResult = 0;
  } else if (throws[0] == 10) {
    firstThreeThrowsResult = computeStrike(throws);
  } else if (throws[0] + throws[1] == 10) {
    firstThreeThrowsResult = computeSpare(throws);
  } else {
    firstThreeThrowsResult = throws[0] + throws[1] + throws[2];
  }

  /** Compute the game result by considering the rest of throws as well */
  if (throws.length > 3) {
    gameResult =
      firstThreeThrowsResult +
      throws.slice(1).reduce((accumulator: number, currentNumber: number) => accumulator + currentNumber);
  } else {
    gameResult = firstThreeThrowsResult;
  }

  return [gameResult, throws.length];
}
