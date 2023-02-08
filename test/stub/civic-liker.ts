import { MonthlyReportCivicLikerV1TemplateProps } from '../../dist/templates/reports/monthly/civic-liker/v1.types';
import { MonthlyReportCivicLikerV2TemplateProps } from '../../dist/templates/reports/monthly/civic-liker/v2.types';
import { MonthlyReportCivicLikerV3TemplateProps } from '../../dist/templates/reports/monthly/civic-liker/v3.types';

import {
  SAMPLE_IMAGE_URL,
  SAMPLE_TIMESTAMP,
  SAMPLE_LIKER_ID,
  SAMPLE_LIKER_DISPLAY_NAME,
  SAMPLE_URL,
  SAMPLE_TEXT,
} from './samples';

export const MonthlyReportCivicLikerV1SampleData: MonthlyReportCivicLikerV1TemplateProps = {
  likerID: SAMPLE_LIKER_ID,
  displayName: SAMPLE_LIKER_DISPLAY_NAME,
  avatarSrc: SAMPLE_IMAGE_URL,
  isCivicLiker: true,
  timestamp: SAMPLE_TIMESTAMP,
  creatorsCount: 12,
  contentsCount: 34,
  supportedCreators: new Array(3).fill({
    likerID: SAMPLE_LIKER_ID,
    displayName: SAMPLE_LIKER_DISPLAY_NAME,
    avatarSrc: SAMPLE_IMAGE_URL,
    isCivicLiker: true,
    amountInLIKE: 1234,
    contentsCount: 12,
  }),
};

export const MonthlyReportCivicLikerV2SampleData: MonthlyReportCivicLikerV2TemplateProps = {
  likerID: SAMPLE_LIKER_ID,
  displayName: SAMPLE_LIKER_DISPLAY_NAME,
  avatarSrc: SAMPLE_IMAGE_URL,
  isCivicLiker: true,
  timestamp: SAMPLE_TIMESTAMP,
  totalSupportedCreatorsBySubscription: 12,
  totalSupportedCreatorsByFund: 34,
  billingDateTimestamp: SAMPLE_TIMESTAMP,
  subscribingCreators: new Array(3).fill({
    likerID: SAMPLE_LIKER_ID,
    displayName: SAMPLE_LIKER_DISPLAY_NAME,
    avatarSrc: SAMPLE_IMAGE_URL,
    isCivicLiker: true,
    amount: 5,
  }),
  fundedCreators: new Array(0).fill({
    likerID: SAMPLE_LIKER_ID,
    displayName: SAMPLE_LIKER_DISPLAY_NAME,
    avatarSrc: SAMPLE_IMAGE_URL,
    isCivicLiker: true,
    amount: 5,
  }),
  supportedContents: new Array(3).fill({
    url: SAMPLE_URL,
    title: SAMPLE_TEXT,
    imageSrc: SAMPLE_IMAGE_URL,
    likerID: SAMPLE_LIKER_ID,
    displayName: SAMPLE_LIKER_DISPLAY_NAME,
    avatarSrc: SAMPLE_IMAGE_URL,
    isCivicLiker: true,
  }),
  supportedContentsRemainsCount: 3,
  fundedCreatorsRemainsCount: 3,
};

export const MonthlyReportCivicLikerV2ClassicSampleData: MonthlyReportCivicLikerV2TemplateProps = {
  likerID: SAMPLE_LIKER_ID,
  displayName: SAMPLE_LIKER_DISPLAY_NAME,
  avatarSrc: SAMPLE_IMAGE_URL,
  isCivicLiker: true,
  timestamp: SAMPLE_TIMESTAMP,
  totalSupportedCreatorsBySubscription: 3,
  totalSupportedCreatorsByFund: 17,
  billingDateTimestamp: SAMPLE_TIMESTAMP,
  isClassicSubscribed: true,
  subscribingCreators: new Array(3).fill({
    likerID: SAMPLE_LIKER_ID,
    displayName: SAMPLE_LIKER_DISPLAY_NAME,
    avatarSrc: SAMPLE_IMAGE_URL,
    isCivicLiker: true,
    amount: 5,
  }),
  fundedCreators: new Array(17).fill({
    likerID: SAMPLE_LIKER_ID,
    displayName: SAMPLE_LIKER_DISPLAY_NAME,
    avatarSrc: SAMPLE_IMAGE_URL,
    isCivicLiker: true,
    amount: 5,
  }),
  supportedContents: new Array(3).fill({
    url: SAMPLE_URL,
    title: SAMPLE_TEXT,
    imageSrc: SAMPLE_IMAGE_URL,
    likerID: SAMPLE_LIKER_ID,
    displayName: SAMPLE_LIKER_DISPLAY_NAME,
    avatarSrc: SAMPLE_IMAGE_URL,
    isCivicLiker: true,
  }),
  supportedContentsRemainsCount: 3,
  fundedCreatorsRemainsCount: 6,
};

export const MonthlyReportCivicLikerV3SampleData: MonthlyReportCivicLikerV3TemplateProps = {
  likerID: SAMPLE_LIKER_ID,
  displayName: SAMPLE_LIKER_DISPLAY_NAME,
  avatarSrc: SAMPLE_IMAGE_URL,
  isCivicLiker: true,
  timestamp: SAMPLE_TIMESTAMP,
  activeSince: SAMPLE_TIMESTAMP,
  totalSupportedAmount: 145.1,
  totalSupportedAmountInUSD: 3.2,
  balance: 147.1,
  balanceInUSD: 3.25,
  delegationRewards: 67.5,
  creatorsFundRewards: 67.5,
  supportedWorkCount: 16,
  supportedCreatorCount: 7,
  supportedCreators: new Array(3).fill({
    likerID: SAMPLE_LIKER_ID,
    displayName: SAMPLE_LIKER_DISPLAY_NAME,
    avatarSrc: SAMPLE_IMAGE_URL,
    isCivicLiker: true,
    likeAmount: 5,
    workCount: 5,
  }),
};
