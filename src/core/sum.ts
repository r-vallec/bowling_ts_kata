export const sum = (numbers: number[]): number => {
  let addition: number = 0;
  for (let i = 0; i < numbers.length; i++) {
    addition += numbers[i];
  }
  return addition;
};
