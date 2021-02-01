import * as React from 'react';

import * as Colors from '../constants/colors';

export interface TableRowProps extends React.PropsWithChildren<{}> {
  isFirstChild?: boolean;
  isLastChild?: boolean;
  verticalAlign?: 'top' | 'middle';
}

export const TableRow = (props: TableRowProps) => {
  const {
    isFirstChild,
    isLastChild,
    children,
    verticalAlign = 'middle',
  } = props;
  const border = `1px solid ${Colors.GreyD8}`;
  return (
    <tr
      style={{
        verticalAlign,
        borderTop: isFirstChild ? border : 'none',
        borderBottom: isLastChild ? 'none' : border,
      }}
    >
      {children}
    </tr>
  );
};
