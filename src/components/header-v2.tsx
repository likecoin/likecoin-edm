import React from 'react';
import { MjmlGroup, MjmlColumn, MjmlImage } from 'mjml-react';

import * as Colors from '../constants/colors';
import { getAssetPath } from '../utils/url';
import { BasicSection } from './sections/basic';

export const HeaderV2Section = ({
  isFullLogo = true,
}: {
  isFullLogo?: boolean;
}) => {
  return (
    <BasicSection padding={32} backgroundColor={Colors.Black13}>
      <MjmlGroup>
        <MjmlColumn>
          {isFullLogo ? (
            <MjmlImage
              align="left"
              width={200}
              alt="3ook.com"
              src={getAssetPath('/3ookcom-full-logo.png')}
            />
          ) : (
            <MjmlImage
              align="center"
              width={32}
              alt="3ook.com"
              src={getAssetPath('/3ookcom-icon-logo.png')}
            />
          )}
        </MjmlColumn>
      </MjmlGroup>
    </BasicSection>
  );
};
