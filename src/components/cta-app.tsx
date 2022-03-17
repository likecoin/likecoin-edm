import * as React from 'react';
import { useIntl } from 'react-intl';

import {
  MjmlColumn,
  MjmlImage,
  MjmlSocial,
  MjmlSocialElement,
} from 'mjml-react';

import { getAssetPath, wrapUtm } from '../utils/url';

import { BasicSection } from './sections/basic';

const GET_APP_URL = wrapUtm('https://likecoin.page.link/likerland');

export const AppCTASection = () => {
  const intl = useIntl();
  const bannerSrc = getAssetPath(`/banners/cta-civic-liker/${intl.locale}.png`);
  return (
    <BasicSection paddingLeft={16} paddingRight={16}>
      <MjmlColumn>
        <MjmlImage
          src={bannerSrc}
          width={400}
          alt="Liker Land App"
          paddingBottom={16}
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
            src={getAssetPath('/badges/app-store.png')}
            href={GET_APP_URL}
          >
            {null}
          </MjmlSocialElement>
          <MjmlSocialElement
            iconSize="119px"
            iconHeight="35px"
            src={getAssetPath('/badges/google-play.png')}
            href={GET_APP_URL}
          >
            {null}
          </MjmlSocialElement>
        </MjmlSocial>
      </MjmlColumn>
    </BasicSection>
  );
};
