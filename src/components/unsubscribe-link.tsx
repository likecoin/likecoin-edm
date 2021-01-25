import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { wrapUtm } from '../utils/url';

import { Link } from './link';

export const UnsubscribeLink = () => (
  <Link href={wrapUtm('https://like.co/in/settings/others')}>
    <FormattedMessage id="unsubscribe.text" />
  </Link>
);
