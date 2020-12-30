import * as React from 'react';
import {
  MjmlColumn,
  MjmlSocial,
  MjmlSocialElement,
  MjmlText,
} from 'mjml-react';

import { BasicSection } from './section';

export const FooterSection = ({
  helpCenterText = 'Help Center',
  unsubscribeText = 'Unsubscribe',
}: {
  helpCenterText?: string;
  unsubscribeText?: string;
}) => {
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
          padding={8}
          innerPadding="6px"
          iconSize="28px"
          iconHeight="28px"
          borderRadius={24}
          containerBackgroundColor="white"
        >
          <MjmlSocialElement
            href="https://matters.news/@likecoin"
            src="https://static.like.co/email/images/links/matters.png"
          >
            {null}
          </MjmlSocialElement>
          <MjmlSocialElement
            href="https://t.me/likecoin"
            src="https://static.like.co/email/images/links/telegram.png"
          >
            {null}
          </MjmlSocialElement>
          <MjmlSocialElement
            href="https://medium.com/likecoin"
            src="https://static.like.co/email/images/links/medium.png"
          >
            {null}
          </MjmlSocialElement>
          <MjmlSocialElement
            src="https://static.like.co/email/images/links/github.png"
            href="https://github.com/likecoin"
          >
            {null}
          </MjmlSocialElement>
          <MjmlSocialElement
            src="https://static.like.co/email/images/links/twitter.png"
            href="https://twitter.com/likecoin"
          >
            {null}
          </MjmlSocialElement>
          <MjmlSocialElement
            src="https://static.like.co/email/images/links/facebook.png"
            href="https://www.facebook.com/groups/likecoin"
          >
            {null}
          </MjmlSocialElement>
        </MjmlSocial>
        <MjmlText align="center" padding={8}>
          <a
            href="https://docs.like.co/"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#28646e' }}
          >
            {helpCenterText}
          </a>
        </MjmlText>
        <MjmlText align="center" padding={8}>
          <a
            href="https://like.co/in/settings/others"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#28646e' }}
          >
            {unsubscribeText}
          </a>
        </MjmlText>
      </MjmlColumn>
    </BasicSection>
  );
};
