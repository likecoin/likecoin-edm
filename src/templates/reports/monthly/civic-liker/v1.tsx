import * as React from 'react';
import { MjmlColumn, MjmlTable, MjmlText } from 'mjml-react';
import { FormattedMessage } from 'react-intl';

import { LIKER_LAND_ROOT } from '../../../../constants';
import * as Colors from '../../../../constants/colors';

import { parseArray } from '../../../../utils';
import { wrapUtm } from '../../../../utils/url';

import { Avatar } from '../../../../components/avatar';
import { LikeCoinButtonCTA } from '../../../../components/cta-likecoin-button';
import { FooterSection } from '../../../../components/footer';
import { HeaderSection } from '../../../../components/header';
import { Link } from '../../../../components/link';
import { BasicSection } from '../../../../components/sections/basic';
import { MonthlyReportHeaderSection } from '../../../../components/sections/monthly-report-header';
import { TableRow } from '../../../../components/table-row';
import { TwoNumbersSection } from '../../../../components/sections/two-numbers';
import { TemplateBase } from '../../../../components/template-base';

import {
  MonthlyReportCivicLikerV1TemplateProps,
  SupportedCreator,
} from './v1.types';

export const MonthlyReportCivicLikerV1Template = (
  props: MonthlyReportCivicLikerV1TemplateProps
) => {
  const {
    language,
    likerID,
    displayName,
    avatarSrc,
    isCivicLiker = false,
    timestamp = 0,
    creatorsCount = 0,
    contentsCount = 0,
  } = props;
  const supportedCreators = parseArray<SupportedCreator>(
    props.supportedCreators
  );
  return (
    <TemplateBase language={language}>
      <HeaderSection />

      <MonthlyReportHeaderSection
        likerID={likerID}
        displayName={displayName}
        avatarSrc={avatarSrc}
        isCivicLiker={isCivicLiker}
        title={<FormattedMessage id="report.monthly.civic-liker.title" />}
        timestamp={timestamp}
      />

      <TwoNumbersSection
        title={
          <FormattedMessage id="report.monthly.civic-liker.supported.v1" />
        }
        value1={creatorsCount}
        label1={
          <FormattedMessage id="report.monthly.civic-liker.supported.creators" />
        }
        value2={contentsCount}
        label2={
          <FormattedMessage id="report.monthly.civic-liker.supported.contents" />
        }
      />

      <LikeCoinButtonCTA />

      <BasicSection>
        <MjmlColumn>
          <MjmlText paddingBottom={16} fontSize={16} fontWeight={600}>
            <FormattedMessage id="report.monthly.civic-liker.supported.creators.title" />
          </MjmlText>
          <MjmlTable cellpadding="8px">
            {supportedCreators.map((creator, i) => (
              <TableRow key={creator.likerID} isFirstChild={i === 0}>
                <td style={{ width: 48 }}>
                  <Avatar
                    src={creator.avatarSrc}
                    likerID={creator.likerID}
                    displayName={creator.displayName}
                    isCivicLiker={creator.isCivicLiker}
                    size={48}
                  />
                </td>
                <td>
                  <Link
                    href={wrapUtm(`${LIKER_LAND_ROOT}/${creator.likerID}`)}
                    style={{ textDecoration: 'none', color: Colors.Grey4A }}
                  >
                    {creator.displayName}
                  </Link>
                </td>
                <td style={{ textAlign: 'right' }}>
                  <div style={{ color: Colors.LikeGreen, fontSize: 16 }}>
                    {creator.contentsCount}
                  </div>
                  <div style={{ fontSize: 12 }}>
                    <FormattedMessage id="report.monthly.civic-liker.supported.contents" />
                  </div>
                </td>
                <td style={{ textAlign: 'right' }}>
                  <div style={{ color: Colors.LikeGreen, fontSize: 16 }}>
                    {creator.amountInLIKE}
                  </div>
                  <div style={{ fontSize: 12 }}>LIKE</div>
                </td>
              </TableRow>
            ))}
          </MjmlTable>
        </MjmlColumn>
      </BasicSection>

      <FooterSection />
    </TemplateBase>
  );
};
