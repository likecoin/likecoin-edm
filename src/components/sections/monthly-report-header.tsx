import * as React from 'react';
import { MjmlColumn, MjmlText } from 'mjml-react';

import * as Colors from '../../constants/colors';

import { Avatar } from '../avatar';
import { BasicSection } from './basic';
import { FormattedDateParts, FormattedMessage, useIntl } from 'react-intl';

export interface MonthlyReportHeaderSectionProps {
  avatarSrc?: string;
  isCivicLiker?: boolean;
  title?: React.ReactNode;
  timestamp?: number;
}

export const MonthlyReportHeaderSection = (
  props: MonthlyReportHeaderSectionProps
) => {
  const { title, timestamp = 0, avatarSrc, isCivicLiker = false } = props;
  const intl = useIntl();
  return (
    <BasicSection backgroundColor={Colors.LikeGreen}>
      <MjmlColumn>
        <Avatar
          src={avatarSrc}
          isCivicLiker={isCivicLiker}
          size={108}
          align="left"
        />
        <MjmlText fontSize={28} fontWeight={600} color="white" paddingTop={16}>
          {title}
        </MjmlText>
        <MjmlText fontSize={18} fontWeight={600} color={Colors.LikeCyan}>
          <FormattedDateParts
            value={new Date(Number(timestamp))}
            year="numeric"
            month={intl.locale === 'en' ? 'short' : 'numeric'}
          >
            {parts => (
              <FormattedMessage
                id="report.monthly.header.date"
                values={{
                  month: parts[0].value,
                  year: parts[2].value,
                }}
              />
            )}
          </FormattedDateParts>
        </MjmlText>
      </MjmlColumn>
    </BasicSection>
  );
};
