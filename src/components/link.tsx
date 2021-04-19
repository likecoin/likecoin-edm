import * as React from 'react';

import * as Colors from '../constants/colors';
import { wrapUtm } from '../utils/url';

export interface LinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  isWrapUtm?: boolean;
  isCrispLink?: boolean;
}

export const Link = (props: LinkProps) => {
  const {
    children,
    href,
    style,
    isWrapUtm = false,
    isCrispLink = false,
    ...restProps
  } = props;
  let hrefToPass = href;
  if (href && isWrapUtm && isCrispLink) {
    hrefToPass = wrapUtm(href, '&');
  } else if (href && isWrapUtm) {
    hrefToPass = wrapUtm(href);
  }
  return (
    <a
      href={hrefToPass}
      target="_blank"
      rel="noreferrer noopener"
      style={{
        color: Colors.LikeGreen,
        textDecoration: 'underline',
        ...style,
      }}
      {...restProps}
    >
      {children}
    </a>
  );
};
