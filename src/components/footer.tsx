import * as React from 'react';
import {
  MjmlColumn,
  MjmlDivider,
  MjmlImage,
  MjmlSocial,
  MjmlSocialElement,
  MjmlText,
} from 'mjml-react';

import * as Colors from '../constants/colors';
import { getAssetPath } from '../utils/url';

import { BasicSection } from './sections/basic';
import { HelpCenterLink } from './help-center-link';
import { UnsubscribeLink } from './unsubscribe-link';
import { useIntl } from 'react-intl';

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
    <BasicSection
      backgroundColor="white"
      backgroundUrl={undefined}
      paddingTop={32}
      paddingBottom={24}
    >
      <MjmlColumn>
        {shouldShowDivider && (
          <MjmlDivider
            paddingTop={32}
            paddingBottom={32}
            borderColor={Colors.PaleCyan}
            borderWidth={2}
          />
        )}
        <MjmlImage
          width={220}
          src={getAssetPath(
            `/social-elements/v2/twitter-large-${intl.locale}.png`
          )}
          href="https://twitter.com/likerland"
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
              href={href}
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
  );
};
