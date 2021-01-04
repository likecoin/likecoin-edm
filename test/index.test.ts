import { getBasicWithAvatarTemplate, getNewSupporterTemplate } from '../src';

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
});
