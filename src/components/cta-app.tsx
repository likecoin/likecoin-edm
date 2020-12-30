import * as React from 'react';
import {
  MjmlColumn,
  MjmlImage,
  MjmlSocial,
  MjmlSocialElement,
} from 'mjml-react';

import { BasicSection } from './section';

const GET_APP_URL = 'https://likecoin.page.link/likerland';

export const AppCTASection = () => {
  return (
    <BasicSection
      paddingLeft={0}
      paddingRight={0}
      paddingTop={32}
      paddingBottom={32}
    >
      <MjmlColumn>
        <MjmlImage
          src="https://static.like.co/edm/banners/app-cta-en.png"
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
