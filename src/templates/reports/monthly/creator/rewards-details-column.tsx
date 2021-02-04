import * as React from 'react';
import { MjmlColumn, MjmlTable, MjmlText } from 'mjml-react';
import { FormattedNumber } from 'react-intl';

import * as Colors from '../../../../constants/colors';

import { SignedNumber } from '../../../../components/signed-number';
import { TableRow } from '../../../../components/table-row';

import { MonthlyReportCreatorRewardsDetailsColumnProps } from './types';

export const MonthlyReportCreatorRewardsDetailsColumn = (
  props: MonthlyReportCreatorRewardsDetailsColumnProps
) => {
  const {
    title,
    amountInLIKE = 0,
    amountInUSD = 0,
    dataRows = [],
    children,
  } = props;
  return (
    <MjmlColumn width="40%">
      <MjmlText fontSize={12} fontWeight={600} align="center">
        {title}
      </MjmlText>
      <MjmlText
        color={Colors.LikeGreen}
        fontSize={26}
        fontWeight={600}
        align="center"
      >
        <FormattedNumber value={Number(amountInLIKE)} /> LIKE
      </MjmlText>
      <MjmlText
        paddingBottom={24}
        color={Colors.Grey9B}
        fontSize={12}
        align="center"
      >
        (USD <FormattedNumber value={Number(amountInUSD)} />
        )*
      </MjmlText>
      <MjmlTable cellpadding="8px">
        {dataRows.map((data, i) => (
          <TableRow
            key={i}
            verticalAlign="top"
            isLastChild={i === dataRows.length - 1}
          >
            <td>
              {data.label}
              {data.hint && (
                <div style={{ fontSize: 10, lineHeight: 1 }}>{data.hint}</div>
              )}
            </td>
            <td style={{ textAlign: 'right', fontWeight: 600 }}>
              {data.value} {data.valueUnit || ''}
            </td>
            <td style={{ textAlign: 'right', fontSize: 12 }}>
              {data.diff && Number(data.diff) !== 0 && (
                <SignedNumber
                  prefix="("
                  value={data.diff}
                  suffix={`${data.diffUnit || ''})`}
                />
              )}
            </td>
          </TableRow>
        ))}
      </MjmlTable>
      {children}
    </MjmlColumn>
  );
};
