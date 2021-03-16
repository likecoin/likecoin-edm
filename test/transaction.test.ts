import { getTransactionTemplate } from '../src';

import { SAMPLE_IMAGE_URL } from './stub/samples';

describe('Render new transaction templates', () => {
  it('Default', () => {
    const html = getTransactionTemplate({
      language: 'en',
      toDisplayName: 'taiwanrenshelly',
      fromDisplayName: 'taiwannanren',
      viewTxURL: SAMPLE_IMAGE_URL,
      amount: '100',
    });
    expect(html).toMatchSnapshot();
  });
});
