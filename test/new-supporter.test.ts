import { getNewSupporterTemplate } from '../src';

import {
  SAMPLE_IMAGE_URL,
  SAMPLE_RICH_TEXT,
  SAMPLE_TEXT,
} from './stub/samples';

describe('Render new supporter templates', () => {
  it('Default', () => {
    const html = getNewSupporterTemplate(
      {
        title: SAMPLE_TEXT,
        content: SAMPLE_RICH_TEXT,
        isCivicLiker: true,
        avatarURL: SAMPLE_IMAGE_URL,
        billingPlan: 'USD100/month',
        amount: 20,
      },
      { minify: false }
    );
    expect(html).toMatchSnapshot();
  });
});
