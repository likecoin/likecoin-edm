import { getTransactionTemplate } from '../src';

import {
  SAMPLE_URL,
  SAMPLE_LIKER_DISPLAY_NAME,
  SAMPLE_REMARK,
} from './stub/samples';

describe('Render new transaction templates', () => {
  it('Default', () => {
    const { body } = getTransactionTemplate(
      {
        language: 'en',
        toDisplayName: SAMPLE_LIKER_DISPLAY_NAME,
        fromDisplayName: SAMPLE_LIKER_DISPLAY_NAME,
        viewTxURL: SAMPLE_URL,
        amount: '100',
        remarks: SAMPLE_REMARK,
      },
      { minify: false }
    );
    expect(body).toMatchSnapshot();
  });
});
