import * as React from 'react';

import { Link } from './link';

function getLocalizedHelpCenterLink(language?: string) {
  switch (language) {
    case 'zh':
    case 'cn':
      return 'https://docs.like.co/v/zh/';

    default:
      return 'https://docs.like.co/';
  }
}

function getLocalizedHelpCenterText(language?: string) {
  switch (language) {
    case 'zh':
      return '幫助中心';
    case 'cn':
      return '幫助中心';
    default:
      return 'Help Center';
  }
}

export const HelpCenterLink = ({ language }: { language?: string }) => (
  <Link href={getLocalizedHelpCenterLink(language)}>
    {getLocalizedHelpCenterText(language)}
  </Link>
);
