import * as React from 'react';
import {
  BorderProps,
  ClassNameProps,
  MjmlSection,
  MjmlSectionProps,
  PaddingProps,
  RequiredChildrenProps,
} from 'mjml-react';

import { useTheme } from '../template-base';

interface BasicSectionExtraProps {
  paddingX?: string | number;
  paddingY?: string | number;
}

export type BasicSectionProps = BasicSectionExtraProps &
  MjmlSectionProps &
  BorderProps &
  PaddingProps &
  ClassNameProps;

export const BasicSection = ({
  children,
  paddingX,
  paddingY,
  ...props
}: BasicSectionProps & RequiredChildrenProps) => {
  const {
    sectionWidth,
    sectionPaddingX,
    sectionBgURL,
    sectionBgColor,
  } = useTheme();
  return (
    <MjmlSection
      paddingTop={paddingY !== undefined ? paddingY : 32}
      paddingBottom={paddingY !== undefined ? paddingY : 32}
      paddingLeft={paddingX !== undefined ? paddingX : sectionPaddingX}
      paddingRight={paddingX !== undefined ? paddingX : sectionPaddingX}
      backgroundSize={sectionWidth}
      backgroundUrl={sectionBgURL}
      backgroundColor={sectionBgColor}
      {...props}
    >
      {children}
    </MjmlSection>
  );
};
