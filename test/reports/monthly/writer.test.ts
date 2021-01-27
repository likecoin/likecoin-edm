import { getMonthlyReportWriterTemplate } from '../../../src';

import { SAMPLE_IMAGE_URL, SAMPLE_TEXT } from '../../stub';

describe('Render writer monthly report templates', () => {
  it('Default', () => {
    const html = getMonthlyReportWriterTemplate({
      likerID: 'ngwingtat',
      avatarSrc: SAMPLE_IMAGE_URL,
      isCivicLiker: true,
      timestamp: 1609459860000,
      totalRewardsDiffPercentStr: '10',
      totalRewardsInLIKE: 123456789,
      totalRewardsInUSD: 23,
      subscriptionAmountInLIKE: 12345,
      subscriptionAmountInUSD: 12.345,
      subscribersCount: 12,
      subscribersDiff: 1,
      legacySubscribersCount: 6,
      legacySubscribersDiff: -10,
      fundAmountInLIKE: 12345,
      fundAmountInUSD: 12.345,
      civicLikersCount: 26,
      civicLikersDiff: 13,
      likersCount: 103,
      likersDiff: -94,
      topContents: [
        {
          title: SAMPLE_TEXT,
          imageSrc: SAMPLE_IMAGE_URL,
          likesCount: 321,
          url: 'https://example.com/1',
        },
        {
          title: SAMPLE_TEXT,
          imageSrc: SAMPLE_IMAGE_URL,
          likesCount: 123,
          url: 'https://example.com/2',
        },
      ],
    });
    expect(html).toMatchSnapshot();
  });
});
