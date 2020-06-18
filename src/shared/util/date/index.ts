export const parseISOString = (s: string): Date => {
  const b: string[] = s.split(/\D+/);

  const templength = b.length;
  b.length = 7;
  b.fill("0", templength, b.length);

  return new Date(
    Date.UTC(
      Number(b[0]),
      Number(b[1]) - 1,
      Number(b[2]),
      Number(b[3]),
      Number(b[4]),
      Number(b[5]),
      Number(b[6])
    )
  );
};

export const dataFormat = (time: Date): string => {
  const minutesOffset = time.getTimezoneOffset();
  const millisecondsOffset = minutesOffset * 60 * 1000;
  const local = new Date(time.getTime() - millisecondsOffset);
  return local.toISOString().substr(0, 10);
};
const prependZero = (number: number): string => {
  return String(number < 10 ? "0" + number : number);
};

export const formatDateToString = (date: Date, format: string) => {
  return format.replace(
    /(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi,
    (value: string[] | string): string => {
      switch (value) {
        case "YYYY":
          return String(date.getFullYear());
        case "YY":
          return String(date.getFullYear()).slice(2, 4);
        case "MM":
          return prependZero(date.getMonth());
        case "DD":
          return prependZero(date.getDate());
        case "HH":
          return prependZero(date.getHours());
        case "hh":
          return prependZero(date.getHours());
        case "mm":
          return prependZero(date.getMinutes());
        case "ss":
          return prependZero(date.getSeconds());
        default:
          return "";
          break;
      }
    }
  );
};
