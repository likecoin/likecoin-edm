import * as React from 'react';
import { MjmlColumn, MjmlImage, MjmlGroup } from 'mjml-react';
import { getAssetPath } from '../utils/url';

import { BasicSection } from './sections/basic';

export const HeaderSection = () => {
  return (
    <BasicSection
      paddingTop={32}
      paddingRight={40}
      paddingLeft={40}
      paddingBottom={32}
    >
      <MjmlGroup>
        <MjmlColumn width="65%">
          <MjmlImage
            align="left"
            width={145}
            src={getAssetPath(
              '/banners/like-coin-press-kit-liker-land-dark@3x.png'
            )}
          />
        </MjmlColumn>
      </MjmlGroup>
    </BasicSection>
  );
};
