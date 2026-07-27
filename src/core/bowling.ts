export const strike = (firstThrow: number, secondThrow: number, thirdThrow: number): number =>
  computeStrike(firstThrow, secondThrow, thirdThrow);

function computeStrike(firstThrow: number, secondThrow: number, thirdThrow: number) {
  if (firstThrow == 10) {
    return firstThrow + secondThrow + thirdThrow;
  }
  return 0;
}
