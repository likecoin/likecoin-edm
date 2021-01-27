import * as React from 'react';
import { MjmlColumn, MjmlTable, MjmlText } from 'mjml-react';
import { FormattedNumber } from 'react-intl';

import * as Colors from '../../../../constants/colors';

import { SignedNumber } from '../../../../components/signed-number';

interface RewardsDetailsDataRow {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  value?: number;
  valueUnit?: React.ReactNode;
  diff?: number;
  diffUnit?: React.ReactNode;
}
export interface RewardsDetailsColumnProps extends React.PropsWithChildren<{}> {
  title?: React.ReactNode;
  amountInLIKE?: number;
  amountInUSD?: number;
  dataRows?: RewardsDetailsDataRow[];
}

export const RewardsDetailsColumn = (props: RewardsDetailsColumnProps) => {
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
          <tr
            key={i}
            style={{
              verticalAlign: 'top',
              borderTop: i > 0 ? `1px solid ${Colors.GreyD8}` : 'none',
            }}
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
            <td style={{ textAlign: 'right', fontWeight: 600 }}>
              <SignedNumber
                prefix="("
                value={data.diff}
                suffix={`${data.diffUnit || ''})`}
              />
            </td>
          </tr>
        ))}
      </MjmlTable>
      {children}
    </MjmlColumn>
  );
};
