import * as React from 'react';
import { MjmlRaw } from 'mjml-react';

import { DEFAULT_AVATAR_URL } from '../constants';

import { Link } from './link';

export interface AvatarProps {
  likerID?: string;
  isCivicLiker?: boolean;
  src?: string;
  size?: number;
}

export const Avatar = (props: AvatarProps) => {
  const {
    likerID,
    isCivicLiker = false,
    src = DEFAULT_AVATAR_URL,
    size = 40,
  } = props;
  return (
    <MjmlRaw>
      <Link
        href={`https://liker.land/${likerID}`}
        style={{
          display: 'block',
          textAlign: 'center',
          padding: size * 0.08,
          ...(isCivicLiker
            ? {
                backgroundImage:
                  'url(https://static.like.co/avatar/halo/civic-liker.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
              }
            : {}),
        }}
      >
        <img
          src={src}
          alt=""
          style={{
            width: size,
            height: size,
            borderRadius: '100%',
            objectFit: 'cover',
            border: '2px solid #ccc',
          }}
        />
      </Link>
    </MjmlRaw>
  );
};
