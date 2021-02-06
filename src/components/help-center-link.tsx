import * as React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { Link } from './link';

export const HelpCenterLink = () => {
  const intl = useIntl();
  return (
    <Link href={intl.formatMessage({ id: 'help.center.url' })} isWrapUtm={true}>
      <FormattedMessage id="help.center.text" />
    </Link>
  );
};
