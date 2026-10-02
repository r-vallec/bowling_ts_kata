export const bowlingGameResult = (throws: number[]): [number, number] => computeBowlingGameResult(throws);

import { sum } from './sum';

function computeSpare(next_throw: number): number {
  return sum([10, next_throw]);
}

function computeBowlingGameResult(throws: number[]): [number, number] {
  let gameResult: number = 0;

  for (let i = 0; i < throws.length; i++) {
    /**
     * Since the sequence of throws is zero-based,
     * we need to check the item position first to compute spares correctly
     * */
    if (i % 2 === 0) {
      // Compute spares
      if (throws[i] + throws[i + 1] == 10) {
        gameResult += computeSpare(throws[i + 2]);
      }
    }
  }

  return [gameResult, throws.length];
}
