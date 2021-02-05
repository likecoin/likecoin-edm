import * as React from 'react';

import * as Colors from '../constants/colors';

export const Link = (
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) => {
  const { children, style, ...restProps } = props;
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      style={{ color: Colors.LikeGreen, textDecoration: 'underline', ...style }}
      {...restProps}
    >
      {children}
    </a>
  );
};
