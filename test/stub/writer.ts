import { MonthlyReportWriterTemplateProps } from '../../src/templates/reports/monthly/writer/types';

import {
  SAMPLE_IMAGE_URL,
  SAMPLE_LIKER_ID,
  SAMPLE_TEXT,
  SAMPLE_TIMESTAMP,
  SAMPLE_URL,
} from './samples';

export const MonthlyReportWriterTemplateSampleData: MonthlyReportWriterTemplateProps = {
  likerID: SAMPLE_LIKER_ID,
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
