import * as React from 'react';

import * as Colors from '../constants/colors';
import { wrapUtm } from '../utils/url';
import { LIKER_LAND_ROOT } from '../constants';

export interface LinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  isWrapUtm?: boolean;
  utmMedium?: string;
  utmSource?: string;
  textDecoration?: string;
}

export interface GetAppLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

export const Link = (props: LinkProps) => {
  const {
    children,
    href,
    style,
    isWrapUtm = false,
    utmMedium,
    utmSource,
    textDecoration = 'underline',
    color = Colors.LikeGreen,
    ...restProps
  } = props;

  return (
    <a
      href={
        href && isWrapUtm
          ? wrapUtm(href, { medium: utmMedium, source: utmSource })
          : href
      }
      target="_blank"
      rel="noreferrer noopener"
      style={{
        color,
        textDecoration: textDecoration,
        ...style,
      }}
      {...restProps}
    >
      {children}
    </a>
  );
};

export const GetAppLink = (props: GetAppLinkProps) => {
  const { children } = props;
  return (
    <a
      href={`${LIKER_LAND_ROOT}/getapp`}
      target="_blank"
      rel="noreferrer noopener"
      color={Colors.Grey9B}
    >
      {children}
    </a>
  );
};
