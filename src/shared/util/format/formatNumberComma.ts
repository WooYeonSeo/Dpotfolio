export const formatNumberComma = (number: number): string => {
  if (number == 0) return "0";

  const numberToStringwithCommaReg = /\B(?=(\d{3})+(?!\d))/g;
  let stringNumber = number.toString();
  stringNumber = stringNumber.replace(numberToStringwithCommaReg, ",");
  return stringNumber;
};
