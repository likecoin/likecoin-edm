import { MonthlyReportCivicLikerV1TemplateProps } from '../../src/templates/reports/monthly/civic-liker/v1.types';
import { MonthlyReportCivicLikerV2TemplateProps } from '../../src/templates/reports/monthly/civic-liker/v2.types';

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
  creatorfundingCreators: new Array(25).fill({
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
