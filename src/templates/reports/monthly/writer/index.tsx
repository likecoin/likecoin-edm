import * as React from 'react';
import { FormattedDate, FormattedMessage, FormattedNumber } from 'react-intl';
import {
  MjmlColumn,
  MjmlDivider,
  MjmlImage,
  MjmlSection,
  MjmlTable,
  MjmlText,
} from 'mjml-react';

import { LIKER_LAND_ROOT } from '../../../../constants';
import * as Colors from '../../../../constants/colors';
import { getAssetPath } from '../../../../utils/url';

import { SponsorLinkCTASection } from '../../../../components/cta-sponsor-link';
import { FooterSection } from '../../../../components/footer';
import { HeaderSection } from '../../../../components/header';
import { Link } from '../../../../components/link';
import { TemplateBase } from '../../../../components/template-base';
import {
  BasicSection,
  HeadingsWithAvatarSection,
} from '../../../../components/section';
import { SignedNumber } from '../../../../components/signed-number';

import {
  MonthlyReportWriterTopContent,
  WriterTopContentRow,
} from './top-content-row';
import { RewardsDetailsColumn } from './rewards-details-column';

function parseTopContents(contents?: MonthlyReportWriterTopContent[] | string) {
  let topContents: MonthlyReportWriterTopContent[] = [];
  try {
    if (typeof contents === 'string') {
      topContents = JSON.parse(contents);
    }
    if (!Array.isArray(topContents)) {
      throw new Error(
        'The given monthly report writer top contents is not array.'
      );
    }
  } catch {
    topContents = [];
  }
  return topContents;
}

export interface MonthlyReportWriterTemplateProps {
  language?: string;
  likerID?: string;
  avatarSrc?: string;
  isCivicLiker?: boolean;
  timestamp?: number;
  totalRewardsInLIKE?: number;
  totalRewardsInUSD?: number;
  totalRewardsDiffPercentStr?: string;
  subscriptionAmountInLIKE?: number;
  subscriptionAmountInUSD?: number;
  subscribersCount?: number;
  subscribersDiff?: number;
  legacySubscribersCount?: number;
  legacySubscribersDiff?: number;
  fundAmountInLIKE?: number;
  fundAmountInUSD?: number;
  civicLikersCount?: number;
  civicLikersDiff?: number;
  likersCount?: number;
  likersDiff?: number;
  topContents?: MonthlyReportWriterTopContent[] | string;
}

export const MonthlyReportWriterTemplate = ({
  language,
  likerID,
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
}: MonthlyReportWriterTemplateProps) => {
  const topContents = parseTopContents(props.topContents);
  return (
    <TemplateBase language={language}>
      <HeaderSection />

      <HeadingsWithAvatarSection
        avatarSrc={avatarSrc}
        isCivicLiker={isCivicLiker}
        title={<FormattedMessage id="report.monthly.writer.title" />}
        subtitle={
          <FormattedDate
            value={new Date(Number(timestamp))}
            year="numeric"
            month="short"
          />
        }
      />

      <BasicSection paddingTop={48} paddingBottom={24} backgroundColor="white">
        <MjmlColumn>
          <MjmlText fontSize={16} fontWeight={600} align="center">
            <FormattedMessage id="report.monthly.writer.total" />
          </MjmlText>
        </MjmlColumn>
      </BasicSection>
      <BasicSection paddingY={0} backgroundColor="white">
        <MjmlColumn width="15%">
          <MjmlText color="transparent" lineHeight="42px">
            ({totalRewardsDiffPercentStr})
          </MjmlText>
        </MjmlColumn>
        <MjmlColumn width="70%">
          <MjmlText
            fontWeight={600}
            fontSize={42}
            lineHeight="42px"
            align="center"
            color={Colors.LikeGreen}
          >
            <FormattedNumber value={totalRewardsInLIKE} /> LIKE
          </MjmlText>
        </MjmlColumn>
        <MjmlColumn width="15%">
          <MjmlText lineHeight="42px" align="right">
            <SignedNumber
              prefix="("
              value={totalRewardsDiffPercentStr}
              suffix="%)"
            />
          </MjmlText>
        </MjmlColumn>
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

      <BasicSection backgroundColor="white">
        <RewardsDetailsColumn
          title={<FormattedMessage id="report.monthly.writer.subscription" />}
          amountInLIKE={subscriptionAmountInLIKE}
          amountInUSD={subscriptionAmountInUSD}
          dataRows={[
            {
              label: (
                <FormattedMessage id="report.monthly.writer.subscribers" />
              ),
              value: subscribersCount,
              diff: subscribersDiff,
            },
            {
              label: (
                <FormattedMessage id="report.monthly.writer.subscribers.legacy" />
              ),
              hint: (
                <FormattedMessage id="report.monthly.writer.subscribers.legacy.hint" />
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
            <Link href={`${LIKER_LAND_ROOT}/settings/support`}>
              <FormattedMessage id="report.monthly.writer.view-supporters" />
            </Link>
          </MjmlText>
        </RewardsDetailsColumn>
        <MjmlColumn width={72} padding={24}>
          <MjmlImage width={24} src={getAssetPath('/icons/plus.png')} />
        </MjmlColumn>
        <RewardsDetailsColumn
          title={<FormattedMessage id="report.monthly.writer.fund" />}
          amountInLIKE={fundAmountInLIKE}
          amountInUSD={fundAmountInUSD}
          dataRows={[
            {
              label: (
                <FormattedMessage id="report.monthly.writer.likers.civic" />
              ),
              value: civicLikersCount,
              valueUnit: 'likes',
              diff: civicLikersDiff,
              diffUnit: '%',
            },
            {
              label: <FormattedMessage id="report.monthly.writer.likers" />,
              value: likersCount,
              valueUnit: 'likes',
              diff: likersDiff,
              diffUnit: '%',
            },
          ]}
        />
      </BasicSection>

      <BasicSection>
        <MjmlColumn>
          <MjmlText paddingBottom={16} fontSize={16} fontWeight={600}>
            <FormattedMessage id="report.monthly.writer.top-contents" />
          </MjmlText>
          <MjmlTable cellpadding="8px">
            {topContents.map((content, i) => (
              <WriterTopContentRow
                key={content.url}
                isFirstChild={i === 0}
                {...content}
              />
            ))}
          </MjmlTable>
        </MjmlColumn>
      </BasicSection>

      <SponsorLinkCTASection likerID={likerID} />

      <FooterSection />
    </TemplateBase>
  );
};
