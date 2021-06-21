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
  wrapUtmPrefix?: string;
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
    wrapUtmPrefix,
    textDecoration = 'underline',
    ...restProps
  } = props;

  return (
    <a
      href={href && isWrapUtm ? wrapUtm(href, wrapUtmPrefix) : href}
      target="_blank"
      rel="noreferrer noopener"
      style={{
        color: Colors.LikeGreen,
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
