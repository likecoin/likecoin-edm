import { MonthlyReportCreatorTemplateProps } from '../../dist/templates/reports/monthly/creator/v1/types';
import { MonthlyReportCreatorV2TemplateProps } from '../../dist/templates/reports/monthly/creator/v2/types';

import {
  SAMPLE_IMAGE_URL,
  SAMPLE_LIKER_DISPLAY_NAME,
  SAMPLE_LIKER_ID,
  SAMPLE_TEXT,
  SAMPLE_TIMESTAMP,
  SAMPLE_URL,
} from './samples';

export const MonthlyReportCreatorTemplateSampleData: MonthlyReportCreatorTemplateProps = {
  likerID: SAMPLE_LIKER_ID,
  displayName: SAMPLE_LIKER_DISPLAY_NAME,
  avatarSrc: SAMPLE_IMAGE_URL,
  isCivicLiker: true,
  timestamp: SAMPLE_TIMESTAMP,
  totalRewardsDiffPercentStr: '10',
  totalRewardsInLIKE: 123456789,
  totalRewardsInUSD: 23,
  subscriptionAmountInLIKE: 12345,
  subscriptionAmountInUSD: 12.345,
  subscribersCount: 12,
  subscribersDiff: 1,
  legacySubscribersCount: 5,
  legacySubscribersDiff: -1,
  fundAmountInLIKE: 12345,
  fundAmountInUSD: 12.345,
  civicLikersCount: 23,
  civicLikersDiff: 12,
  likersCount: 123,
  likersDiff: -32,
  topContents: new Array(3).fill({
    title: SAMPLE_TEXT,
    imageSrc: SAMPLE_IMAGE_URL,
    likesCount: 321,
    url: SAMPLE_URL,
  }),
};

export const MonthlyReportCreatorV2TemplateSampleData: MonthlyReportCreatorV2TemplateProps = {
  likerID: SAMPLE_LIKER_ID,
  displayName: SAMPLE_LIKER_DISPLAY_NAME,
  avatarSrc: SAMPLE_IMAGE_URL,
  isCivicLiker: true,
  timestamp: SAMPLE_TIMESTAMP,
  totalRewardsDiffInPercent: -8,
  totalRewardsInLIKE: 1235.5,
  totalRewardsInUSD: 27.26,
  civicLikersCount: 12,
  civicLikersDiff: 1,
  likersCount: 16,
  likersDiff: 6,
  worksCount: 8,
  worksDiff: 1,
  likesCount: 53,
  likesDiffInPercent: -12,
  topSupporters: new Array(5).fill({
    likerID: SAMPLE_LIKER_ID,
    displayName: SAMPLE_LIKER_DISPLAY_NAME,
    avatarSrc: SAMPLE_IMAGE_URL,
    isCivicLiker: true,
  }),
  topContents: new Array(5).fill({
    title: SAMPLE_TEXT,
    imageSrc: SAMPLE_IMAGE_URL,
    url: SAMPLE_URL,
    likesAmount: 28.1,
    likersCount: 8,
    civicLikersCount: 8,
  }),
};
