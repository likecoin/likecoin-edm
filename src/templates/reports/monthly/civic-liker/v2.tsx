import * as React from 'react';
import {
  MjmlColumn,
  MjmlTable,
  MjmlText,
  MjmlButton,
  MjmlGroup,
} from 'mjml-react';
import { FormattedMessage, FormattedNumber, useIntl } from 'react-intl';

import { LIKER_LAND_ROOT } from '../../../../constants';
import * as Colors from '../../../../constants/colors';

import { getPriceEmojiURL } from '../../../../utils/civic';
import { getLocalizedOrdinalDay } from '../../../../utils/localization';

import { Avatar, SmallAvatar } from '../../../../components/avatar';
import { LikeCoinButtonCTA } from '../../../../components/cta-likecoin-button';
import { ClassicBadge } from '../../../../components/classic-badge';
import { FooterSection } from '../../../../components/footer';
import { HeaderSection } from '../../../../components/header';
import { Link } from '../../../../components/link';
import { BasicSection } from '../../../../components/sections/basic';
import { MonthlyReportHeaderSection } from '../../../../components/sections/monthly-report-header';
import { TableRow } from '../../../../components/table-row';
import { TemplateBase } from '../../../../components/template-base';
import {
  TwoNumbersSection,
  TextColumn,
} from '../../../../components/sections/two-numbers';

import { MonthlyReportCivicLikerV2TemplateProps } from './v2.types';

const MonthlyReportCivicLikerV2SubscribersDescription = ({
  language,
  billingDateTimestamp,
}: {
  language?: string;
  billingDateTimestamp?: number;
}) => {
  const intl = useIntl();
  return (
    <FormattedMessage
      id="report.monthly.civic-liker.subscribers.description"
      values={{
        a: (text: string) => (
          <Link href={`${LIKER_LAND_ROOT}/settings/civic`} isWrapUtm={true}>
            {text}
          </Link>
        ),
        day: getLocalizedOrdinalDay(intl, language, billingDateTimestamp),
      }}
    />
  );
};

const MonthlyReportCivicLikerV2CreatorsFundDescription = ({
  creatorfundingCreators,
}: {
  creatorfundingCreators: Array<any>;
  language?: string;
  billingDateTimestamp?: number;
}) => {
  return (
    <MjmlText>
      <FormattedMessage
        id={
          creatorfundingCreators.length > 0
            ? 'report.monthly.civic-liker.creatorsfund.description.main'
            : 'report.monthly.civic-liker.creatorsfund.description.none'
        }
        values={{
          a: (text: string) => <Link textDecoration="none">{text}</Link>,
          count: creatorfundingCreators.length,
        }}
      />
    </MjmlText>
  );
};

