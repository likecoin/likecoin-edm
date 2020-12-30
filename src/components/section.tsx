import * as React from 'react';
import {
  BorderProps,
  ClassNameProps,
  MjmlSection,
  MjmlSectionProps,
  PaddingProps,
  RequiredChildrenProps,
} from 'mjml-react';

export const BasicSection = ({
  children,
  ...props
}: MjmlSectionProps &
  RequiredChildrenProps &
  BorderProps &
  PaddingProps &
  ClassNameProps) => {
  return (
    <MjmlSection
      paddingLeft={8}
      paddingRight={8}
      backgroundSize={616}
      backgroundUrl="https://static.like.co/edm/templates/basic/bg.jpg"
      {...props}
    >
      {children}
    </MjmlSection>
  );
};
