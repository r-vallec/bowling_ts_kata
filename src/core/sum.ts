export const sum = (numbers: number[]): number => {
  return numbers.reduce((accumulator: number, currentNumber: number) => accumulator + currentNumber);
};
