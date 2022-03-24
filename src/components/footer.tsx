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
import { FormattedMessage, useIntl } from 'react-intl';

const socialElements = [
  {
    key: 'discord',
    href: 'https://discord.gg/W4DQ6peZZZ',
    assetPath: '/social-elements/v2/discord.png',
  },
  {
    key: 'github',
    href: 'https://github.com/likecoin',
    assetPath: '/social-elements/v2/github.png',
  },
  {
    key: 'medium',
    href: 'https://medium.com/likecoin',
    assetPath: '/social-elements/v2/medium.png',
  },
];

export const FooterSection = () => {
  const intl = useIntl();
  return (
    <BasicSection
      backgroundColor="white"
      backgroundUrl={undefined}
      paddingTop={32}
      paddingBottom={24}
    >
      <MjmlColumn>
        <MjmlDivider
          paddingTop={32}
          paddingBottom={32}
          borderColor={Colors.PaleCyan}
          borderWidth={2}
        />
        <MjmlText
          paddingTop={24}
          paddingBottom={32}
          color={Colors.Grey4A}
          fontSize={16}
          align="center"
        >
          <FormattedMessage id="footer.follow-us" />
        </MjmlText>
        <MjmlImage
          width={220}
          src={getAssetPath(
            `/social-elements/v2/twitter-large-${intl.locale}.png`
          )}
          href="https://twitter.com/likecoin"
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
          <UnsubscribeLink />
        </MjmlText>
      </MjmlColumn>
    </BasicSection>
  );
};
