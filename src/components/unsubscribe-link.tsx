import * as React from 'react';
import { Link } from './link';

function getLocalizedUnsubscribeText(language?: string) {
  switch (language) {
    case 'zh':
      return '取消訂閱';
    case 'cn':
      return '幫助中心';
    default:
      return 'Unsubscribe';
  }
}

export const UnsubscribeLink = ({ language }: { language?: string }) => (
  <Link href="https://like.co/in/settings/others">
    {getLocalizedUnsubscribeText(language)}
  </Link>
);
