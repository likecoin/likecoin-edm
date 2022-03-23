import * as React from 'react';
import { useIntl } from 'react-intl';

import { MjmlColumn, MjmlImage } from 'mjml-react';

import { getAssetPath } from '../utils/url';

import { BasicSection, BasicSectionProps } from './sections/basic';

export const CivicLikerCTASection = (props: BasicSectionProps) => {
  const intl = useIntl();
  const bannerSrc = getAssetPath(`/banners/cta-civic-liker/${intl.locale}.png`);
  return (
    <BasicSection paddingLeft={16} paddingRight={16} {...props}>
      <MjmlColumn>
        <MjmlImage
          src={bannerSrc}
          width={400}
          alt="Join as a Civic Liker"
          paddingBottom={16}
        />
      </MjmlColumn>
    </BasicSection>
  );
};
