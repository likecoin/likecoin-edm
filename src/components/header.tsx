import * as React from 'react';
import { MjmlColumn, MjmlImage } from 'mjml-react';

import { getAssetPath } from '../utils/url';

import { BasicSection } from './section';

export const HeaderSection = () => {
  return (
    <BasicSection
      paddingTop={32}
      paddingRight={40}
      paddingLeft={40}
      paddingBottom={32}
    >
      <MjmlColumn>
        <MjmlImage
          align="left"
          width={90}
          src={getAssetPath('/liker-land-logo.png')}
          href="https://liker.land"
        />
      </MjmlColumn>
    </BasicSection>
  );
};
