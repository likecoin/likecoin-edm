import * as React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { wrapUtm } from '../utils/url';

import { Link } from './link';

export const HelpCenterLink = () => {
  const intl = useIntl();
  return (
    <Link href={wrapUtm(intl.formatMessage({ id: 'help.center.url' }))}>
      <FormattedMessage id="help.center.text" />
    </Link>
  );
};
