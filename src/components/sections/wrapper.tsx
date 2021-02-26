import * as React from 'react';
import {
  BorderProps,
  ClassNameProps,
  MjmlWrapper,
  MjmlWrapperProps,
  PaddingProps,
  RequiredChildrenProps,
} from 'mjml-react';

import { useTheme } from '../template-base';

export interface BasicWrapperProps {
  paddingX?: string | number;
  paddingY?: string | number;
}

export const BasicWrapper = ({
  children,
  paddingX,
  paddingY,
  ...props
}: BasicWrapperProps &
  MjmlWrapperProps &
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
    <MjmlWrapper
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
    </MjmlWrapper>
  );
};
