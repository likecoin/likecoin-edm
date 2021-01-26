import * as React from 'react';
import {
  MjmlColumn,
  MjmlSocial,
  MjmlSocialElement,
  MjmlText,
} from 'mjml-react';

import { getAssetPath } from '../utils/url';

import { BasicSection } from './section';
import { HelpCenterLink } from './help-center-link';
import { UnsubscribeLink } from './unsubscribe-link';

export const FooterSection = () => {
  return (
    <BasicSection
      backgroundColor="white"
      backgroundUrl={undefined}
      paddingTop={24}
      paddingBottom={24}
    >
      <MjmlColumn>
        <MjmlSocial
          mode="horizontal"
          paddingTop={8}
          paddingBottom={8}
          innerPadding="6px"
          iconSize="28px"
          iconHeight="28px"
          borderRadius={24}
          containerBackgroundColor="white"
        >
          <MjmlSocialElement
            href="https://matters.news/@likecoin"
            src={getAssetPath('/social-elements/matters.png')}
          >
            {null}
          </MjmlSocialElement>
          <MjmlSocialElement
            href="https://t.me/likecoin"
            src={getAssetPath('/social-elements/telegram.png')}
          >
            {null}
          </MjmlSocialElement>
          <MjmlSocialElement
            href="https://medium.com/likecoin"
            src={getAssetPath('/social-elements/medium.png')}
          >
            {null}
          </MjmlSocialElement>
          <MjmlSocialElement
            src={getAssetPath('/social-elements/github.png')}
            href="https://github.com/likecoin"
          >
            {null}
          </MjmlSocialElement>
          <MjmlSocialElement
            src={getAssetPath('/social-elements/twitter.png')}
            href="https://twitter.com/likecoin"
          >
            {null}
          </MjmlSocialElement>
          <MjmlSocialElement
            src={getAssetPath('/social-elements/facebook.png')}
            href="https://www.facebook.com/groups/likecoin"
          >
            {null}
          </MjmlSocialElement>
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
