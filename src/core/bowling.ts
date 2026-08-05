export const strike = (throws: number[]): number => computeStrike(throws);

function computeStrike(throws: number[]) {
  if (throws[0] == 10) {
    return throws[0] + throws[1] + throws[2];
  }
  return 0;
}
