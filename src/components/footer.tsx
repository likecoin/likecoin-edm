import * as React from 'react';
import {
  MjmlButton,
  MjmlColumn,
  MjmlDivider,
  MjmlImage,
  MjmlSocial,
  MjmlSocialElement,
  MjmlText,
} from 'mjml-react';
import { FormattedMessage, useIntl } from 'react-intl';

import * as Colors from '../constants/colors';
import { getAssetPath, wrapUtm } from '../utils/url';

import { BasicSection } from './sections/basic';
import { HelpCenterLink } from './help-center-link';
import { UnsubscribeLink } from './unsubscribe-link';

const socialElements = [
  {
    key: 'discord',
    href: 'https://discord.gg/likecoin',
    assetPath: '/social-elements/v2/discord.png',
  },
  {
    key: 'github',
    href: 'https://github.com/likecoin',
    assetPath: '/social-elements/v2/github.png',
  },
  {
    key: 'blog',
    href: 'https://blog.like.co',
    assetPath: '/social-elements/v2/blog.png',
  },
  {
    key: 'instagram',
    href: 'https://www.instagram.com/liker.land',
    assetPath: '/social-elements/v2/instagram.png',
  },
];

export const FooterSection = ({
  unsubscribeLink,
  shouldShowDivider = true,
}: {
  unsubscribeLink?: string;
  shouldShowDivider?: boolean;
}) => {
  const intl = useIntl();
  return (
    <>
      <BasicSection backgroundColor="white">
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
            href={wrapUtm('https://newsletter.like.co')}
            rel="noopener noreferrer"
          >
            <FormattedMessage id="footer_newsletter_button" />
          </MjmlButton>
        </MjmlColumn>
      </BasicSection>
      <BasicSection
        backgroundColor="white"
        backgroundUrl={undefined}
        paddingTop={0}
        paddingBottom={24}
      >
        <MjmlColumn>
          <MjmlImage
            width={220}
            src={getAssetPath(
              `/social-elements/v2/twitter-large-${intl.locale}.png`
            )}
            href={wrapUtm('https://twitter.com/likerland')}
          />
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
                href={wrapUtm(href)}
                src={getAssetPath(assetPath)}
              >
                {null}
              </MjmlSocialElement>
            ))}
          </MjmlSocial>
          <MjmlText align="center" padding={4}>
            <HelpCenterLink />
          </MjmlText>
          <MjmlText align="center" padding={4}>
            <UnsubscribeLink link={unsubscribeLink} />
          </MjmlText>
        </MjmlColumn>
      </BasicSection>
    </>
  );
};
