import {
  getBasicWithAvatarTemplate,
  getNewSupporterTemplate,
  getReferralTxTemplate,
} from '../src';

const referralParams = {
  refereeLikerID: 'ngwingtat',
  refereeDisplayName: 'Ng Wing Tat',
  isRefereeCivicLiker: true,
  refereeAmount: 100,

  referrerLikerID: 'foundation',
  referrerDisplayName: 'Foundation',
  referrerAvatarSrc: 'https://liker.land/logo.png',
  referrerAmount: 100,
};

describe('Parsing templates', () => {
  it('Basic with avatar', () => {
    const html = getBasicWithAvatarTemplate({
      title: 'Hello World',
      subtitle: 'The world is big',
      content: '<p>Hello Test</p><p>This is a test email.</p>',
      language: 'zh',
    });
    expect(html).toMatchSnapshot();
  });

  it('Basic with avatar', () => {
    const html = getBasicWithAvatarTemplate({
      isCivicLiker: false,
      avatarURL: 'https://via.placeholder.com/102.png',
    });
    expect(html).toMatchSnapshot();
  });

  it('Basic with avatar (Civic Liker)', () => {
    const html = getBasicWithAvatarTemplate({
      isCivicLiker: true,
      avatarURL: 'https://via.placeholder.com/102.png',
    });
    expect(html).toMatchSnapshot();
  });

  it('New supporter', () => {
    const html = getNewSupporterTemplate({
      subtitle: 'New subscription',
      billingPlan: 'USD5/mo',
      amount: 5,
    });
    expect(html).toMatchSnapshot();
  });

  it('Referral Tx (Referee)', () => {
    const html = getReferralTxTemplate({
      receiverLikerID: 'ngwingtat',
      ...referralParams,
    });
    expect(html).toMatchSnapshot();
  });

  it('Referral Tx (Referrer)', () => {
    const html = getReferralTxTemplate({
      receiverLikerID: 'foundation',
      ...referralParams,
    });
    expect(html).toMatchSnapshot();
  });
});
