import * as React from 'react';
import { MjmlImage, MjmlRaw } from 'mjml-react';

import { DEFAULT_AVATAR_URL } from '../constants';

import { BasicTemplate, BasicTemplateProps } from './basic';

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
        isCivicLiker ? (
          <MjmlRaw>
            <div
              style={{
                textAlign: 'center',
                padding: 8,
                backgroundImage:
                  'url(https://static.like.co/avatar/halo/civic-liker.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
              }}
            >
              <img
                src={avatarURL}
                style={{
                  width: 102,
                  height: 102,
                  borderRadius: '100%',
                  objectFit: 'cover',
                  border: '2px solid #ccc',
                }}
              />
            </div>
          </MjmlRaw>
        ) : (
          <MjmlImage
            src={avatarURL}
            width={102}
            height={102}
            borderRadius={56}
            border="2px solid #ccc"
          />
        )
      }
    />
  );
};
