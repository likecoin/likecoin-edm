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
  padding,
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

  const paddingXWithFallback = React.useMemo(() => {
    if (paddingX !== undefined) return paddingX;
    if (padding !== undefined) return padding;
    return sectionPaddingX;
  }, [paddingX, padding, sectionPaddingX]);

  const paddingYWithFallback = React.useMemo(() => {
    if (paddingY !== undefined) return paddingY;
    if (padding !== undefined) return padding;
    return 32;
  }, [paddingY, padding]);

  return (
    <MjmlSection
      paddingTop={paddingYWithFallback}
      paddingBottom={paddingYWithFallback}
      paddingLeft={paddingXWithFallback}
      paddingRight={paddingXWithFallback}
      backgroundSize={sectionWidth}
      backgroundUrl={sectionBgURL}
      backgroundColor={sectionBgColor}
      {...props}
    >
      {children}
    </MjmlSection>
  );
};
