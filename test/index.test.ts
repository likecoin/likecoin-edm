import { getNewSupporterTemplate } from '../src';

describe('Parsing HTML templates', () => {
  it('Simple parsing', () => {
    const html = getNewSupporterTemplate({
      title: 'Hello World',
      billingPlan: 'USD5/mo',
      amount: 5,
      avatarURL: 'https://static.like.co/likecoin_de-portrait.jpg',
      isCivicLiker: true,
      content: '<p>Hello Test</p><p>This is a test email.</p>',
      helpCenterText: 'Help Centre',
      unsubscribeText: 'Unsubscribe Now',
    });
    if (process.env.NODE_ENV !== 'production') {
      console.log(html);
    }
    expect(html).toMatchSnapshot();
  });
});
