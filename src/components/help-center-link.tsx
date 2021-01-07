import * as React from 'react';

import { wrapUtm } from '../utils/url';

import { Link } from './link';

function getLocalizedHelpCenterLink(language?: string) {
  let url: string;
  switch (language) {
    case 'zh':
    case 'cn':
      url = 'https://docs.like.co/v/zh';
      break;

    default:
      url = 'https://docs.like.co';
  }
  return wrapUtm(url);
}

function getLocalizedHelpCenterText(language?: string) {
  switch (language) {
    case 'zh':
      return '幫助中心';
    case 'cn':
      return '帮助中心';
    default:
      return 'Help Center';
  }
}

export const HelpCenterLink = ({ language }: { language?: string }) => (
  <Link href={getLocalizedHelpCenterLink(language)}>
    {getLocalizedHelpCenterText(language)}
  </Link>
);
