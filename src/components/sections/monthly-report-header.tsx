import * as React from 'react';
import { MjmlColumn, MjmlText, MjmlWrapper } from 'mjml-react';
import { FormattedMessage, useIntl } from 'react-intl';

import * as Colors from '../../constants/colors';

import { getLocalizedMonthlyReportDate } from '../../utils/localization';

import { User } from '../../types';

import { Avatar } from '../avatar';
import { BasicSection } from './basic';

export interface MonthlyReportHeaderSectionProps extends User {
  title?: React.ReactNode;
  timestamp?: number;
}

export const MonthlyReportHeaderSection = (
  props: MonthlyReportHeaderSectionProps
) => {
  const {
    title = '',
    timestamp = 0,
    likerID = '',
    displayName = likerID,
    avatarSrc = '',
    isCivicLiker = false,
  } = props;
  const intl = useIntl();
  return (
    <MjmlWrapper>
      <BasicSection backgroundColor={Colors.LikeGreen}>
        <MjmlColumn>
          <Avatar
            src={avatarSrc}
            likerID={likerID}
            displayName={displayName}
            isCivicLiker={isCivicLiker}
            size={108}
            align="left"
          />
          <MjmlText
            fontSize={28}
            fontWeight={600}
            color="white"
            paddingTop={16}
          >
            {title}
          </MjmlText>
          <MjmlText fontSize={18} fontWeight={600} color={Colors.LikeCyan}>
            {getLocalizedMonthlyReportDate(intl, timestamp)}
          </MjmlText>
        </MjmlColumn>
      </BasicSection>
      <BasicSection backgroundColor="white" paddingBottom={0}>
        <MjmlColumn>
          <MjmlText color={Colors.LikeGreen} fontSize={16} fontWeight={600}>
            <FormattedMessage id="greeting" values={{ name: displayName }} />
          </MjmlText>
        </MjmlColumn>
      </BasicSection>
    </MjmlWrapper>
  );
};
