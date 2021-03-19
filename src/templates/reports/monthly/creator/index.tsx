import * as React from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import {
  MjmlColumn,
  MjmlDivider,
  MjmlGroup,
  MjmlImage,
  MjmlSection,
  MjmlTable,
  MjmlText,
} from 'mjml-react';

import { LIKER_LAND_ROOT } from '../../../../constants';
import * as Colors from '../../../../constants/colors';

import { parseArray } from '../../../../utils';
import { getAssetPath } from '../../../../utils/url';

import { SponsorLinkCTASection } from '../../../../components/cta-sponsor-link';
import { FooterSection } from '../../../../components/footer';
import { HeaderSection } from '../../../../components/header';
import { Link } from '../../../../components/link';
import { TemplateBase } from '../../../../components/template-base';
import { BasicSection } from '../../../../components/sections/basic';
import { MonthlyReportHeaderSection } from '../../../../components/sections/monthly-report-header';
import { SignedNumber } from '../../../../components/signed-number';

import { MonthlyReportCreatorTopContentRow } from './top-content-row';
import { MonthlyReportCreatorRewardsDetailsColumn } from './rewards-details-column';

import {
  MonthlyReportCreatorTemplateProps,
  MonthlyReportCreatorTopContent,
} from './types';

export const MonthlyReportCreatorTemplate = ({
  subject,
  language,
  likerID,
  displayName,
  avatarSrc,
  isCivicLiker,
  timestamp = Date.now(),
  totalRewardsInLIKE = 0,
  totalRewardsInUSD = 0,
  totalRewardsDiffPercentStr = '0',
  subscriptionAmountInLIKE = 0,
  subscriptionAmountInUSD = 0,
  subscribersCount = 0,
  subscribersDiff = 0,
  legacySubscribersCount = 0,
  legacySubscribersDiff = 0,
  fundAmountInLIKE = 0,
  fundAmountInUSD = 0,
  civicLikersCount = 0,
  civicLikersDiff = 0,
  likersCount = 0,
  likersDiff = 0,
  ...props
}: MonthlyReportCreatorTemplateProps) => {
  const topContents = parseArray<MonthlyReportCreatorTopContent>(
    props.topContents
  );
  return (
    <TemplateBase language={language} subject={subject}>
      <HeaderSection />

      <MonthlyReportHeaderSection
        likerID={likerID}
        displayName={displayName}
        avatarSrc={avatarSrc}
        isCivicLiker={isCivicLiker}
        title={<FormattedMessage id="report.monthly.creator.title" />}
        timestamp={timestamp}
      />

      <BasicSection paddingTop={48} paddingBottom={24} backgroundColor="white">
        <MjmlColumn>
          <MjmlText fontSize={16} fontWeight={600} align="center">
            <FormattedMessage id="report.monthly.creator.total" />
          </MjmlText>
        </MjmlColumn>
      </BasicSection>
      <BasicSection paddingY={0} backgroundColor="white">
        <MjmlGroup>
          <MjmlColumn width="15%">
            <MjmlText fontSize={12} color="transparent" lineHeight="36px">
              ({totalRewardsDiffPercentStr})
            </MjmlText>
          </MjmlColumn>
          <MjmlColumn width="70%">
            <MjmlText
              fontWeight={600}
              fontSize={36}
              lineHeight="36px"
              align="center"
              color={Colors.LikeGreen}
            >
              <FormattedNumber value={totalRewardsInLIKE} /> LIKE
            </MjmlText>
          </MjmlColumn>
          <MjmlColumn width="15%">
            <MjmlText fontSize={12} lineHeight="36px" align="right">
              <SignedNumber
                prefix="("
                value={totalRewardsDiffPercentStr}
                suffix="%)"
              />
            </MjmlText>
          </MjmlColumn>
        </MjmlGroup>
      </BasicSection>
      <BasicSection paddingTop={0} paddingBottom={48} backgroundColor="white">
        <MjmlColumn>
          <MjmlText color={Colors.Grey9B} align="center">
            (USD <FormattedNumber value={totalRewardsInUSD} />
            )*
          </MjmlText>
        </MjmlColumn>
      </BasicSection>

      <MjmlSection>
        <MjmlColumn>
          <MjmlDivider
            borderColor={Colors.GreyD8}
            width={100}
            borderWidth={2}
          />
        </MjmlColumn>
      </MjmlSection>

      <BasicSection
        paddingBottom={0}
        paddingX={24}
        paddingY={16}
        backgroundColor="white"
      >
        <MonthlyReportCreatorRewardsDetailsColumn
          title={<FormattedMessage id="report.monthly.creator.subscription" />}
          amountInLIKE={subscriptionAmountInLIKE}
          amountInUSD={subscriptionAmountInUSD}
          dataRows={[
            {
              label: (
                <FormattedMessage id="report.monthly.creator.subscribers" />
              ),
              value: subscribersCount,
              diff: subscribersDiff,
            },
            {
              label: (
                <FormattedMessage id="report.monthly.creator.subscribers.legacy" />
              ),
              hint: (
                <FormattedMessage id="report.monthly.creator.subscribers.legacy.hint" />
              ),
              value: legacySubscribersCount,
              diff: legacySubscribersDiff,
            },
          ]}
        >
          <MjmlText
            paddingTop={8}
            fontSize={12}
            fontWeight={600}
            align="center"
          >
            <Link href={`${LIKER_LAND_ROOT}/settings/support`} isWrapUtm={true}>
              <FormattedMessage id="report.monthly.creator.view-supporters" />
            </Link>
          </MjmlText>
        </MonthlyReportCreatorRewardsDetailsColumn>
        <MjmlColumn
          width={72}
          paddingLeft={24}
          paddingRight={24}
          paddingTop={32}
          paddingBottom={32}
        >
          <MjmlImage width={24} src={getAssetPath('/icons/plus.png')} />
        </MjmlColumn>
        <MonthlyReportCreatorRewardsDetailsColumn
          title={<FormattedMessage id="report.monthly.creator.fund" />}
          amountInLIKE={fundAmountInLIKE}
          amountInUSD={fundAmountInUSD}
          dataRows={[
            {
              label: (
                <FormattedMessage id="report.monthly.creator.likers.civic" />
              ),
              value: civicLikersCount,
              valueUnit: (
                <FormattedMessage
                  id="report.monthly.creator.unit"
                  values={{ value: civicLikersCount }}
                />
              ),
              diff: civicLikersDiff,
              diffUnit: '%',
            },
            {
              label: <FormattedMessage id="report.monthly.creator.likers" />,
              value: likersCount,
              valueUnit: (
                <FormattedMessage
                  id="report.monthly.creator.unit"
                  values={{ value: likersCount }}
                />
              ),
              diff: likersDiff,
              diffUnit: '%',
            },
          ]}
        />
      </BasicSection>

      <SponsorLinkCTASection likerID={likerID} />

      <BasicSection>
        <MjmlColumn>
          <MjmlText paddingBottom={16} fontSize={16} fontWeight={600}>
            <FormattedMessage id="report.monthly.creator.top-contents" />
          </MjmlText>
          <MjmlTable cellpadding="8px">
            {topContents.map((content, i) => (
              <MonthlyReportCreatorTopContentRow
                key={content.url}
                isFirstChild={i === 0}
                {...content}
              />
            ))}
          </MjmlTable>
        </MjmlColumn>
      </BasicSection>

      <FooterSection />
    </TemplateBase>
  );
};
