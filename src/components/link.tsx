import * as React from 'react';

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
      rel="noreferrer"
      style={{ color: '#28646e', ...style }}
      {...restProps}
    >
      {children}
    </a>
  );
};
