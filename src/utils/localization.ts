import { FormatDateOptions, IntlShape } from 'react-intl';

const DEFAULT_TIMEZONE = 'Asia/Hong_Kong';

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
  intl: IntlShape,
  language?: string,
  timestamp: number = 0,
  { timeZone = DEFAULT_TIMEZONE, ...opts }: FormatDateOptions = {}
) {
  const [day] = intl.formatDateToParts(timestamp, {
    day: 'numeric',
    timeZone,
    ...opts,
  });
  if (language === 'en') {
    return getOrdinalNumber(parseInt(day.value));
  }
  return `${day.value}`;
}

export function getLocalizedMonthlyReportDate(
  intl: IntlShape,
  timestamp?: number,
  { timeZone = DEFAULT_TIMEZONE, ...opts }: FormatDateOptions = {}
) {
  const [month, , year] = intl.formatDateToParts(timestamp, {
    year: 'numeric',
    month: intl.locale === 'en' ? 'short' : 'numeric',
    timeZone,
    ...opts,
  });
  return intl.formatMessage(
    { id: 'report.monthly.date' },
    {
      month: month.value,
      year: year.value,
    }
  );
}

export function getLocalizedMonthlyReportSubject(
  intl: IntlShape,
  type: 'creator' | 'civic-liker',
  timestamp?: number,
  opts?: FormatDateOptions
) {
  return intl.formatMessage(
    { id: `report.monthly.${type}.subject` },
    {
      date: getLocalizedMonthlyReportDate(intl, timestamp, opts),
    }
  );
}
