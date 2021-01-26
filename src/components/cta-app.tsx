import * as React from 'react';
import { useIntl } from 'react-intl';

import {
  MjmlColumn,
  MjmlImage,
  MjmlSocial,
  MjmlSocialElement,
} from 'mjml-react';

import { wrapUtm } from '../utils/url';
import { BasicSection } from './section';

const GET_APP_URL = wrapUtm('https://likecoin.page.link/likerland');

export const AppCTASection = () => {
  const intl = useIntl();
  return (
    <BasicSection
      paddingLeft={16}
      paddingRight={16}
      paddingTop={32}
      paddingBottom={32}
    >
      <MjmlColumn>
        <MjmlImage
          src={intl.formatMessage({
            id: 'cta.app.banner.src',
            description: 'The URL of the CTA banner',
          })}
          width={400}
          alt="Liker Land App"
        />
        <MjmlSocial
          mode="horizontal"
          innerPadding="8px"
          paddingLeft={24}
          paddingRight={24}
        >
          <MjmlSocialElement
            iconSize="106px"
            iconHeight="35px"
            src="https://static.like.co/edm/badges/app-store.png"
            href={GET_APP_URL}
          >
            {null}
          </MjmlSocialElement>
          <MjmlSocialElement
            iconSize="119px"
            iconHeight="35px"
            src="https://static.like.co/edm/badges/google-play.png"
            href={GET_APP_URL}
          >
            {null}
          </MjmlSocialElement>
        </MjmlSocial>
      </MjmlColumn>
    </BasicSection>
  );
};
