import * as React from 'react';
import {
  BorderProps,
  ClassNameProps,
  MjmlColumn,
  MjmlSectionProps,
  MjmlImage,
  PaddingProps,
} from 'mjml-react';

import { getAssetPath } from '../utils/url';

import { BasicSection, BasicSectionProps } from './sections/basic';

export const CivicLikerClassicBadge = (
  props: BasicSectionProps &
    MjmlSectionProps &
    BorderProps &
    PaddingProps &
    ClassNameProps
) => {
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
