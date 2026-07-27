export const strike = (firstThrow: number, secondThrow: number, thirdThrow: number): number =>
  computeStrike(firstThrow, secondThrow, thirdThrow);

function computeStrike(firstThrow: number, secondThrow: number, thirdThrow: number) {
  const isStrike: boolean = validateStrike(firstThrow);
  if (isStrike) {
    return firstThrow + secondThrow + thirdThrow;
  }
  return 0;
}

function validateStrike(firstThrow: number): boolean {
  if (firstThrow != 10) {
    return false;
  }
  return true;
}
