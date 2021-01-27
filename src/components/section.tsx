import * as React from 'react';
import {
  BorderProps,
  ClassNameProps,
  MjmlColumn,
  MjmlSection,
  MjmlSectionProps,
  MjmlText,
  PaddingProps,
  RequiredChildrenProps,
} from 'mjml-react';

import * as Colors from '../constants/colors';

import { useTheme } from './template-base';
import { Avatar } from './avatar';

export interface BasicSectionProps {
  paddingX?: string | number;
  paddingY?: string | number;
}

export const BasicSection = ({
  children,
  paddingX,
  paddingY,
  ...props
}: BasicSectionProps &
  MjmlSectionProps &
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

export interface HeadingsWithAvatarSectionProps {
  avatarSrc?: string;
  isCivicLiker?: boolean;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}

export const HeadingsWithAvatarSection = (
  props: HeadingsWithAvatarSectionProps
) => {
  const { title, subtitle, avatarSrc, isCivicLiker = false } = props;
  return (
    <BasicSection backgroundColor={Colors.LikeGreen}>
      <MjmlColumn>
        <Avatar
          src={avatarSrc}
          isCivicLiker={isCivicLiker}
          size={108}
          align="left"
        />
        <MjmlText fontSize={28} fontWeight={600} color="white" paddingTop={16}>
          {title}
        </MjmlText>
        <MjmlText fontSize={18} fontWeight={600} color={Colors.LikeCyan}>
          {subtitle}
        </MjmlText>
      </MjmlColumn>
    </BasicSection>
  );
};
