import * as React from 'react';
import { MjmlRaw } from 'mjml-react';

import { DEFAULT_AVATAR_URL, LIKER_LAND_ROOT } from '../constants';
import { getAssetPath } from '../utils/url';

import { Link } from './link';

export interface AvatarProps {
  likerID?: string;
  displayName?: string;
  isCivicLiker?: boolean;
  src?: string;
  size?: number;
  align?: 'left' | 'center' | 'right';
}

export const Avatar = (props: AvatarProps) => {
  const {
    likerID = '',
    displayName = '',
    isCivicLiker = false,
    src = DEFAULT_AVATAR_URL,
    size = 40,
    align = 'center',
  } = props;
  return (
    <MjmlRaw>
      <Link
        href={`${LIKER_LAND_ROOT}/${likerID}`}
        style={{
          display: 'block',
          textAlign: align,
          padding: size * 0.08,
          lineHeight: 1,
          ...(isCivicLiker
            ? {
                backgroundImage: `url(${getAssetPath(
                  '/avatar/halo/civic-liker.png'
                )})`,
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: align,
                backgroundPositionY: 'center',
                backgroundSize: 'contain',
              }
            : {}),
        }}
      >
        <img
          src={src}
          alt={displayName || likerID}
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
