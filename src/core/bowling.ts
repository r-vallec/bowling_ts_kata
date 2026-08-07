export const bowlingGameResult = (throws: number[]): number => computeBowlingGameResult(throws);

import { sum } from './sum';

function computeStrike(throws: number[]) {
  return sum([throws[0], throws[1], throws[2]]);
}

function computeSpare(throws: number[]): number {
  if (throws[0] + throws[1] == 10) {
    return sum([10, throws[2]]);
  }
  return 0;
}

function computeBowlingGameResult(throws: number[]): number {
  if (throws[0] == 10) {
    return computeStrike(throws);
  } else if (throws[0] + throws[1] == 10) {
    return computeSpare(throws);
  }
  return sum(throws);
}
