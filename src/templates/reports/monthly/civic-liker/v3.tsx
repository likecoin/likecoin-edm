import * as React from 'react';
import {
  MjmlColumn,
  MjmlTable,
  MjmlText,
  MjmlButton,
  MjmlDivider,
  MjmlImage,
} from 'mjml-react';
import { FormattedMessage, useIntl } from 'react-intl';

import {
  CIVIC_LIKER_STAKING_URL,
  LIKER_LAND_ROOT,
} from '../../../../constants';
import * as Colors from '../../../../constants/colors';
import { getLocalizedMonthlyReportDate } from '../../../../utils/localization';
import { getAssetPath } from '../../../../utils/url';

import { Avatar } from '../../../../components/avatar';
import { CivicLikerCTASection } from '../../../../components/cta-civic-liker';
import { CivicLikerStakingCTASection } from '../../../../components/cta-civic-liker-staking';
import { FooterSection } from '../../../../components/footer';
import { HeaderSection } from '../../../../components/header';
import { Link } from '../../../../components/link';
import { BasicSection } from '../../../../components/sections/basic';
import { MonthlyReportHeaderSection } from '../../../../components/sections/monthly-report-header';
import { TableRow } from '../../../../components/table-row';
import { TemplateBase } from '../../../../components/template-base';

import {
  CivicLikerV3StatusBannerProps,
  MonthlyReportCivicLikerV3TemplateProps,
} from './v3.types';

const CivicLikerV3StatusBanner = (props: CivicLikerV3StatusBannerProps) => {
  const intl = useIntl();
  const bannerPath = `/banners/civic-liker-v3-status/${
    props.isActive ? '' : 'in'
  }active.png`;
  const bannerSrc = getAssetPath(bannerPath);
  return (
    <BasicSection backgroundColor="white">
      <MjmlColumn>
        <MjmlImage src={bannerSrc} width={528} />
        {!!props.activeSince && (
          <MjmlText
            paddingTop={8}
            fontSize={12}
            color={Colors.Grey9B}
            align="center"
          >
            <FormattedMessage
              id="report.monthly.civic-liker.v3.active-since"
              values={{
                date: getLocalizedMonthlyReportDate(intl, props.activeSince),
              }}
            />
          </MjmlText>
        )}
      </MjmlColumn>
    </BasicSection>
  );
};

