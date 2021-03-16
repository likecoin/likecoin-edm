import { getReferralTxTemplate } from '../src';

import { SAMPLE_IMAGE_URL } from './stub/samples';

const REFERRAL_PARAMS = {
  refereeLikerID: 'ngwingtat',
  refereeDisplayName: 'Ng Wing Tat',
  isRefereeCivicLiker: true,
  refereeAmount: 100,

  referrerLikerID: 'foundation',
  referrerDisplayName: 'Foundation',
  referrerAvatarSrc: SAMPLE_IMAGE_URL,
  referrerAmount: 100,
};

describe('Render referral tx templates', () => {
  it('Referee', () => {
    const html = getReferralTxTemplate({
      receiverLikerID: 'ngwingtat',
      ...REFERRAL_PARAMS,
    });
    expect(html).toMatchSnapshot();
  });

  it('Referrer', () => {
    const html = getReferralTxTemplate(
      {
        receiverLikerID: 'foundation',
        ...REFERRAL_PARAMS,
      },
      { minify: false }
    );
    expect(html).toMatchSnapshot();
  });
});
