export const bowlingGameResult = (throws: number[]): [number, number] => computeBowlingGameResult(throws);

import { sum } from './sum';

function computeStrike(next_throw: number, throw_after_next_one: number): number {
  return sum([10, next_throw, throw_after_next_one]);
}

function computeSpare(next_throw: number): number {
  return sum([10, next_throw]);
}

function computeBowlingGameResult(throws: number[]): [number, number] {
  let gameResult: number = 0;

  for (let i = 0; i < throws.length; i++) {
    /**
     * Since the sequence of throws is zero-based,
     * we need to check the item position first to compute strikes/spares correctly
     * */
    if (i % 2 === 0) {
      if (throws[i] == 10 && throws[i + 1] == 0) {
        gameResult += computeStrike(throws[i + 2], throws[i + 3]);
      }
      // Compute spares
      else if (throws[i] + throws[i + 1] == 10) {
        gameResult += computeSpare(throws[i + 2]);
      } else {
        gameResult += throws[i];
      }
    } else {
      // Do not count extra throws unless a strike happened.
      // If a strike occurred, we already counted it when we computed it.
      if (i <= 20) {
        gameResult += throws[i];
      }
    }
  }

  return [gameResult, throws.length];
}
