import * as React from 'react';
import { useIntl } from 'react-intl';

import { MjmlColumn, MjmlImage } from 'mjml-react';

import { CIVIC_LIKER_STAKING_URL } from '../constants';
import { getAssetPath } from '../utils/url';

import { BasicSection, BasicSectionProps } from './sections/basic';

interface CivicLikerStakingCTASectionProps extends BasicSectionProps {
  isActive: boolean;
}

export const CivicLikerStakingCTASection = ({
  isActive,
  ...props
}: CivicLikerStakingCTASectionProps) => {
  const intl = useIntl();
  const bannerPath = `/banners/cta-civic-liker-staking/${
    isActive ? '' : 'in'
  }active/${intl.locale}.png`;
  const bannerSrc = getAssetPath(bannerPath);
  return (
    <BasicSection
      paddingLeft={16}
      paddingRight={16}
      backgroundColor="white"
      {...props}
    >
      <MjmlColumn>
        <MjmlImage src={bannerSrc} width={572} href={CIVIC_LIKER_STAKING_URL} />
      </MjmlColumn>
    </BasicSection>
  );
};
