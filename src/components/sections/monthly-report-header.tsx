import * as React from 'react';
import { MjmlColumn, MjmlGroup, MjmlText, MjmlWrapper } from 'mjml-react';
import { FormattedMessage, useIntl } from 'react-intl';

import * as Colors from '../../constants/colors';

import { getLocalizedMonthlyReportDate } from '../../utils/localization';

import { User } from '../../types';

import { Avatar, CivicLiker } from '../avatar';
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
    <MjmlWrapper backgroundColor={Colors.LikeGreen}>
      <BasicSection
        backgroundColor={Colors.LikeGreen}
        paddingBottom={0}
        paddingRight={0}
      >
        <MjmlGroup>
          <MjmlColumn width={'70%'} cssClass={'header_columns_left'}>
            <CivicLiker
              src={avatarSrc}
              likerID={likerID}
              displayName={displayName}
              isCivicLiker={isCivicLiker}
              size={68}
              align="left"
            />
          </MjmlColumn>
          <MjmlColumn
            width={'8%'}
            paddingTop={10}
            cssClass={'header_columns_middle'}
          >
            <Avatar
              src={avatarSrc}
              likerID={likerID}
              displayName={displayName}
              isCivicLiker={isCivicLiker}
              size={48}
            />
          </MjmlColumn>
          <MjmlColumn width={'22%'} cssClass={'header_columns_right'}>
            <MjmlText
              fontSize={18}
              fontWeight={600}
              color="white"
              lineHeight="4.4"
              align="left"
              paddingLeft={20}
            >
              {likerID}
            </MjmlText>
          </MjmlColumn>
        </MjmlGroup>
      </BasicSection>
      <BasicSection backgroundColor={Colors.LikeGreen} paddingTop={0}>
        <MjmlColumn>
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
