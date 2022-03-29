import * as React from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import {
  MjmlColumn,
  MjmlDivider,
  MjmlGroup,
  MjmlTable,
  MjmlText,
} from 'mjml-react';

import * as Colors from '../../../../../constants/colors';

import { parseArray } from '../../../../../utils';

import { User } from '../../../../../types';

import { CivicLikerStakingCTASection } from '../../../../../components/cta-civic-liker-staking';
import { FooterSection } from '../../../../../components/footer';
import { HeaderSection } from '../../../../../components/header';
import { Link } from '../../../../../components/link';
import { TemplateBase } from '../../../../../components/template-base';
import { BasicSection } from '../../../../../components/sections/basic';
import { MonthlyReportHeaderSection } from '../../../../../components/sections/monthly-report-header';
import { SignedNumber } from '../../../../../components/signed-number';

import {
  MonthlyReportCreatorV2StatsColumnProps,
  MonthlyReportCreatorV2TemplateProps,
  MonthlyReportCreatorV2TopContent,
} from './types';
import { Avatar } from '../../../../../components/avatar';
import { TableRow } from '../../../../../components/table-row';

const MonthlyReportCreatorV2StatsColumn = ({
  label = '',
  value = 0,
  diff = 0,
  isDiffInPercent = false,
  isBold = false,
}: MonthlyReportCreatorV2StatsColumnProps) => {
  return (
    <MjmlColumn paddingLeft={20} paddingRight={20} paddingTop={32}>
      <MjmlDivider
        borderColor={isBold ? Colors.LikeGreen : Colors.PaleCyan}
        borderWidth={2}
      />
      <MjmlText
        paddingTop={32}
        color={isBold ? Colors.LikeGreen : Colors.Grey4A}
        fontSize={32}
        fontWeight={isBold ? 600 : 400}
        align="center"
      >
        {value}
      </MjmlText>
      <MjmlText paddingTop={12} fontSize={12} align="center">
        {label}
      </MjmlText>
      <MjmlText paddingTop={12} fontSize={12} align="center">
        <SignedNumber
          prefix="("
          value={diff * (isDiffInPercent ? 100 : 1)}
          suffix={`${isDiffInPercent ? '%' : ''})`}
        />
      </MjmlText>
    </MjmlColumn>
  );
};

const MonthlyReportCreatorV2TopSupporterColumn = ({
  avatarSrc = '',
  likerID = '',
  displayName = '',
  isCivicLiker = false,
  isFullWidth = false,
}) => {
  return (
    <MjmlColumn
      width={isFullWidth ? '100%' : '50%'}
      paddingTop={12}
      paddingBottom={12}
      paddingLeft={24}
      paddingRight={24}
      backgroundColor="white"
    >
      <MjmlTable width="100%">
        <tr>
          <td width={60}>
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
            style={{
              paddingLeft: 24,
              color: Colors.LikeGreen,
              fontSize: 16,
            }}
          >
            {likerID}
          </td>
        </tr>
      </MjmlTable>
    </MjmlColumn>
  );
};

const MonthlyReportCreatorV2TopSupportersSection = ({
  supporters = [] as User[],
}) => {
  const sections = new Array(Math.ceil(supporters.length / 2)).fill('');
  return (
    <>
      <BasicSection paddingTop={48}>
        <MjmlColumn>
          <MjmlText
            color={Colors.Grey4A}
            fontSize={16}
            fontWeight={600}
            align="center"
          >
            <FormattedMessage id="report.monthly.creator.v2.top-supporters" />
          </MjmlText>
        </MjmlColumn>
      </BasicSection>
      {sections.map((_, i) => {
        const leftSupporter = supporters[i * 2];
        const rightSupporter = supporters[i * 2 + 1];
        return (
          <BasicSection
            key={i}
            paddingTop={0}
            paddingBottom={i === sections.length - 1 ? 32 : 0}
          >
            <MonthlyReportCreatorV2TopSupporterColumn
              isFullWidth={!rightSupporter}
              {...leftSupporter}
            />
            {!!rightSupporter && (
              <MonthlyReportCreatorV2TopSupporterColumn {...rightSupporter} />
            )}
          </BasicSection>
        );
      })}
    </>
  );
};

