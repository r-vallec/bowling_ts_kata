export const strike = (throws: number[]): number => computeStrike(throws);
export const spare = (throws: number[]): number => computeSpare(throws);

import { sum } from './sum';

function computeStrike(throws: number[]) {
  if (throws[0] == 10) {
    return throws[0] + throws[1] + throws[2];
  }
  return 0;
}

function computeSpare(throws: number[]): number {
  if (throws[0] + throws[1] == 10) {
    return sum([10, throws[2]]);
  }
  return 0;
}
