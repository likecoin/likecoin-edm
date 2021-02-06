import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { Link } from './link';

export const UnsubscribeLink = () => (
  <Link href={'https://like.co/in/settings/others'} isWrapUtm={true}>
    <FormattedMessage id="unsubscribe.text" />
  </Link>
);