export const MonthlyReportCivicLikerV3Template = (
  props: MonthlyReportCivicLikerV3TemplateProps
) => {
  const {
    subject,
    language,
    likerID,
    displayName,
    avatarSrc,
    isCivicLiker = false,
    timestamp = 0,
    activeSince,
    totalSupportedAmount = 0,
    totalSupportedAmountInUSD = 0,
    balance = 0,
    balanceInUSD = 0,
    delegationRewards = 0,
    creatorsFundRewards = 0,
    supportedWorkCount = 0,
    supportedCreatorCount = 0,
    supportedCreators = [],
  } = props;

  return (
    <TemplateBase language={language} subject={subject}>
      <HeaderSection
        rightItem={
          <MjmlText
            paddingTop={12}
            paddingBottom={12}
            fontSize={14}
            lineHeight="1"
            align="right"
          >
            <a
              href={CIVIC_LIKER_STAKING_URL}
              rel="noopener noreferrer"
              style={{ color: Colors.Grey9B, textDecoration: 'underline' }}
            >
              <FormattedMessage id="header.manage-delegation" />
            </a>
          </MjmlText>
        }
      />

      <MonthlyReportHeaderSection
        likerID={likerID}
        displayName={displayName}
        avatarSrc={avatarSrc}
        isCivicLiker={isCivicLiker}
        title={<FormattedMessage id="report.monthly.civic-liker.title" />}
        timestamp={timestamp}
      />

      <CivicLikerV3StatusBanner
        isActive={isCivicLiker}
        activeSince={activeSince}
      />

      <BasicSection backgroundColor="white" paddingBottom={0}>
        <MjmlColumn>
          <MjmlText
            paddingBottom={32}
            color={Colors.Grey4A}
            fontSize={16}
            fontWeight={600}
            align="center"
          >
            <FormattedMessage id="report.monthly.civic-liker.v3.total-supported-balance" />
          </MjmlText>
          <MjmlText
            color={Colors.LikeGreen}
            fontSize={48}
            fontWeight={600}
            lineHeight="1"
            align="center"
          >
            {totalSupportedAmount}
          </MjmlText>
          <MjmlText
            color={Colors.LikeGreen}
            fontSize={20}
            fontWeight={600}
            align="center"
          >
            /{balance}
          </MjmlText>
          <MjmlText color={Colors.Grey9B} fontSize={14} align="center">
            ({totalSupportedAmountInUSD}/{balanceInUSD} USD)*
          </MjmlText>
        </MjmlColumn>
      </BasicSection>

      <BasicSection backgroundColor="white" paddingTop={0} paddingBottom={0}>
        <MjmlColumn>
          <MjmlDivider
            paddingTop={56}
            paddingLeft={20}
            paddingRight={20}
            paddingBottom={24}
            borderWidth={1}
            borderColor={Colors.PaleCyan}
          />
          <MjmlText
            color={Colors.Grey4A}
            fontSize={12}
            fontWeight={600}
            align="center"
          >
            <FormattedMessage id="report.monthly.civic-liker.v3.delegation-rewards" />
          </MjmlText>
          <MjmlText
            paddingBottom={24}
            color={Colors.LikeGreen}
            fontSize={32}
            fontWeight={600}
            align="center"
          >
            <span style={{ fontWeight: 400 }}>+ </span>
            {delegationRewards}
            <span style={{ fontSize: 16 }}> $LIKE</span>
          </MjmlText>
          <MjmlButton
            color={Colors.LikeGreen}
            fontWeight={600}
            backgroundColor={Colors.LighterCyan}
            borderRadius={9999}
            href={CIVIC_LIKER_STAKING_URL}
            rel="noopener noreferrer"
          >
            <FormattedMessage
              id={
                isCivicLiker
                  ? 'report.monthly.civic-liker.v3.delegate.active'
                  : 'report.monthly.civic-liker.v3.delegate.inactive'
              }
            />
          </MjmlButton>
        </MjmlColumn>
        <MjmlColumn>
          <MjmlDivider
            paddingTop={56}
            paddingLeft={20}
            paddingRight={20}
            paddingBottom={24}
            borderWidth={1}
            borderColor={Colors.PaleCyan}
          />
          <MjmlText
            color={Colors.Grey4A}
            fontSize={12}
            fontWeight={600}
            align="center"
          >
            <FormattedMessage id="report.monthly.civic-liker.v3.creators-fund-rewards" />
          </MjmlText>
          <MjmlText
            paddingBottom={24}
            color={Colors.LikeGreen}
            fontSize={32}
            fontWeight={600}
            align="center"
          >
            <span style={{ fontWeight: 400 }}>+ </span>
            {creatorsFundRewards}
            <span style={{ fontSize: 16 }}> $LIKE</span>
          </MjmlText>
          <MjmlText
            paddingBottom={24}
            paddingRight={20}
            paddingLeft={20}
            color={Colors.Grey9B}
            fontSize={14}
            align="center"
          >
            <FormattedMessage id="report.monthly.civic-liker.v3.creators-fund.description" />
          </MjmlText>
        </MjmlColumn>
      </BasicSection>

      {isCivicLiker ? (
        <CivicLikerStakingCTASection isActive={true} />
      ) : (
        <CivicLikerCTASection backgroundColor="white" />
      )}

      <BasicSection paddingBottom={0}>
        <MjmlColumn>
          <MjmlText
            color={Colors.Grey4A}
            fontSize={16}
            fontWeight={600}
            align="center"
          >
            <FormattedMessage id="report.monthly.civic-liker.v3.distributerd-to" />
          </MjmlText>
        </MjmlColumn>
      </BasicSection>
      <BasicSection>
        <MjmlColumn>
          <MjmlText
            color={Colors.LikeGreen}
            fontSize={32}
            fontWeight={600}
            align="center"
          >
            {supportedCreatorCount}
          </MjmlText>
          <MjmlText color={Colors.Grey4A} fontSize={14} align="center">
            <FormattedMessage
              id="report.monthly.civic-liker.v3.creator"
              values={{ count: supportedCreatorCount }}
            />
          </MjmlText>
        </MjmlColumn>
        <MjmlColumn>
          <MjmlText
            color={Colors.LikeGreen}
            fontSize={32}
            fontWeight={600}
            align="center"
          >
            {supportedWorkCount}
          </MjmlText>
          <MjmlText color={Colors.Grey4A} fontSize={14} align="center">
            <FormattedMessage
              id="report.monthly.civic-liker.v3.work"
              values={{ count: supportedWorkCount }}
            />
          </MjmlText>
        </MjmlColumn>
      </BasicSection>

      <BasicSection paddingBottom={0}>
        <MjmlColumn>
          <MjmlText
            color={Colors.Grey4A}
            fontSize={16}
            fontWeight={600}
            align="center"
          >
            <FormattedMessage id="report.monthly.civic-liker.v3.top-supported" />
          </MjmlText>
        </MjmlColumn>
      </BasicSection>
      <BasicSection>
        <MjmlColumn backgroundColor="white">
          <MjmlTable cellpadding="8px">
            {supportedCreators.map((creator, i) => (
              <TableRow key={creator.likerID} isFirstChild={i === 0}>
                <td
                  width={48}
                  style={{ paddingLeft: 24, paddingBottom: 16, paddingTop: 16 }}
                >
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
                    style={{ textDecoration: 'none', color: Colors.LikeGreen }}
                  >
                    {creator.displayName}
                  </Link>
                </td>
                <td style={{ textAlign: 'right' }}>
                  <span style={{ color: Colors.LikeGreen }}>
                    {creator.workCount}
                  </span>
                  <br />
                  <FormattedMessage
                    id="report.monthly.civic-liker.v3.work"
                    values={{ count: creator.workCount }}
                  />
                </td>
                <td style={{ textAlign: 'right', paddingRight: 24 }}>
                  <span style={{ color: Colors.LikeGreen }}>
                    {creator.likeAmount}
                  </span>
                  <br />
                  $LIKE
                </td>
              </TableRow>
            ))}
          </MjmlTable>
        </MjmlColumn>
      </BasicSection>

      <FooterSection />

      <BasicSection>
        <MjmlColumn>
          <MjmlText color={Colors.Grey9B} fontSize={12}>
            *<FormattedMessage id="report.monthly.civic-liker.v3.disclaimer" />
          </MjmlText>
        </MjmlColumn>
      </BasicSection>
    </TemplateBase>
  );
};
