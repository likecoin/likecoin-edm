import { getTransactionTemplate } from '../src';

import { SAMPLE_URL, SAMPLE_LIKER_DISPLAY_NAME } from './stub/samples';

describe('Render new transaction templates', () => {
  it('Default', () => {
    const html = getTransactionTemplate(
      {
        language: 'en',
        toDisplayName: SAMPLE_LIKER_DISPLAY_NAME,
        fromDisplayName: SAMPLE_LIKER_DISPLAY_NAME,
        viewTxURL: SAMPLE_URL,
        amount: '100',
      },
      { minify: false }
    );
    expect(html).toMatchSnapshot();
  });
});
