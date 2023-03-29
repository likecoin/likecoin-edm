import * as React from 'react';
import { MjmlRaw } from 'mjml-react';

import { DEFAULT_AVATAR_URL, LIKER_LAND_ROOT } from '../constants';
import { getAssetPath } from '../utils/url';

import { Link, LinkProps } from './link';

export interface AvatarProps extends LinkProps {
  likerID?: string;
  displayName?: string;
  isCivicLiker?: boolean;
  src?: string;
  size?: number;
  align?: 'left' | 'center' | 'right';
  display?: string;
  lineHeight?: number;
}

export const Avatar = ({
  likerID = '',
  displayName = '',
  isCivicLiker = false,
  src = DEFAULT_AVATAR_URL,
  size = 40,
  align = 'center',
  display = 'block',
  lineHeight = 1,
  style,
  ...props
}: AvatarProps) => {
  return (
    <MjmlRaw>
      <Link
        href={`${LIKER_LAND_ROOT}/${likerID}`}
        isWrapUtm={true}
        style={{
          display: display,
          textAlign: align,
          padding: Math.ceil(size * 0.08),
          lineHeight: lineHeight,
          ...(isCivicLiker
            ? {
                backgroundImage: `url(${getAssetPath(
                  '/avatar/halo/civic-liker.png'
                )})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `center ${align}`,
                backgroundSize: 'contain',
              }
            : {}),
          ...style,
        }}
        {...props}
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
