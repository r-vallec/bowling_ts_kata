export const sum = (numbers: number[]): number => {
  if (numbers.length == 0) {
    return 0;
  }
  return numbers.reduce((accumulator: number, currentNumber: number) => accumulator + currentNumber);
};