export const MonthlyReportCivicLikerV2Template = (
  props: MonthlyReportCivicLikerV2TemplateProps
) => {
  const {
    subject,
    language,
    likerID,
    displayName,
    avatarSrc,
    isCivicLiker = false,
    timestamp = 0,
    totalSupportedCreatorsBySubscription = 0,
    totalSupportedCreatorsByFund = 0,
    billingDateTimestamp,
    subscribingCreators = [],
    creatorfundingCreators = [],
    fundedCreatorsRemainsCount = 0,
  } = props;

  return (
    <TemplateBase language={language} subject={subject}>
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
          <FormattedMessage id="report.monthly.civic-liker.supported.v2" />
        }
        value1={totalSupportedCreatorsBySubscription}
        label1={
          <FormattedMessage id="report.monthly.civic-liker.supported.creators.subscription" />
        }
        value2={totalSupportedCreatorsByFund}
        label2={
          <FormattedMessage id="report.monthly.civic-liker.supported.creators.fund" />
        }
        shouldStackOnMobile={false}
      />

      <BasicSection>
        <MjmlColumn>
          <MjmlText paddingBottom={16} fontSize={16} fontWeight={600}>
            <FormattedMessage id="report.monthly.civic-liker.subscribers.title" />
          </MjmlText>
          <MjmlText paddingBottom={16} fontSize={16}>
            <MonthlyReportCivicLikerV2SubscribersDescription
              language={language}
              billingDateTimestamp={billingDateTimestamp}
            />
          </MjmlText>
          <MjmlTable cellpadding="8px">
            {subscribingCreators.map((creator, i) => (
              <TableRow key={creator.likerID} isFirstChild={i === 0}>
                <td width={48}>
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
                    href={`${LIKER_LAND_ROOT}/${creator.likerID}`}
                    isWrapUtm={true}
                    style={{ textDecoration: 'none', color: Colors.Grey4A }}
                  >
                    {creator.displayName}
                  </Link>
                </td>
                <td style={{ textAlign: 'right' }}>
                  <img
                    alt={`USD ${creator.amount}/mo`}
                    src={getPriceEmojiURL(creator.amount)}
                    width={18}
                    height={18}
                    style={{
                      width: 18,
                      height: 18,
                      verticalAlign: 'middle',
                      marginRight: 8,
                    }}
                  />
                  USD {creator.amount}/mo
                </td>
              </TableRow>
            ))}
          </MjmlTable>
          <MjmlText
            paddingTop={40}
            paddingBottom={16}
            fontSize={16}
            fontWeight={600}
          >
            <FormattedMessage id="report.monthly.civic-liker.creatorsfund.title" />
          </MjmlText>
          <MjmlText paddingBottom={16} fontSize={16}>
            <MonthlyReportCivicLikerV2CreatorsFundDescription
              creatorfundingCreators={creatorfundingCreators}
              language={language}
            />
          </MjmlText>
          <MjmlTable cellpadding="8px" fontSize="14px">
            <TableRow isLastChild={true}>
              {creatorfundingCreators &&
                creatorfundingCreators.map((creator, index) => {
                  return (
                    index < 22 && (
                      <SmallAvatar
                        key={creator.likerID}
                        src={creator.avatarSrc}
                        likerID={creator.likerID}
                        displayName={creator.displayName}
                        isCivicLiker={creator.isCivicLiker}
                        size={36}
                      />
                    )
                  );
                })}
              <td
                style={{ fontSize: 14, display: 'block', textAlign: 'center' }}
              >
                {fundedCreatorsRemainsCount > 0 && (
                  <MjmlText color={Colors.Grey9B} fontSize={14} align="right">
                    <FormattedMessage
                      id="report.monthly.civic-liker.creatorsfund.contents.more"
                      values={{ count: fundedCreatorsRemainsCount }}
                    />
                  </MjmlText>
                )}
              </td>
            </TableRow>
          </MjmlTable>
          {creatorfundingCreators.length === 0 && (
            <MjmlButton
              fontFamily="Helvetica-Bold"
              backgroundColor="#e6e6e6"
              color={Colors.Grey9B}
              fontSize="14px"
              borderRadius="23px"
              width="460px"
              height="46px"
            >
              <FormattedMessage id="report.monthly.civic-liker.creatorsfund.contents.none" />
            </MjmlButton>
          )}
        </MjmlColumn>
      </BasicSection>

      <ClassicBadge />

      <BasicSection paddingTop={0} paddingBottom={24} backgroundColor="white">
        <MjmlGroup>
          <TextColumn
            messageId={
              'report.monthly.civic-liker.creatorsfund.badge.description.start'
            }
            width="40%"
          />
          <MjmlColumn width={'20%'}>
            <MjmlText
              color={Colors.Grey4A}
              fontSize={42}
              fontWeight={600}
              align="center"
              lineHeight={'0.5'}
            >
              <FormattedNumber value={creatorfundingCreators.length} />
            </MjmlText>
          </MjmlColumn>
          <TextColumn
            messageId={
              'report.monthly.civic-liker.creatorsfund.badge.description.end'
            }
            width="40%"
          />
        </MjmlGroup>
      </BasicSection>

      <LikeCoinButtonCTA />

      <FooterSection />
    </TemplateBase>
  );
};
