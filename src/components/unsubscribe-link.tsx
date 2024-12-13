import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { Link, LinkProps } from './link';

export const UnsubscribeLink = ({ href, ...props }: LinkProps) => (
  <Link
    {...props}
    href={href || 'https://like.co/in/settings/others'}
    isWrapUtm={true}
  >
    <FormattedMessage id="unsubscribe.text" />
  </Link>
);
