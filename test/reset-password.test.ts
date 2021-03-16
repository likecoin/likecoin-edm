import { getResetPasswordTemplate } from '../src';

describe('Render new reset-password templates', () => {
  it('Default', () => {
    const html = getResetPasswordTemplate({
      language: 'en',
    });
    expect(html).toMatchSnapshot();
  });
});
