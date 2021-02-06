import * as React from 'react';

import * as Colors from '../constants/colors';
import { wrapUtm } from '../utils/url';

export interface LinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  isWrapUtm?: boolean;
}

export const Link = (props: LinkProps) => {
  const { children, href, style, isWrapUtm = false, ...restProps } = props;
  return (
    <a
      href={href && isWrapUtm ? wrapUtm(href) : href}
      target="_blank"
      rel="noreferrer noopener"
      style={{ color: Colors.LikeGreen, textDecoration: 'underline', ...style }}
      {...restProps}
    >
      {children}
    </a>
  );
};
