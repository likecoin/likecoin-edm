import React from 'react';
import { MjmlSocial, MjmlSocialElement } from 'mjml-react';

import { wrapUtm, getAssetPath } from '../utils/url';

export const SOCIAL_ELEMENTS = [
  {
    key: 'instagram',
    href: 'https://www.instagram.com/3ookcom',
    assetPath: '/social-elements/v2/instagram.png',
  },
  {
    key: 'facebook',
    href: 'https://www.facebook.com/3ookcom',
    assetPath: '/social-elements/v2/facebook.png',
  },
  {
    key: 'threads',
    href: 'https://www.threads.com/@3ookcom',
    assetPath: '/social-elements/v2/threads.png',
  },
  {
    key: 'substack',
    href: 'https://review.3ook.com',
    assetPath: '/social-elements/v2/substack.png',
  },
];

export const SocialElements = ({
  paddingTop = 0,
  paddingBottom = 0,
}: {
  paddingTop?: number;
  paddingBottom?: number;
}) => {
  return (
    <MjmlSocial
      mode="horizontal"
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      innerPadding="6px"
      iconSize="32px"
      iconHeight="32px"
      borderRadius={16}
    >
      {SOCIAL_ELEMENTS.map(({ key, href, assetPath }) => (
        <MjmlSocialElement
          key={key}
          href={wrapUtm(href, { source: 'edm-footer' })}
          src={getAssetPath(assetPath)}
        >
          {null}
        </MjmlSocialElement>
      ))}
    </MjmlSocial>
  );
};
