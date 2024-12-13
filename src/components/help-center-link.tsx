import * as React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { Link, LinkProps } from './link';

export const HelpCenterLink = (props: LinkProps) => {
  const intl = useIntl();
  return (
    <Link
      {...props}
      href={intl.formatMessage({ id: 'help.center.url' })}
      isWrapUtm={true}
    >
      <FormattedMessage id="help.center.text" />
    </Link>
  );
};
