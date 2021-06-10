import * as React from 'react';
import {
  MjmlColumn,
  MjmlTable,
  MjmlText,
  MjmlButton,
  MjmlWrapper,
} from 'mjml-react';
import { FormattedMessage, FormattedNumber, useIntl } from 'react-intl';

import { LIKER_LAND_ROOT } from '../../../../constants';
import * as Colors from '../../../../constants/colors';

import { getPriceEmojiURL } from '../../../../utils/civic';
import { getLocalizedOrdinalDay } from '../../../../utils/localization';

import { Avatar } from '../../../../components/avatar';
import { LikeCoinButtonCTA } from '../../../../components/cta-likecoin-button';
import { CivicLikerClassicBadge } from '../../../../components/classic-badge';
import { FooterSection } from '../../../../components/footer';
import { HeaderSection } from '../../../../components/header';
import { Link } from '../../../../components/link';
import { BasicSection } from '../../../../components/sections/basic';
import { MonthlyReportHeaderSection } from '../../../../components/sections/monthly-report-header';
import { TableRow } from '../../../../components/table-row';
import { TemplateBase } from '../../../../components/template-base';
import { TwoNumbersSection } from '../../../../components/sections/two-numbers';

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
  fundedCreatorsCount,
}: {
  fundedCreatorsCount: number;
  language?: string;
  billingDateTimestamp?: number;
}) => {
  return (
    <MjmlText>
      <FormattedMessage
        id={
          fundedCreatorsCount > 0
            ? 'report.monthly.civic-liker.creatorsfund.description.main'
            : 'report.monthly.civic-liker.creatorsfund.description.none'
        }
        values={{
          a: (text: string) => <Link textDecoration="none">{text}</Link>,
          count: fundedCreatorsCount,
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
    fundedCreators = [],
    fundedCreatorsRemainsCount = 0,
    isClassicSubscribed = false,
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
          {subscribingCreators.length > 0 && (
            <MjmlText paddingBottom={16} fontSize={16} fontWeight={600}>
              <FormattedMessage id="report.monthly.civic-liker.subscribers.title" />
            </MjmlText>
          )}
          {subscribingCreators.length > 0 && (
            <MjmlText paddingBottom={16} fontSize={16}>
              <MonthlyReportCivicLikerV2SubscribersDescription
                language={language}
                billingDateTimestamp={billingDateTimestamp}
              />
            </MjmlText>
          )}
          {subscribingCreators.length > 0 && (
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
          )}
          <MjmlText
            paddingTop={subscribingCreators.length > 0 ? 30 : 10}
            paddingBottom={16}
            fontSize={16}
            fontWeight={600}
          >
            <FormattedMessage id="report.monthly.civic-liker.creatorsfund.title" />
          </MjmlText>
          <MjmlText paddingBottom={16} fontSize={16}>
            <MonthlyReportCivicLikerV2CreatorsFundDescription
              fundedCreatorsCount={fundedCreators.length}
              language={language}
            />
          </MjmlText>
          <MjmlTable cellpadding="8px" fontSize="14px">
            <TableRow isLastChild={true}>
              {fundedCreators &&
                fundedCreators.slice(0, 11).map(creator => {
                  return (
                    <Avatar
                      key={creator.likerID}
                      src={creator.avatarSrc}
                      likerID={creator.likerID}
                      displayName={creator.displayName}
                      isCivicLiker={creator.isCivicLiker}
                      size={36}
                      display="inline"
                    />
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
          {fundedCreators.length === 0 && (
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

      {isClassicSubscribed && (
        <MjmlWrapper>
          <CivicLikerClassicBadge />

          <BasicSection
            paddingTop={0}
            paddingBottom={0}
            backgroundColor="white"
          >
            <MjmlColumn>
              <MjmlText fontSize={16} fontWeight={600} align="center">
                <FormattedMessage id="report.monthly.civic-liker.creatorsfund.badge.count.prepend" />
              </MjmlText>
            </MjmlColumn>
          </BasicSection>

          <BasicSection paddingBottom={24} backgroundColor="white">
            <MjmlColumn>
              <MjmlText
                fontSize={42}
                fontWeight={600}
                align="center"
                color={Colors.Grey4A}
                lineHeight="0.5"
              >
                <FormattedNumber value={fundedCreators.length} />
              </MjmlText>
            </MjmlColumn>
          </BasicSection>

          <BasicSection
            paddingTop={0}
            paddingBottom={0}
            backgroundColor="white"
          >
            <MjmlColumn>
              <MjmlText fontSize={16} fontWeight={600} align="center">
                <FormattedMessage id="report.monthly.civic-liker.creatorsfund.badge.count.append" />
              </MjmlText>
            </MjmlColumn>
          </BasicSection>
        </MjmlWrapper>
      )}

      <LikeCoinButtonCTA />

      <FooterSection />
    </TemplateBase>
  );
};
