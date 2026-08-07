export const bowlingGameResult = (throws: number[]): number => computeBowlingGameResult(throws);

import { sum } from './sum';

function computeStrike(throws: number[]) {
  return sum([throws[0], throws[1], throws[2]]);
}

function computeSpare(throws: number[]): number {
  return sum([10, throws[2]]);
}

function computeBowlingGameResult(throws: number[]): number {
  let gameResult: number;
  if (throws[0] == 10) {
    gameResult = computeStrike(throws);
    if (throws.length > 3) {
      gameResult += throws.slice(3).reduce((accumulator: number, currentNumber: number) => accumulator + currentNumber);
    }
  } else if (throws[0] + throws[1] == 10) {
    gameResult = computeSpare(throws);
    if (throws.length > 3) {
      gameResult += throws.slice(3).reduce((accumulator: number, currentNumber: number) => accumulator + currentNumber);
    }
  } else {
    gameResult = sum(throws);
  }
  return gameResult;
}
