export const generateRandomNumber: (maxNumber: number) => number = (maxNumber: number) => {
  let minNumber: number = 0;

  return Math.floor(minNumber + Math.random() * (maxNumber - minNumber));
};
