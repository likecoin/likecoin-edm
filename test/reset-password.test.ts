import { getResetPasswordTemplate } from '../src';

describe('Render new reset-password templates', () => {
  it('Default', () => {
    const html = getResetPasswordTemplate(
      {
        language: 'en',
      },
      { minify: false }
    );
    expect(html).toMatchSnapshot();
  });
});
