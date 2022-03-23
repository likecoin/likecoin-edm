import * as React from 'react';
import { MjmlColumn, MjmlImage } from 'mjml-react';

import { getAssetPath } from '../utils/url';

import { BasicSection, BasicSectionProps } from './sections/basic';

export const CivicLikerClassicBadge = (props: BasicSectionProps) => {
  return (
    <BasicSection
      backgroundColor="white"
      paddingTop={32}
      paddingBottom={24}
      {...props}
    >
      <MjmlColumn>
        <MjmlImage
          width={218}
          src={getAssetPath('/badges/civic-liker-icon@3x.png')}
        />
      </MjmlColumn>
    </BasicSection>
  );
};