const MonthlyReportCreatorV2TopContentsSection = ({
  contents = [] as MonthlyReportCreatorV2TopContent[],
}) => {
  return (
    <>
      <BasicSection paddingTop={48}>
        <MjmlColumn>
          <MjmlText
            color={Colors.Grey4A}
            fontSize={16}
            fontWeight={600}
            align="center"
          >
            <FormattedMessage id="report.monthly.creator.v2.top-contents" />
          </MjmlText>
        </MjmlColumn>
      </BasicSection>
      <BasicSection paddingTop={0}>
        <MjmlColumn backgroundColor="white">
          <MjmlTable cellpadding="8px">
            {contents.map((content, i) => (
              <TableRow key={content.url} isFirstChild={i === 0}>
                <td
                  width={48}
                  style={{
                    paddingLeft: 24,
                    paddingTop: 12,
                    paddingBottom: 12,
                  }}
                >
                  <Link href={content.url}>
                    <img
                      src={content.imageSrc}
                      alt={content.title}
                      style={{
                        display: 'block',
                        width: 48,
                        height: 48,
                        objectFit: 'cover',
                      }}
                    />
                  </Link>
                </td>
                <td style={{ paddingRight: 16 }}>
                  <Link
                    href={content.url}
                    style={{ color: Colors.LikeGreen, textDecoration: 'none' }}
                  >
                    {content.title}
                  </Link>
                </td>
                <td style={{ wordBreak: 'keep-all', textAlign: 'right' }}>
                  <div style={{ color: Colors.Grey9B, fontSize: 16 }}>
                    <FormattedNumber value={content.civicLikersCount || 0} />
                  </div>
                  <div style={{ color: Colors.Grey9B, fontSize: 12 }}>
                    <FormattedMessage
                      id="unit.civic-likers"
                      values={{ value: content.civicLikersCount }}
                    />
                  </div>
                </td>
                <td style={{ wordBreak: 'keep-all', textAlign: 'right' }}>
                  <div style={{ color: Colors.Grey9B, fontSize: 16 }}>
                    <FormattedNumber value={content.likersCount || 0} />
                  </div>
                  <div style={{ color: Colors.Grey9B, fontSize: 12 }}>
                    <FormattedMessage
                      id="unit.likers"
                      values={{ value: content.likersCount }}
                    />
                  </div>
                </td>
                <td
                  style={{
                    wordBreak: 'keep-all',
                    textAlign: 'right',
                    paddingRight: 24,
                  }}
                >
                  <div style={{ color: Colors.LikeGreen, fontSize: 16 }}>
                    <FormattedNumber value={content.likesAmount || 0} />
                  </div>
                  <div style={{ fontSize: 12 }}>$LIKE</div>
                </td>
              </TableRow>
            ))}
          </MjmlTable>
        </MjmlColumn>
      </BasicSection>
    </>
  );
};

export const MonthlyReportCreatorV2Template = ({
  subject,
  language,
  likerID,
  displayName,
  avatarSrc,
  isCivicLiker = false,
  timestamp = Date.now(),
  totalRewardsInLIKE = 0,
  totalRewardsInUSD = 0,
  totalRewardsDiffInPercent = 0,

  civicLikersCount = 0,
  civicLikersDiff = 0,
  likersCount = 0,
  likersDiff = 0,
  worksCount = 0,
  worksDiff = 0,
  likesCount = 0,
  likesDiffInPercent = 0,

  ...props
}: MonthlyReportCreatorV2TemplateProps) => {
  const topSupporters = parseArray<User>(props.topSupporters);
  const topContents = parseArray<MonthlyReportCreatorV2TopContent>(
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
              ({totalRewardsDiffInPercent * 100}%)
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
              <FormattedNumber value={totalRewardsInLIKE} />
              <span style={{ fontSize: 24 }}> $LIKE</span>
            </MjmlText>
          </MjmlColumn>
          <MjmlColumn width="15%">
            <MjmlText fontSize={12} lineHeight="36px" align="right">
              <SignedNumber
                prefix="("
                value={totalRewardsDiffInPercent * 100}
                suffix="%)"
              />
            </MjmlText>
          </MjmlColumn>
        </MjmlGroup>
      </BasicSection>
      <BasicSection paddingTop={24} paddingBottom={48} backgroundColor="white">
        <MjmlColumn>
          <MjmlText color={Colors.Grey9B} align="center">
            (USD <FormattedNumber value={totalRewardsInUSD} />
            )*
          </MjmlText>
        </MjmlColumn>
      </BasicSection>

      <BasicSection paddingTop={0} backgroundColor="white">
        <MonthlyReportCreatorV2StatsColumn
          label={<FormattedMessage id="unit.civic-likers" />}
          value={civicLikersCount}
          diff={civicLikersDiff}
          isBold={true}
        />
        <MonthlyReportCreatorV2StatsColumn
          label={<FormattedMessage id="unit.likers" />}
          value={likersCount}
          diff={likersDiff}
        />
        <MonthlyReportCreatorV2StatsColumn
          label={<FormattedMessage id="unit.works" />}
          value={worksCount}
          diff={worksDiff}
        />
        <MonthlyReportCreatorV2StatsColumn
          label={<FormattedMessage id="unit.likes" />}
          value={likesCount}
          diff={likesDiffInPercent}
          isDiffInPercent={true}
        />
      </BasicSection>

      <CivicLikerStakingCTASection isActive={isCivicLiker} />

      {topSupporters && (
        <MonthlyReportCreatorV2TopSupportersSection
          supporters={topSupporters}
        />
      )}
      {topContents && (
        <MonthlyReportCreatorV2TopContentsSection contents={topContents} />
      )}

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
