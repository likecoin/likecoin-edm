import * as React from 'react';
import { MjmlColumn, MjmlImage, MjmlGroup } from 'mjml-react';
import { getAssetPath } from '../utils/url';

import { BasicSection } from './sections/basic';

interface HeaderSectionProps {
  rightItem?: React.ReactNode;
}

export const HeaderSection = (props: HeaderSectionProps) => {
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
            src={getAssetPath('/3ookcom-logo.png')}
          />
        </MjmlColumn>
        {!!props.rightItem && (
          <MjmlColumn width="35%">{props.rightItem}</MjmlColumn>
        )}
      </MjmlGroup>
    </BasicSection>
  );
};
