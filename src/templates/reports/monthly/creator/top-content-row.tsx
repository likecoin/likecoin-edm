import * as React from 'react';
import { FormattedNumber } from 'react-intl';

import * as Colors from '../../../../constants/colors';

import { Link } from '../../../../components/link';
import { TableRow } from '../../../../components/table-row';

import { MonthlyReportCreatorTopContentRowProps } from './types';

export const MonthlyReportCreatorTopContentRow = (
  props: MonthlyReportCreatorTopContentRowProps
) => {
  const { url, title, imageSrc, likesCount = 0, isFirstChild = false } = props;
  return (
    <TableRow isFirstChild={isFirstChild}>
      <td width={64}>
        <Link href={url}>
          <img
            src={imageSrc}
            alt={title}
            style={{
              display: 'block',
              width: 64,
              height: 64,
              objectFit: 'cover',
            }}
          />
        </Link>
      </td>
      <td style={{ paddingLeft: 16, paddingRight: 16 }}>
        <Link
          href={url}
          style={{ color: Colors.Grey4A, textDecoration: 'none' }}
        >
          {title}
        </Link>
      </td>
      <td style={{ wordBreak: 'keep-all', textAlign: 'right' }}>
        <div style={{ color: Colors.LikeGreen, fontSize: 16, fontWeight: 600 }}>
          <FormattedNumber value={likesCount} />
        </div>
        <div style={{ fontSize: 12 }}>likes</div>
      </td>
    </TableRow>
  );
};
