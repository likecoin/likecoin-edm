import * as React from 'react';
import {
  MjmlColumn,
  MjmlImage,
  MjmlSocial,
  MjmlSocialElement,
} from 'mjml-react';

import { BasicSection } from './section';

const GET_APP_URL = 'https://likecoin.page.link/likerland';

function getLocalizedBannerSrc(language?: string) {
  let suffix: string;
  switch (language) {
    case 'zh':
    case 'cn':
      suffix = language;
      break;
    default:
      suffix = 'en';
  }
  return `https://static.like.co/edm/banners/app-cta-${suffix}.png`;
}

export const AppCTASection = ({ language }: { language?: string }) => {
  return (
    <BasicSection
      paddingLeft={8}
      paddingRight={8}
      paddingTop={32}
      paddingBottom={32}
    >
      <MjmlColumn>
        <MjmlImage
          src={getLocalizedBannerSrc(language)}
          width={400}
          alt="Liker Land App"
        />
        <MjmlSocial mode="horizontal" innerPadding="8px">
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
