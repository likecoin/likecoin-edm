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
    href: 'https://3ookcom.substack.com/',
    assetPath: '/social-elements/v2/substack.png',
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
            color={Colors.LighterCyan}
            fontWeight={600}
            backgroundColor={Colors.Black13}
            borderRadius={14}
            href={wrapUtm('https://3ook.com/store', { source: 'edm-footer' })}
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
