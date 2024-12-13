import * as React from 'react';
import {
  MjmlButton,
  MjmlColumn,
  MjmlDivider,
  MjmlSocial,
  MjmlSocialElement,
  MjmlText,
} from 'mjml-react';
import { FormattedMessage } from 'react-intl';

import * as Colors from '../constants/colors';
import { getAssetPath, wrapUtm } from '../utils/url';

import { BasicSection } from './sections/basic';
import { HelpCenterLink } from './help-center-link';
import { UnsubscribeLink } from './unsubscribe-link';

const socialElements = [
  {
    key: 'facebook',
    href: 'https://www.facebook.com/Liker.Land',
    assetPath: '/social-elements/v2/facebook.png',
  },
  {
    key: 'instagram',
    href: 'https://www.instagram.com/liker.land',
    assetPath: '/social-elements/v2/instagram.png',
  },
  {
    key: 'blog',
    href: 'https://blog.liker.land',
    assetPath: '/social-elements/v2/blog.png',
  },
];

export const FooterSection = ({
  unsubscribeLink,
  shouldShowDivider = true,
}: {
  unsubscribeLink?: string;
  shouldShowDivider?: boolean;
}) => {
  return (
    <>
      <BasicSection
        backgroundColor="white"
        backgroundUrl={undefined}
        paddingBottom={24}
      >
        <MjmlColumn>
          {shouldShowDivider && (
            <MjmlDivider
              paddingTop={0}
              paddingBottom={32}
              borderColor={Colors.PaleCyan}
              borderWidth={2}
            />
          )}
          <MjmlButton
            color={Colors.LikeGreen}
            fontWeight={600}
            backgroundColor={Colors.LighterCyan}
            borderRadius={14}
            href={wrapUtm('https://liker.land/store', { source: 'edm-footer' })}
            rel="noopener noreferrer"
          >
            <FormattedMessage id="footer_browse_store" />
          </MjmlButton>
          <MjmlSocial
            mode="horizontal"
            paddingTop={16}
            paddingBottom={16}
            innerPadding="6px"
            iconSize="32px"
            iconHeight="32px"
            borderRadius={16}
            containerBackgroundColor="white"
          >
            {socialElements.map(({ key, href, assetPath }) => (
              <MjmlSocialElement
                key={key}
                href={wrapUtm(href, { source: 'edm-footer' })}
                src={getAssetPath(assetPath)}
              >
                {null}
              </MjmlSocialElement>
            ))}
          </MjmlSocial>
          <MjmlText align="center" padding={4}>
            <HelpCenterLink utmSource="edm-footer" />
          </MjmlText>
          {!!unsubscribeLink && (
            <MjmlText align="center" padding={4}>
              <UnsubscribeLink href={unsubscribeLink} utmSource="edm-footer" />
            </MjmlText>
          )}
        </MjmlColumn>
      </BasicSection>
    </>
  );
};
