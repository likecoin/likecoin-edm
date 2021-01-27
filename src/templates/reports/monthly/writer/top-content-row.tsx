import * as React from 'react';
import { FormattedNumber } from 'react-intl';

import * as Colors from '../../../../constants/colors';

import { Link } from '../../../../components/link';

export interface MonthlyReportWriterTopContent {
  title?: string;
  imageSrc?: string;
  url?: string;
  likesCount?: number;
}

export interface WriterTopContentRowProps
  extends MonthlyReportWriterTopContent {
  isFirstChild?: boolean;
}

export const WriterTopContentRow = (props: WriterTopContentRowProps) => {
  const { url, title, imageSrc, likesCount = 0, isFirstChild = false } = props;
  const border = `1px solid ${Colors.GreyD8}`;
  return (
    <tr
      style={{
        borderTop: isFirstChild ? border : 'none',
        borderBottom: border,
      }}
    >
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
      <td style={{ maxWidth: 100, textAlign: 'right' }}>
        <div style={{ color: Colors.LikeGreen, fontSize: 16, fontWeight: 600 }}>
          <FormattedNumber value={likesCount} />
        </div>
        <div style={{ fontSize: 12 }}>likes</div>
      </td>
    </tr>
  );
};
