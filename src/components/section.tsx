import * as React from 'react';
import {
  BorderProps,
  ClassNameProps,
  MjmlSection,
  MjmlSectionProps,
  PaddingProps,
  RequiredChildrenProps,
} from 'mjml-react';

import { useTheme } from './template-base';

export const BasicSection = ({
  children,
  ...props
}: MjmlSectionProps &
  RequiredChildrenProps &
  BorderProps &
  PaddingProps &
  ClassNameProps) => {
  const {
    sectionWidth,
    sectionPaddingX,
    sectionBgURL,
    sectionBgColor,
  } = useTheme();
  return (
    <MjmlSection
      paddingTop={32}
      paddingBottom={32}
      paddingLeft={sectionPaddingX}
      paddingRight={sectionPaddingX}
      backgroundSize={sectionWidth}
      backgroundUrl={sectionBgURL}
      backgroundColor={sectionBgColor}
      {...props}
    >
      {children}
    </MjmlSection>
  );
};
