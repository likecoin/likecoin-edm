import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import * as Colors from '../constants/colors';

import { Link, LinkProps } from './link';

export const UnsubscribeLinkV2 = ({ href, ...props }: LinkProps) => (
  <FormattedMessage
    id="unsubscribe.text.v2"
    values={{
      a: (chunks: string) => (
        <Link
          href={href || 'https://like.co/in/settings/others'}
          isWrapUtm={false}
          color={Colors.Black13}
          {...props}
        >
          {chunks}
        </Link>
      ),
    }}
  />
);
