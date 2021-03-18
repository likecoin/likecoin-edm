import { IntlShape } from 'react-intl';

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

export function getLocalizedMonthlyReportDate(
  intl: IntlShape,
  timestamp?: number
) {
  const [month, , year] = intl.formatDateToParts(timestamp, {
    year: 'numeric',
    month: intl.locale === 'en' ? 'short' : 'numeric',
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
  timestamp?: number
) {
  return intl.formatMessage(
    { id: `report.monthly.${type}.subject` },
    {
      date: getLocalizedMonthlyReportDate(intl, timestamp),
    }
  );
}

export function getLocalizedTransactionSubject(
  intl: IntlShape,
  amount: string
) {
  return intl.formatMessage({ id: 'transaction.subject' }, { amount: amount });
}

export function getLocalizedResetPasswordSubject(intl: IntlShape) {
  return intl.formatMessage({ id: 'reset-password.subject' });
}

export function getLocalizedNewSupporterSubject(intl: IntlShape) {
  return intl.formatMessage({ id: 'reset-new-supporter.subject' });
}

export function getLocalizedReferralTxSubject(intl: IntlShape) {
  return intl.formatMessage({ id: 'reset-referral-tx.subject' });
}
