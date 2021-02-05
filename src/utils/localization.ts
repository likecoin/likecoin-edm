export function getOrdinalNumber(value: number) {
  let suffix: string;
  const digit = value % 10;
  switch (digit) {
    case 1:
      suffix = 'st';
      break;
    case 2:
      suffix = 'nd';
      break;
    case 3:
      suffix = 'rd';
      break;
    default:
      suffix = 'th';
  }
  return `${value}${suffix}`;
}

export function getLocalizedOrdinalDay(
  language?: string,
  timestamp: number = 0
) {
  const date = new Date(Number(timestamp));
  const day = date.getDate();
  if (language === 'en') {
    return getOrdinalNumber(day);
  }
  return `${day}`;
}
