import * as React from 'react';

import { DEFAULT_AVATAR_URL } from '../constants';

import { BasicTemplate, BasicTemplateProps } from './basic';
import { Avatar } from '../components/avatar';

export interface BasicWithAvatarTemplateProps extends BasicTemplateProps {
  avatarURL?: string;
  isCivicLiker?: boolean;
}

export const BasicWithAvatarTemplate = ({
  avatarURL = DEFAULT_AVATAR_URL,
  isCivicLiker = false,
  ...props
}: BasicWithAvatarTemplateProps) => {
  return (
    <BasicTemplate
      {...props}
      titleTop={
        <Avatar src={avatarURL} isCivicLiker={isCivicLiker} size={100} />
      }
    />
  );
};
