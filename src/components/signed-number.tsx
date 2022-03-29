import * as React from 'react';

import * as Colors from '../constants/colors';

function getNumberColor(value: number) {
  if (value === 0) return undefined;
  return value > 0 ? Colors.Green : Colors.Red;
}

export interface SignedNumberProps {
  value?: string | number;
  isPercent?: boolean;
  prefix?: string;
  suffix?: string;
}

export const SignedNumber = (props: SignedNumberProps) => {
  const { value = 0, isPercent = false, prefix = '', suffix = '' } = props;
  let numericValue = Number(value);
  if (isPercent) {
    numericValue = Math.min(999, numericValue * 100);
  }
  const color = getNumberColor(numericValue);
  const sign = numericValue > 0 ? '+' : '';
  return (
    <span style={{ color, wordBreak: 'keep-all' }}>
      {prefix}
      {sign}
      {numericValue === 0 ? ' - ' : numericValue}
      {isPercent && '%'}
      {suffix}
    </span>
  );
};
