import { getBasicWithAvatarTemplate, getNewSupporterTemplate } from '../src';

describe('Parsing templates', () => {
  it('Basic with avatar', () => {
    const html = getBasicWithAvatarTemplate({
      title: 'Hello World',
      subtitle: 'The world is big',
      isCivicLiker: false,
      content: '<p>Hello Test</p><p>This is a test email.</p>',
      helpCenterText: 'Help Centre',
      unsubscribeText: 'Unsubscribe Now',
    });
    expect(html).toMatchSnapshot();
  });

  it('New supporter', () => {
    const html = getNewSupporterTemplate({
      title: 'Hello World',
      billingPlan: 'USD5/mo',
      amount: 5,
      isCivicLiker: true,
    });
    expect(html).toMatchSnapshot();
  });
});
