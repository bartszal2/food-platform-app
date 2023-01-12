export const convertValueLessThanTen = (value: number): string | number => {
  let result = "";

  if (value < 10) {
    result = "0" + value;
    return result;
  } else {
    return value;
  }
};
