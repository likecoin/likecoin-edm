import * as React from 'react';
import {
  MjmlColumn,
  MjmlGroup,
  MjmlText,
  MjmlWrapper,
  MjmlTable,
  MjmlImage,
} from 'mjml-react';
import { useIntl } from 'react-intl';
import { createCanvas } from 'canvas';
import * as Colors from '../../constants/colors';
import { getLocalizedMonthlyReportDate } from '../../utils/localization';
import { getAssetPath } from '../../utils/url';
import { User } from '../../types';

import { Avatar } from '../avatar';
import { BasicSection } from './basic';

const canvas = createCanvas(200, 100);
const ctx = canvas.getContext('2d');
ctx.font = '18px monospace';

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
      <BasicSection backgroundColor={Colors.LikeGreen} paddingBottom={0}>
        <MjmlGroup>
          <MjmlColumn width="20%">
            <MjmlImage
              width={68}
              height={65}
              align="left"
              src={getAssetPath('/icons/civic-liker-icon@3x.png')}
            />
          </MjmlColumn>
          <MjmlColumn width="80%">
            <MjmlTable paddingTop="8px" css-class="hoverTable" width="100%">
              <tr
                style={{
                  borderBottom: 'none',
                  color: 'white',
                  fontWeight: 'bolder',
                  fontSize: 18,
                }}
              >
                <td>
                  <Avatar
                    src={avatarSrc}
                    likerID={likerID}
                    displayName={displayName}
                    isCivicLiker={isCivicLiker}
                    size={48}
                    align="right"
                    lineHeight={0.5}
                  />
                </td>
                <td
                  style={{ textAlign: 'right' }}
                  width={ctx.measureText(likerID).width}
                >
                  <MjmlText>{likerID}</MjmlText>
                </td>
              </tr>
            </MjmlTable>
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
    </MjmlWrapper>
  );
};
