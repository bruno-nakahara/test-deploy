export const ConvertMonthToString = (year: number, month: number): string => {
  const date = new Date(year, month);
  return date.toLocaleString('default', { month: 'long' });
};

export const GetMonthDays = (year: number, month: number): number[] => {
  const days = new Date(year, month, 0);

  return Array.from({ length: days.getDate() }, (_, i) => i + 1);
};

export function MinTwoDigits(n: number) {
  return (n < 10 ? '0' : '') + n;
}
